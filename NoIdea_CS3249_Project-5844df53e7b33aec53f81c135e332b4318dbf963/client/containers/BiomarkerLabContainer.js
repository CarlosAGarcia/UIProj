/** @module container/labUI */

/** 
 * @namespace biomarkerLab
 * @memberof module:container/main
 * @desc Container to connect BiomarkerLab component to its state and props.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import BiomarkerLab from '../components/Lab/BiomarkerLab';
import { receiveBiomarker } from '../actions/SampleActions';

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

class BiomarkerLabContainer extends Component {
  componentDidMount() {
    this.props.receiveBiomarker();
  }

  render() {
    return <BiomarkerLab {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BiomarkerLabContainer);
