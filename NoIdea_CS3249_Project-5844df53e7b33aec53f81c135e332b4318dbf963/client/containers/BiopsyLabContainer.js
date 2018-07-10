/** @module container/labUI */

/** 
 * @namespace biopsyLab
 * @memberof module:container/main
 * @desc Container to connect BiopsyLab component to its state and props.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import BiopsyLab from '../components/Lab/BiopsyLab';
import { receiveBiopsy } from '../actions/SampleActions';

// Headers
const headers = {
  id: 'id',
  recvLab: 'recvLab',
  recvLabDate: 'recvLabDate',
  slidePrepStatus: 'slidePrepStatus',
  slidePrepDate: 'slidePrepDate',
  slideStainStatus: 'slideStainStatus',
  slideStainDate: 'slideStainDate'
};
const primaryKey = 'id';

/**
 * Takes it state from community data structure
 * @param {object[]} state - map current state to props
 */
const mapStateToProps = state => {
  return {
    object: headers,
    data: state.sampleBiopsy,
    string: primaryKey
  };
};

/**
 * @param {function} dispatch - map dispatch functions to props
 */
const mapDispatchToProps = dispatch => {
  return {
    receiveBiopsy: () => dispatch(receiveBiopsy())
  };
};

class BiopsyLabContainer extends Component {
  componentDidMount() {
    this.props.receiveBiopsy();
  }

  render() {
    return <BiopsyLab {...this.props} />;
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(BiopsyLabContainer);
