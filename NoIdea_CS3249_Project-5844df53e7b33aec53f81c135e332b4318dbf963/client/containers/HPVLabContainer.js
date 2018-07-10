/** @module container/labUI */

/** 
 * @namespace hpvLab
 * @memberof module:container/main
 * @desc Container to connect HPVLab component to its state and props.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import HPVLab from '../components/Lab/HPVLab';
import { receiveHPV } from '../actions/SampleActions';

// Headers
const headers = {
  id: 'id',
  recvLab: 'recvLab',
  recvLabDate: 'recvLabDate',
  labTestStatus: 'labTestStatus',
  labTestDate: 'testDate',
  labTestResult: 'labTestResult',
  labRemark: 'labRemark',
  testValue: 'testValue'
};
const primaryKey = 'id';

/**
 * Takes it state from community data structure
 * @param {object[]} state - map current state to props
 */
const mapStateToProps = state => {
  return {
    object: headers,
    data: state.sampleHPV,
    string: primaryKey
  };
};

/**
 * @param {function} dispatch - map dispatch functions to props
 */
const mapDispatchToProps = dispatch => {
  return {
    receiveHPV: () => dispatch(receiveHPV())
  };
};

class HPVLabContainer extends Component {
  componentDidMount() {
    this.props.receiveHPV();
  }

  render() {
    return <HPVLab {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HPVLabContainer);
