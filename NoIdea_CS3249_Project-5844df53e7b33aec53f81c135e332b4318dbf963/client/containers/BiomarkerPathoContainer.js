/** @module container/pathoUI */

/** 
 * @namespace biomarkerPatho
 * @memberof module:container/main
 * @desc Container to connect BiomarkerPatho component to its state and props.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import BiomarkerPatho from '../components/Pathologist/BiomarkerPatho';
import { receiveBiomarker } from '../actions/SampleActions';

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
    data: state.sampleBiomarker,
    string: primaryKey
  };
};

/**
 * @param {function} dispatch - map dispatch functions to props
 */
const mapDispatchToProps = dispatch => {
  return {
    receiveBiomarker: () => dispatch(receiveBiomarker())
  };
};

class BiomarkerPathoContaienr extends Component {
  componentDidMount() {
    this.props.receiveBiomarker();
  }

  render() {
    return <BiomarkerPatho {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BiomarkerPathoContaienr);
