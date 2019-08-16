import React, { Component, Fragment } from 'react';
import { seafileAPI } from '../../../utils/seafile-api';
import { gettext } from '../../../utils/constants';
import toaster from '../../../components/toast';
import { Utils } from '../../../utils/utils';
import EmptyTip from '../../../components/empty-tip';
import moment from 'moment';
import Loading from '../../../components/loading';
import AdminPagenator from '../admin-paginator';
import { Link } from '@reach/router';
import ModalPortal from '../../../components/modal-portal';
import CommonOperationDialog from '../../../components/dialog/common-operation-dialog';


class Content extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isItemFreezed: false
    };
  }

  onFreezedItem = () => {
    this.setState({isItemFreezed: true});
  }

  onUnfreezedItem = () => {
    this.setState({isItemFreezed: false});
  }

  getPreviousPageList = () => {
    this.props.getListByPage(this.props.pageInfo.current_page - 1);
  }

  getNextPageList = () => {
    this.props.getListByPage(this.props.pageInfo.current_page + 1);
  }

  render() {
    const { loading, errorMsg, items, pageInfo } = this.props;
    if (loading) {
      return <Loading />;
    } else if (errorMsg) {
      return <p className="error text-center">{errorMsg}</p>;
    } else {
      const emptyTip = (
        <EmptyTip>
          <h2>{gettext('No connected devices')}</h2>
        </EmptyTip>
      );
      const table = (
        <Fragment>
          <table className="table-hover">
            <thead>
              <tr>
                <th width="5%">{/*icon*/}</th>
                <th width="25%">{gettext('Name')}</th>
                <th width="30%">{gettext('Owner')}</th>
                <th width="30%">{gettext('Deleted Time')}</th>
                <th width="10%">{/*Operations*/}</th>
              </tr>
            </thead>
            {items.length >= 1 && 
              <tbody>
                {items.map((item, index) => {
                  return (<Item 
                    key={index}
                    repo={item}
                    isItemFreezed={this.state.isItemFreezed}
                    onFreezedItem={this.onFreezedItem}
                    onUnfreezedItem={this.onUnfreezedItem}
                    onDeleteRepoTrash={this.props.onDeleteRepoTrash}
                    onRestoreRepoTrash={this.props.onRestoreRepoTrash}
                  />);
                })}
              </tbody>
            }
          </table>
          {/* this page has no reset perpage option in old version, if new version need 
          this option, just uncomment this.props.resetPerPage, 
          and set canResetPerPage to true */}
          <AdminPagenator
            gotoPreviousPage={this.getPreviousPageList}
            gotoNextPage={this.getNextPageList}
            currentPage={pageInfo.current_page}
            hasNextPage={pageInfo.has_next_page}
            canResetPerPage={false}
            //resetPerPage={this.props.resetPerPage}
          />
        </Fragment>
      );

      return items.length ? table : emptyTip; 
    }
  }
}

