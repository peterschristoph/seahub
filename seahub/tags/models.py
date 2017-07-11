# Copyright (c) 2012-2016 Seafile Ltd.
# -*- coding: utf-8 -*-
import uuid

from django.db import models

from seahub.base.fields import LowerCaseCharField

########## Manager
class FileUUIDMapManager(models.Manager):

    def get_fileuuidmap_by_uuid(self, uuid):
        try:
            return super(FileUUIDMapManager, self).get(uuid=uuid)
        except self.model.DoesNotExist:
            return None

    def get_or_create_fileuuidmap(self, repo_id, parent_path, filename, is_dir):
        """ create filemap by repo_id、 parent_path、filename、id_dir
            args:
            - `repo_id`:
            - `parent_path`:
            - `filename`: input a dirname  if it's dir
            - `id_dir`: input True or False
            return:
                uuid of filemap
        """
        uuid = self.get_fileuuidmap_by_path(repo_id, parent_path, filename, is_dir)
        if not uuid:
            uuid = self.model(repo_id=repo_id, parent_path=parent_path,
                    filename=filename, is_dir=is_dir)
            uuid.save(using=self._db)
        return uuid

    def get_fileuuidmap_by_path(self, repo_id, parent_path, filename, is_dir):
        """ get filemap uuid by repoid、 parent_path 、 filename 、is_dir
            args:
            - `repo_id`:
            - `parent_path`:
            - `filename`: input a dirname  if it's dir
            - `id_dir`: input True or False
            return:
                return uuid if it's exist,otherwise return None
        """
        try:
            uuid = super(FileUUIDMapManager, self).get(
                    repo_id=repo_id, parent_path=parent_path,
                    filename=filename, is_dir=is_dir)
            return uuid
        except self.model.DoesNotExist:
            return None

class TagsManager(models.Manager):
    def get_or_create_tag(self, tagname):
        try:
            return super(TagsManager, self).get(name=tagname)
        except self.model.DoesNotExist:
            tag = self.model(name=tagname)
            tag.save()
            return tag

class FileTagManager(models.Manager):
    def get_or_create_file_tag(self, repo_id, parent_path, filename, is_dir, tagname, creator):
        """ create filetag if tag does not exist, otherwise directly to True
            args:
            - `uuid`: uuid of filemap
            - `tagname`:
            - `creator`:

            return:
                (tag_obj, is_created)
        """
        fileuuidmap = FileUUIDMap.objects.get_or_create_fileuuidmap(repo_id, parent_path, filename, is_dir)
        tag = self.exists_filetag(fileuuidmap.uuid, tagname)
        if tag[1]:
            return (tag[0], False)
        else:
            tag = self.model(
                uuid=FileUUIDMap.objects.get_fileuuidmap_by_uuid(fileuuidmap.uuid),
                tag=Tags.objects.get_or_create_tag(tagname),
                username=creator
            )
            tag.save()
            return (tag, True)

    def exists_filetag(self, uuid_id, tagname):
        """ To determine whether the filetag exists.
            args:
            - `uuid`:uuid of filemap
            - `tagname`: tag name
            return:
                (tag_obj, is_exist)
        """
        try:
            tag = super(FileTagManager, self).get(uuid=uuid_id, tag__name=tagname)
            return (tag, True)
        except self.model.DoesNotExist:
            return (None, False)

    def get_all_file_tag_by_path(self, repo_id, parent_path, filename, is_dir):
        """
            args:
            - `repo_id`:
            - `parent_path`:
            - `filename`: file name or dir name
            - `is_dir`: True or False
            return list of filetag
        """
        return super(FileTagManager, self).filter(
                uuid__repo_id=repo_id,
                uuid__parent_path=parent_path,
                uuid__filename=filename, uuid__is_dir=is_dir
        )

    def delete_file_tag_by_path(self, repo_id, parent_path, filename, is_dir, tagname):
        """ delete one specific filetag
            args:
            - `uuid_id`:id of  uuid in filemap
            - `tagname`:
            return:
                always return True
        """
        try:
            filetag = super(FileTagManager, self).get(
                    uuid__repo_id=repo_id,
                    uuid__parent_path=parent_path,
                    uuid__filename=filename,
                    uuid__is_dir=is_dir,
                    tag__name=tagname
            )
            filetag.delete()
            return True
        except Exception as e:
            return False

    def delete_all_filetag_by_path(self, repo_id, parent_path, filename, is_dir):
        """ delete all filetag
            args:
            - `repo_id`: 
            - `parent_path`
            - `filename`
            - `is_dir`
            return:
                always return True
        """
        filetags = super(FileTagManager, self).filter(
                uuid__repo_id=repo_id,
                uuid__parent_path=parent_path,
                uuid__filename=filename,
                uuid__is_dir=is_dir
        ).delete()

########## Model
class FileUUIDMap(models.Model):
    uuid = models.UUIDField(primary_key=True, default=uuid.uuid4)
    repo_id = models.CharField(max_length=36)
    parent_path = models.TextField()
    filename = models.CharField(max_length=1024)
    is_dir = models.BooleanField()

    objects = FileUUIDMapManager()

class Tags(models.Model):
    name = models.CharField(max_length=1024, unique=True)

    objects = TagsManager()

class FileTag(models.Model):
    uuid = models.ForeignKey(FileUUIDMap, on_delete=models.CASCADE)
    tag = models.ForeignKey(Tags)
    username = LowerCaseCharField(max_length=255)

    objects = FileTagManager()

    def to_dict(self):
        return {'id': self.tag.id,'name': self.tag.name,'creator': self.username}

########## handle signals
import  logging

from django.dispatch import receiver
from seahub.signals import rename_dirent_successful

logger = logging.getLogger(__name__)

@receiver(rename_dirent_successful)
def update_fileuuidmap(sender, **kwargs):
    src_repo_id = kwargs.get('src_repo_id')
    src_parent_dir = kwargs.get('src_parent_dir')
    src_filename = kwargs.get('src_filename')
    dst_repo_id = kwargs.get('dst_repo_id')
    dst_parent_dir = kwargs.get('dst_parent_dir')
    dst_filename = kwargs.get('dst_filename')
    is_dir = kwargs.get('is_dir')
    src_fileuuidmap = FileUUIDMap.objects.get_fileuuidmap_by_path(src_repo_id,src_parent_dir, src_filename, is_dir)
    if src_fileuuidmap:
        src_fileuuidmap.repo_id = dst_repo_id
        src_fileuuidmap.parent_dir = dst_parent_dir
        src_fileuuidmap.filename = dst_filename
        src_fileuuidmap.is_dir = is_dir
        src_fileuuidmap.save()
