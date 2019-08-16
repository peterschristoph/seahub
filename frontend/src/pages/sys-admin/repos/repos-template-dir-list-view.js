import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import { gettext } from '../../../utils/constants';
import { Utils } from '../../../utils/utils';
import CommonOperationDialog from '../../../components/dialog/common-operation-dialog';
import moment from 'moment';

class DirentItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isShowOpIcon: false,
      highlight: false,
      isDeleteDialogShow: false,
    };
  }

  handleMouseOver = () => {
    if (!this.props.isItemFreezed) {
      this.setState({
        isShowOpIcon: true,
        highlight: true,
      });
    }
  }

  handleMouseOut = () => {
    if (!this.props.isItemFreezed) {
      this.setState({
        isShowOpIcon: false,
        highlight: false
      });
    }
  }

  openFolder = () => {
    this.props.openFolder(this.props.dirent);
  }

  deleteDirent = () => {
    this.props.deleteDirent(this.props.dirent);
    this.onDeleteToggle();
  }

  downloadItem = () => {
    this.props.downloadItem(this.props.dirent);
  }

  onDeleteToggle = () => {
    this.setState({isDeleteDialogShow: !this.state.isDeleteDialogShow});
  }

  render () {
    let { isShowOpIcon, isDeleteDialogShow } = this.state;
    let { dirent } = this.props;
    let iconUrl = Utils.getDirentIcon(dirent);

    const direntName = '<span class="op-target">' + Utils.HTMLescape(dirent.name) + '</span>';
    let messageDeleteTrash = gettext('Are you sure you want to delete %s ?').replace('%s', direntName);


    return (
      <Fragment>
        <tr className={this.state.highlight ? 'tr-highlight' : ''} onMouseEnter={this.handleMouseOver} onMouseLeave={this.handleMouseOut} onClick={this.onRepoClick}>
          <th><img ref='drag_icon' src={iconUrl} width="24" alt='' /></th>
          {dirent.is_file ?
            <td>{dirent.name}</td> :
            <td><Link to="#" onClick={this.openFolder}>{dirent.name}</Link></td>
          }
          <td>
            {(isShowOpIcon) &&
            <div>
              <a href="#" className="op-icon sf2-icon-delete" title={gettext('Delete')} onClick={this.onDeleteToggle}></a>
              {dirent.size && 
                <a href="#" className="op-icon sf2-icon-download" title={gettext('Download')} onClick={this.downloadItem}></a>
              }
            </div>
            }
          </td>
          <td>{dirent.size}</td>
          <td>{moment(dirent.mtime).fromNow()}</td>
        </tr>
        {isDeleteDialogShow &&
          <CommonOperationDialog
            title={gettext('Delete')}
            message={messageDeleteTrash}
            executeOperation={this.deleteDirent}
            toggle={this.onDeleteToggle}
          />
        }
      </Fragment>
    );
  }
}


const propTypes = {
  direntList: PropTypes.array.isRequired,
};

class RepoTemplateDirListView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isItemFreezed: false,
      isImagePopupOpen: false,
      imageItems: [],
      imageIndex: 0,
      fileType: '',
      isCreateFileDialogShow: false,
      isCreateFolderDialogShow: false,
      progress: 0,
    };
  }

  render() {
    let { direntList } = this.props;

    return (
      <Fragment>
        <table className="table-hover">
          <thead onMouseDown={this.onThreadMouseDown} onContextMenu={this.onThreadContextMenu}>
            <tr>
              <th width="10%" className="pl10">{/*icon */}</th>
              <th width="40%">{gettext('Name')}</th>
              <th width="20%">{/*operation */}</th>
              <th width="10%">{gettext('Size')}</th>
              <th width="20%">{gettext('Last Update')}</th>
            </tr>
          </thead>
          <tbody>
            {direntList.length >= 1 && direntList.map((dirent, index) => {
              return <DirentItem
                key={index}
                dirent={dirent}
                openFolder={this.props.openFolder}
                deleteDirent={this.props.deleteDirent}
                downloadItem={this.props.downloadItem}
              />;
            })}
          </tbody>
        </table>

      </Fragment>
    );
  }
}

RepoTemplateDirListView.propTypes = propTypes;

export default RepoTemplateDirListView;