class Item extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isShowOpIcon: false,
      highlight: false,
      isCleanRepoTrashDialogShow: false,
      isDeleteRepoTrashDialogShow: false,
      isRestoreRepoTrashDialogShow: false,
    };
  }

  onDeleteRepo = () => {
    let { repo } = this.props;
    seafileAPI.sysAdminDeleteTrashRepos(repo.id).then((res) => {
      this.props.onDeleteRepoTrash(repo);
      let name = repo.name;
      var msg = gettext('Successfully deleted {name} compeletly.').replace('{name}', name);
      toaster.success(msg);
    }).catch((error) => {
      let errMessage = Utils.getErrorMsg(error);
      if (errMessage === gettext('Error')) {
        let name = repo.name;
        errMessage = gettext('Failed to delete {name}.').replace('{name}', name);
      }
      toaster.danger(errMessage);
    });
    this.onDeleteRepoTrashToggle();
  }

  onRestoreRepo = () => {
    seafileAPI.sysAdminRestoreTrashRepos(this.props.repo.id).then((res) => {
      this.props.onRestoreRepoTrash(this.props.repo);
      let message = gettext('Successfully restored the library.');
      toaster.success(message);
    }).catch(error => {
      if (error.response){
        toaster.danger(error.response.data.error_msg || gettext('Error'), {duration: 3});
      } else {
        toaster.danger(gettext('Failed. Please check the network.'), {duration: 3});
      }
    });
    this.onRestoreRepoTrashToggle();
  }

  onHistorySettingToggle = () => {

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

  onUnfreezedItem = () => {
    this.setState({
      highlight: false,
      isOpIconShow: false,
    });
    this.props.onUnfreezedItem();
  }

  onMenuItemClick = (operation) => {
    switch(operation) {
      case 'Share':
        this.onCleanRepoTrashToggle();
        break;
      case 'Delete':
        this.onDeleteRepoTrashToggle();
        break;
      case 'Transfer':
        this.onRestoreRepoTrashToggle();
        break;
      default:
        break;
    }
  }

  onCleanRepoTrashToggle = () => {
    this.setState({isCleanRepoTrashDialogShow: !this.state.isCleanRepoTrashDialogShow});
  }

  onDeleteRepoTrashToggle = () => {
    this.setState({isDeleteRepoTrashDialogShow: !this.state.isDeleteRepoTrashDialogShow});
  }

  onRestoreRepoTrashToggle = () => {
    this.setState({isRestoreRepoTrashDialogShow: !this.state.isRestoreRepoTrashDialogShow});
  }

  renderPCUI = () => {
    let repo = this.props.repo;
    let { isShowOpIcon } = this.state;
    let iconUrl = Utils.getLibIconUrl(repo);
    let iconTitle = Utils.getLibIconTitle(repo);

    return (
      <tr className={this.state.highlight ? 'tr-highlight' : ''} onMouseEnter={this.handleMouseOver} onMouseLeave={this.handleMouseOut} onClick={this.onRepoClick}>
        <td><img src={iconUrl} title={iconTitle} alt={iconTitle} width="24" /></td>
        <td>{repo.name}</td>
        <td><Link to={'/useradmin/info/' + repo.owner}>{repo.owner_name}</Link></td>
        <td>{moment(repo.delete_time).fromNow()}</td>
        <td>
          {(repo.name && isShowOpIcon) &&
            <div>
              <a href="#" className="op-icon sf2-icon-reply" title={gettext('Restore')} onClick={this.onRestoreRepoTrashToggle}></a>
              <a href="#" className="op-icon sf2-icon-delete" title={gettext('Delete')} onClick={this.onDeleteRepoTrashToggle}></a>
            </div>
          }
        </td>
      </tr>
    );
  }

  render () {
    let { repo } = this.props;
    let { isDeleteRepoTrashDialogShow, isRestoreRepoTrashDialogShow } = this.state;

    const repoName = '<span class="op-target">' + Utils.HTMLescape(repo.name) + '</span>';
    let messageDeleteTrash = gettext('Are you sure you want to delete %s completely?').replace('%s', repoName);
    let messageRestoreTrash = gettext('Are you sure you want to restore %s ?').replace('%s', repoName);

    return (
      <Fragment>
        {this.renderPCUI()}
        {isDeleteRepoTrashDialogShow &&
          <ModalPortal>
            <CommonOperationDialog
              title={gettext('Delete Library')}
              message={messageDeleteTrash}
              executeOperation={this.onDeleteRepo}
              toggle={this.onCleanRepoTrashToggle}
            />
          </ModalPortal>
        }
        {isRestoreRepoTrashDialogShow &&
          <ModalPortal>
            <CommonOperationDialog
              title={gettext('Restore Library')}
              message={messageRestoreTrash}
              executeOperation={this.onRestoreRepo}
              toggle={this.onRestoreRepoTrashToggle}
            />
          </ModalPortal>
        }
      </Fragment>
    );
  }
}

class ReposTrash extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      errorMsg: '',
      repos: {},
      pageInfo: {},
      perPage: 50
    };
  }

  componentDidMount () {
    this.getReposByPage(1);
  }

  getReposByPage = (page) => {
    let per_page = this.state.perPage;
    seafileAPI.sysAdminListTrashRepos(page, per_page).then((res) => {
      this.setState({
        repos: res.data.repos,
        pageInfo: res.data.page_info,
        loading: false
      });
    }).catch((error) => {
      let errMessage = Utils.getErrorMsg(error);
      toaster.danger(errMessage);
    });
  }

  onDeleteRepoTrash = (repo) => {
    let new_repos = this.state.repos.filter(eachRepo => {
      return eachRepo.id != repo.id;
    });
    this.setState({
      repos: new_repos
    });
  }

  onRestoreRepoTrash = (repo) => {
    let new_repos = this.state.repos.filter(eachRepo => {
      return eachRepo.id != repo.id;
    });
    this.setState({
      repos: new_repos
    }); 
  }
  
  cleanRepoTrashInState = () => {
    this.setState({repos: {}});
  }

  render() {
    return (
      <Fragment>
        <div className="cur-view-content">
          <Content
            getListByPage={this.getReposByPage}
            toggleModal={this.toggleModal}
            loading={this.state.loading}
            errorMsg={this.state.errorMsg}
            items={this.state.repos}
            pageInfo={this.state.pageInfo}
            onDeleteRepoTrash={this.onDeleteRepoTrash}
            onRestoreRepoTrash={this.onRestoreRepoTrash}
          />
        </div>
      </Fragment>
    );
  }
}

export default ReposTrash;
