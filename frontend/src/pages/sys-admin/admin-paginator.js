import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { gettext } from '../../utils/constants';
import { Label } from 'reactstrap';


const propTypes = {
  gotoPreviousPage: PropTypes.func.isRequired,
  gotoNextPage: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  hasNextPage: PropTypes.bool.isRequired,
  canResetPerPage: PropTypes.bool.isRequired,
  resetPerPage: PropTypes.func
};

class AdminPagenator extends Component {

  resetPerPage = (perPage) => {
    this.props.resetPerPage(perPage);
  }

  render() {
    return (
      <Fragment>
        <div className="text-center">
          {this.props.currentPage != 1 &&
            <a onClick={this.props.gotoPreviousPage}>{gettext('Previous')}</a>
          }
          {this.props.hasNextPage &&
            <a onClick={this.props.gotoNextPage} className="ml-2">{gettext('Next')}</a>
          }
        </div>
        {this.props.canResetPerPage &&
          <div>
            {gettext('Per page:')}{' '}
            <Label onClick={() => {return this.resetPerPage(25);}}>25</Label>
            <Label onClick={() => {return this.resetPerPage(50);}}>50</Label>
            <Label onClick={() => {return this.resetPerPage(100);}}>100</Label>
          </div>
        }
      </Fragment>
    );
  }
}

AdminPagenator.propTypes = propTypes;

export default AdminPagenator;