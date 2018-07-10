/** @module container/pathoUI */

/** 
 * @namespace biopsyPatho
 * @memberof module:container/main
 * @desc Container to connect BiopsyPatho component to its state and props.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import BiopsyPatho from '../components/Pathologist/BiopsyPatho';
import { receiveBiopsy } from '../actions/SampleActions';

// Headers
const headers = {
  id: 'id',
  recvPatho: 'recvPatho',
  recvPathoDate: 'recvPathoDate',
  pathoTestStatus: 'pathoTestStatus',
  pathoTestDate: 'pathoTestDate',
  pathoRemarks: 'pathoRemarks'
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

class BiopsyPathoContainer extends Component {
  componentDidMount() {
    this.props.receiveBiopsy();
  }

  render() {
    return <BiopsyPatho {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BiopsyPathoContainer);
