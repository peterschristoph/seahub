# -*- coding: utf-8 -*-
# Generated by Django 1.11.11 on 2018-03-21 08:42


import datetime
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone
import seahub.base.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('group', '__first__'),
        ('tags', '__first__'),
    ]

    operations = [
        migrations.CreateModel(
            name='ClientLoginToken',
            fields=[
                ('token', models.CharField(max_length=32, primary_key=True, serialize=False)),
                ('username', models.CharField(db_index=True, max_length=255)),
                ('timestamp', models.DateTimeField(default=django.utils.timezone.now)),
            ],
        ),
        migrations.CreateModel(
            name='CommandsLastCheck',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('command_type', models.CharField(max_length=100)),
                ('last_check', models.DateTimeField()),
            ],
        ),
        migrations.CreateModel(
            name='DeviceToken',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('token', models.CharField(max_length=80)),
                ('user', seahub.base.fields.LowerCaseCharField(max_length=255)),
                ('platform', seahub.base.fields.LowerCaseCharField(max_length=32)),
                ('version', seahub.base.fields.LowerCaseCharField(max_length=16)),
                ('pversion', seahub.base.fields.LowerCaseCharField(max_length=16)),
            ],
        ),
        migrations.CreateModel(
            name='FileComment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('author', seahub.base.fields.LowerCaseCharField(db_index=True, max_length=255)),
                ('comment', models.TextField()),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now)),
                ('updated_at', models.DateTimeField(default=django.utils.timezone.now)),
                ('uuid', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='tags.FileUUIDMap')),
            ],
        ),
        migrations.CreateModel(
            name='FileDiscuss',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('repo_id', models.CharField(max_length=36)),
                ('path', models.TextField()),
                ('path_hash', models.CharField(db_index=True, max_length=12)),
                ('group_message', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='group.GroupMessage')),
            ],
        ),
        migrations.CreateModel(
            name='GroupEnabledModule',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('group_id', models.CharField(db_index=True, max_length=10)),
                ('module_name', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='InnerPubMsg',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('from_email', models.EmailField(max_length=254)),
                ('message', models.CharField(max_length=500)),
                ('timestamp', models.DateTimeField(default=datetime.datetime.now)),
            ],
            options={
                'ordering': ['-timestamp'],
            },
        ),
        migrations.CreateModel(
            name='InnerPubMsgReply',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('from_email', models.EmailField(max_length=254)),
                ('message', models.CharField(max_length=150)),
                ('timestamp', models.DateTimeField(default=datetime.datetime.now)),
                ('reply_to', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='base.InnerPubMsg')),
            ],
        ),
        migrations.CreateModel(
            name='UserEnabledModule',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(db_index=True, max_length=255)),
                ('module_name', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='UserLastLogin',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(db_index=True, max_length=255)),
                ('last_login', models.DateTimeField(default=django.utils.timezone.now)),
            ],
        ),
        migrations.CreateModel(
            name='UserStarredFiles',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(db_index=True, max_length=254)),
                ('org_id', models.IntegerField()),
                ('repo_id', models.CharField(db_index=True, max_length=36)),
                ('path', models.TextField()),
                ('is_dir', models.BooleanField()),
            ],
        ),
        migrations.AlterUniqueTogether(
            name='devicetoken',
            unique_together={('token', 'user')},
        ),
    ]
