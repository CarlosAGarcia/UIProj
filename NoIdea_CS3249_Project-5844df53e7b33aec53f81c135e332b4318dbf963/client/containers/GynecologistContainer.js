/** @module container/gynecologistUI */

/** 
 * @namespace gynecologist
 * @memberof module:container/main
 * @desc Container to connect Gynecologist component to its state and props.
 */
import { connect } from 'react-redux';
import Gynecologist from '../components/Gynecologist';
import React, { Component } from 'react';
import { retrievePatient } from '../actions/PatientActions';

// Sematable headers
const headers = {
  patientID: 'patientID',
  name: 'name',
  biomarkerResult: 'biomarkerResult',
  nurseExamStatus: 'nurseExamStatus',
  gynRegistration: 'gynRegistration',
  gynExamStatus: 'gynExamStatus',
  biopsyDone: 'biopsyDone',
  biopsyReportRecv: 'biopsyReportRecv'
};

const primaryKey = 'patientID';

/**
 * Takes it state from community data structure
 * @param {object[]} state - map current state to props
 */
const mapStateToProps = state => {
  return {
    object: headers,
    data: state.patient,
    string: primaryKey
  };
};

/**
 * @param {function} dispatch - map dispatch functions to props
 */
const mapDispatchToProps = dispatch => {
  return {
    retrievePatient: () => dispatch(retrievePatient())
  };
};

class GynecologistContainer extends Component {
  componentDidMount() {
    this.props.retrievePatient();
  }

  render() {
    return <Gynecologist {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GynecologistContainer);
