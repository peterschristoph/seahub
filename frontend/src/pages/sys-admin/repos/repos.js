import React, { Component, Fragment } from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane, Button } from 'reactstrap';
import { gettext } from '../../../utils/constants';
import { Utils } from '../../../utils/utils';
import SysAdminCreateRepoDialog from '../../../components/dialog/sysadmin-dialog/sysadmin-create-repo-dialog';
import CommonOperationDialog from '../../../components/dialog/common-operation-dialog';
import AllRepos from './repos-all';
import { seafileAPI } from '../../../utils/seafile-api';
import ReposSystem from './repos-system';
import ReposTrash from './repos-trash';
import classnames from 'classnames';
import toaster from '../../../components/toast';
import MainPanelTopbar from '../../org-admin/main-panel-topbar';

class Repos extends Component {

  constructor(props) {
    super(props);
    this.repoTrashRef = React.createRef();
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: 'all',
      isCreateRepoDialogShow: false,
      isCleanRepoTrashDialogShow: false
    };
  }

  componentDidMount () {
    if (location.href.endsWith('#system')) {
      this.setState({activeTab: 'system'});
    }
  }

  createRepo = (repoName, Owner) => {
    seafileAPI.sysAdminCreateRepo(repoName, Owner).then(res => {
      this.createRepoDialogToggle();
    }).catch(error => {
      let errMessage = Utils.getErrorMsg(error);
      toaster.danger(errMessage);
    });
  }

  cleanRepoTrash = () => {
    seafileAPI.sysAdminCleanTrashRepos().then(res => {
      this.cleanRepoTrashDialogToggle();
      this.repoTrashRef.current.cleanRepoTrashInState();
    }).catch(error => {
      let errMessage = Utils.getErrorMsg(error);
      toaster.danger(errMessage);
    });
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  createRepoDialogToggle = () => {
    this.setState({isCreateRepoDialogShow: !this.state.isCreateRepoDialogShow});
  }

  cleanRepoTrashDialogToggle = () => {
    this.setState({isCleanRepoTrashDialogShow: !this.state.isCleanRepoTrashDialogShow});
  }

  render() {
    let { isCreateRepoDialogShow, isCleanRepoTrashDialogShow } = this.state;
    let topbarChildren;
    if (this.state.activeTab === 'all') {
      topbarChildren = (
        <Button className={'btn btn-secondary operation-item'} onClick={this.createRepoDialogToggle}>{gettext('New Library')}</Button>
      );
    } else if (this.state.activeTab === 'trash') {
      topbarChildren = (
        <Button className={'btn btn-secondary operation-item'} onClick={this.cleanRepoTrashDialogToggle}>{gettext('Clean')}</Button>
      ); 
    }
    return (
      <Fragment>
        <MainPanelTopbar children={topbarChildren}/>
        <div className="main-panel-center flex-row">
          <div className="cur-view-container">
            <div className="cur-view-path align-items-center">
              <Nav >
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === 'all' })}
                    onClick={() => { this.toggle('all'); }}>
                    {gettext('All')}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === 'system' })}
                    onClick={() => { this.toggle('system'); }}>
                    {gettext('System')}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === 'trash' })}
                    onClick={() => { this.toggle('trash'); }}>
                    {gettext('Trash')}
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
            <div className="cur-view-content">
              <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="all">
                  {this.state.activeTab === 'all' &&
                    <AllRepos 
                      devicesPlatform={this.state.activeTab}
                    />
                  }
                </TabPane>
                <TabPane tabId="system">
                  {this.state.activeTab === 'system' &&
                    <ReposSystem 
                      devicesPlatform={this.state.activeTab}
                    />
                  }
                </TabPane>
                <TabPane tabId="trash">
                  {this.state.activeTab === 'trash' &&
                    <ReposTrash
                      ref={this.repoTrashRef}
                    />
                  }
                </TabPane>
              </TabContent>
            </div>
          </div>
        </div>
        {isCreateRepoDialogShow &&
          <SysAdminCreateRepoDialog
            createRepo={this.createRepo}
            createRepoDialogToggle={this.createRepoDialogToggle}
          />
        }
        {isCleanRepoTrashDialogShow &&
          <CommonOperationDialog
            title={gettext('Clear Trash')}
            message={gettext('Are you sure you want to clear trash?')}
            executeOperation={this.cleanRepoTrash}
            toggle={this.cleanRepoTrashDialogToggle} 
          />
        }
      </Fragment>
    );
  }
}

export default Repos;
