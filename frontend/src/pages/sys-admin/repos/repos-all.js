import React, { Component, Fragment } from 'react';
import { seafileAPI } from '../../../utils/seafile-api';
import { gettext } from '../../../utils/constants';
import toaster from '../../../components/toast';
import { Utils } from '../../../utils/utils';
import EmptyTip from '../../../components/empty-tip';
import Loading from '../../../components/loading';
import AdminPagenator from '../admin-paginator';
import { Link } from '@reach/router';
import AdminRepoManul from './admin-repo-manul';
import ModalPortal from '../../../components/modal-portal';
import SysAdminShareDialog from '../../../components/dialog/sysadmin-dialog/sysadmin-share-dialog';
import DeleteRepoDialog from '../../../components/dialog/delete-repo-dialog';
import TransferDialog from '../../../components/dialog/transfer-dialog';
import SysAdminLibHistorySettingDialog from '../../../components/dialog/sysadmin-dialog/sysadmin-lib-history-setting-dialog';


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
                <th width="15%">{gettext('Files')}{' / '}{gettext('Size')}</th>
                <th width="30%">{gettext('ID')}</th>
                <th width="15%">{gettext('Owner')}</th>
                <th width="10%">{/*Operations*/}</th>
              </tr>
            </thead>
            {items && 
              <tbody>
                {items.map((item, index) => {
                  return (<Item 
                    key={index}
                    repo={item}
                    isItemFreezed={this.state.isItemFreezed}
                    onFreezedItem={this.onFreezedItem}
                    onUnfreezedItem={this.onUnfreezedItem}
                    onDeleteRepo={this.props.onDeleteRepo}
                    onTransferRepo={this.props.onTransferRepo}
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
      isShareDialogShow: false,
      isDeleteDialogShow: false,
      isTransferDialogShow: false,
      isHistorySettingDialogShow: false,
    };
  }

  onDeleteRepo = (repo) => {
    seafileAPI.sysAdminDeleteRepo(repo.id).then((res) => {
      this.props.onDeleteRepo(repo);
      let name = repo.name;
      var msg = gettext('Successfully deleted {name}.').replace('{name}', name);
      toaster.success(msg);
    }).catch((error) => {
      let errMessage = Utils.getErrorMsg(error);
      if (errMessage === gettext('Error')) {
        let name = repo.name;
        errMessage = gettext('Failed to delete {name}.').replace('{name}', name);
      }
      toaster.danger(errMessage);
    });
    this.onDeleteToggle();
  }

  onTransferRepo = (owner) => {
    seafileAPI.sysAdminTransferRepo(owner.email, this.props.repo.id).then((res) => {
      this.props.onTransferRepo(res.data, this.props.repo.id);
      let message = gettext('Successfully transferred the library.');
      toaster.success(message);

    }).catch(error => {
      if (error.response){
        toaster.danger(error.response.data.error_msg || gettext('Error'), {duration: 3});
      } else {
        toaster.danger(gettext('Failed. Please check the network.'), {duration: 3});
      }
    });
    this.onTransferToggle();
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
        this.onShareToggle();
        break;
      case 'Delete':
        this.onDeleteToggle();
        break;
      case 'Transfer':
        this.onTransferToggle();
        break;
      case 'History Setting':
        this.onHistorySettingToggle();
        break;
      default:
        break;
    }
  }

  onShareToggle = () => {
    this.setState({isShareDialogShow: !this.state.isShareDialogShow});
  }

  onDeleteToggle = () => {
    this.setState({isDeleteDialogShow: !this.state.isDeleteDialogShow});
  }

  onTransferToggle = () => {
    this.setState({isTransferDialogShow: !this.state.isTransferDialogShow});
  }

  onHistorySettingToggle = () => {
    this.setState({isHistorySettingDialogShow: !this.state.isHistorySettingDialogShow});
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
        <td>{repo.file_count}{' / '}{Utils.bytesToSize(repo.size)}</td>
        <td>{repo.id}</td>
        {repo.group_name ? 
          <td><Link to={'/sysadmin/#address-book/groups/' + repo.owner_name + '/'}>{repo.group_name}</Link></td> :
          <td><Link to={'/useradmin/info/' + repo.owner_email}>{repo.owner_name}</Link></td>
        }
        <td>
          {(repo.name && isShowOpIcon) &&
            <div>
              <a href="#" className="op-icon sf2-icon-share" title={gettext('Share')} onClick={this.onShareToggle}></a>
              <a href="#" className="op-icon sf2-icon-delete" title={gettext('Delete')} onClick={this.onDeleteToggle}></a>
              <AdminRepoManul
                isPC={true}
                repo={repo}
                onMenuItemClick={this.onMenuItemClick}
                onFreezedItem={this.props.onFreezedItem}
                onUnfreezedItem={this.onUnfreezedItem}
              />
            </div>
          }
        </td>
      </tr>
    );
  }

  render () {
    let { repo } = this.props;
    let { isShareDialogShow, isDeleteDialogShow, isTransferDialogShow } = this.state;
    return (
      <Fragment>
        {this.renderPCUI()}
        {isShareDialogShow &&
          <ModalPortal>
            <SysAdminShareDialog
              itemName={repo.name}
              itemPath={'/'}
              repoID={repo.id}
              repoEncrypted={repo.encrypted}
              enableDirPrivateShare={true}
              userPerm={repo.permission}
              toggleDialog={this.onShareToggle}
            />
          </ModalPortal>
        }
        {isDeleteDialogShow &&
          <ModalPortal>
            <DeleteRepoDialog
              repo={repo}
              onDeleteRepo={this.onDeleteRepo}
              toggle={this.onDeleteToggle}
            />
          </ModalPortal>
        }
        {isTransferDialogShow &&
          <ModalPortal>
            <TransferDialog
              itemName={repo.name}
              submit={this.onTransferRepo}
              toggleDialog={this.onTransferToggle}
            />
          </ModalPortal>
        }
        {this.state.isHistorySettingDialogShow &&
          <ModalPortal>
            <SysAdminLibHistorySettingDialog
              repoID={repo.id}
              itemName={repo.name}
              toggleDialog={this.onHistorySettingToggle}
            />
          </ModalPortal>
        }
      </Fragment>
    );
  }
}

class AllRepos extends Component {

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

  componentWillUnmount() {
    this.setState = (state, callback) => {
      return;
    };
  }

  getReposByPage = (page) => {
    let per_page = this.state.perPage;
    seafileAPI.sysAdminListAllRepos(page, per_page).then((res) => {
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

  onDeleteRepo = (repo) => {
    let new_repos = this.state.repos.filter(eachRepo => {
      return eachRepo.id != repo.id;
    });
    this.setState({
      repos: new_repos
    });
  }

  onTransferRepo = (repoInfo, repoID) => {
    let new_repos = this.state.repos.map(eachRepo => {
      if (eachRepo.id == repoID) {
        if (repoInfo.group_name) {
          eachRepo.group_name = repoInfo.group_name;
          eachRepo.owner_name = repoInfo.owner_name;
        } else {
          eachRepo.owner_name = repoInfo.owner_name;
          eachRepo.owner_email = repoInfo.owner_email;
          eachRepo.group_name = null;
        }
      }
      return eachRepo;
    });
    this.setState({
      repos: new_repos
    });
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
            onDeleteRepo={this.onDeleteRepo}
            onTransferRepo={this.onTransferRepo}
          />
        </div>
      </Fragment>
    );
  }
}

export default AllRepos;
