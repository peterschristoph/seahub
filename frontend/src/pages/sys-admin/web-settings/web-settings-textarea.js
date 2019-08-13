import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button, Label } from 'reactstrap';
import { gettext } from '../../../utils/constants';

const propTypes = {
  saveSetting: PropTypes.func.isRequired,
  keyText: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  helpTip: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired
};

class WebSettingTextArea extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isShowBtns: false,
      value: this.props.value
    };
  }

  showBtns = () => {
    this.setState({isShowBtns: !this.state.isShowBtns});
  }

  hideBtns = () => {
    // when turn off btns, and value be changed, 
    // restore value to its origin value
    if (this.state.isShowBtns && (this.props.value != this.state.temp_value)) {
      this.setState({value: this.props.value});
    }
    this.setState({isShowBtns: false});
  }

  changeContent = (e) => {
    this.setState({ value: e.target.value });
  }

  saveSetting = (e) => {
    let { value } = this.state;
    // firstly prevent blur, then if not changed, do nothing
    // if value changed, send request, and hide btn
    e.preventDefault();
    if (value == this.props.value) return;
    this.props.saveSetting(this.props.keyText, value);
    this.setState({isShowBtns: false});
  }

  render() {
    let { isShowBtns, value } = this.state;
    let { helpTip, displayName } = this.props;
    return (
      <Fragment>
        <Row>
          <Col xs="3">
            <Label className="font-weight-bold">{displayName}</Label>
          </Col>
          <Col xs="4">
            <textarea rows="4" cols="30" type={'text'} onChange={this.changeContent} onFocus={this.showBtns} onBlur={this.hideBtns} value={value}/>
            <p>{helpTip}</p>
          </Col>
          <Col xs="4">
            {isShowBtns &&
              <Fragment>
                <Button className="btn btn-outline-primary" color="success" onMouseDown={this.saveSetting}>{gettext('Save')}</Button>
                <Button className="ml-1" color="outline-danger">{gettext('Cancel')}</Button>
              </Fragment>
            }
          </Col>
        </Row>
      </Fragment>
    );
  }
}

WebSettingTextArea.propTypes = propTypes;

export default WebSettingTextArea;