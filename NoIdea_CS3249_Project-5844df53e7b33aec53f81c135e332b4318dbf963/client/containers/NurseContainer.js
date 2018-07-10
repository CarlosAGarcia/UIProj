/** @module container/nurseUI */

/** 
 * @namespace nurse
 * @memberof module:container/main
 * @desc Container to connect Nurse component to its state and props.
 */
import { connect } from 'react-redux';
import Nurse from '../components/Nurse';
import React, { Component } from 'react';
import { retrievePatient } from '../actions/PatientActions';

// Sematable headers
const headers = {
  patientID: 'patientID',
  name: 'name',
  sampleID: 'sampleID',
  nurseRegistration: 'nurseRegistration',
  informedHPV: 'informedHPV',
  seen: 'seen',
  nurseExamStatus: 'nurseExamStatus',
  biomarkerTaken: 'biomarkerTaken',
  biomarkerResult: 'biomarkerResult',
  questionnaire: 'questionnaire',
  informedBiomarker: 'informedBiomarker'
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

class NurseContainer extends Component {
  componentDidMount() {
    this.props.retrievePatient();
  }

  render() {
    return <Nurse {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NurseContainer);
