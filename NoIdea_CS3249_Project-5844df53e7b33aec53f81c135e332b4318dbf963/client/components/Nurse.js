import React, { Component, PropTypes } from 'react';
import sematable, { Table } from 'sematable';
import CkboxNurseRegisterCont
  from '../containers/nurseUI/CkboxNurseRegisterCont';
import CkboxInformedHPVCont from '../containers/nurseUI/CkboxInformedHPVCont';
import CkboxPatientSeenCont from '../containers/nurseUI/CkboxPatientSeenCont';
import SelectExamStatusCont from '../containers/nurseUI/SelectExamStatusCont';
import CkboxBiomarkerTakenCont
  from '../containers/nurseUI/CkboxBiomarkerTakenCont';
import CkboxQuestCont from '../containers/nurseUI/CkboxQuestCont';
import CkboxInformedBiomarkerCont
  from '../containers/nurseUI/CkboxInformedBiomarkerCont';

import NurseRegButton from '../containers/nurseUI/NurseRegButton';
import NurseRHButton from '../containers/nurseUI/NurseRHButton';
import NurseExamButton from '../containers/nurseUI/NurseExamButton';
import NurseExitMsgButton from '../containers/nurseUI/NurseExitMsgButton';
import NurseSendBiomarkerButton
  from '../containers/nurseUI/NurseSendBiomarkerButton';
// Define column content
const columns = [
  {
    key: 'patientID',
    header: 'Patient ID',
    sortable: true,
    searchable: true,
    primaryKey: true
  }, // Patient ID key - prop from PersonID
  {
    key: 'name',
    header: 'Full Name',
    sortable: true,
    searchable: true,
    primaryKey: false
  }, // Prop (text) - Patient Name
  {
    key: 'sampleID',
    header: 'HPV Sample ID',
    sortable: true,
    searchable: true,
    primaryKey: false
  }, // HPV sample ID key - generated
  {
    key: 'nurseRegistration',
    header: 'Registration Done',
    sortable: false,
    searchable: false,
    primaryKey: false,
    Component: CkboxNurseRegisterCont
  }, // Prop - computed by form
  {
    key: 'informedHPV',
    header: 'Informed HPV result',
    sortable: false,
    searchable: false,
    primaryKey: false,
    Component: CkboxInformedHPVCont
  }, // State - (checkbox)
  {
    key: 'seen',
    header: 'Patient seen at clinic',
    sortable: false,
    searchable: false,
    primaryKey: false,
    Component: CkboxPatientSeenCont
  }, // State - (checkbox)
  {
    key: 'nurseExamStatus',
    header: 'Examination status',
    sortable: false,
    searchable: false,
    primaryKey: false,
    Component: SelectExamStatusCont
  }, // State - (select)
  {
    key: 'biomarkerTaken',
    header: 'Biomarker taken',
    sortable: false,
    searchable: false,
    primaryKey: false,
    Component: CkboxBiomarkerTakenCont
  }, // State - (checkbox)
  {
    key: 'biomarkerResult',
    header: 'Biomarker result',
    sortable: false,
    searchable: false,
    primaryKey: false
  }, // prop (text) - from lab
  {
    key: 'questionnaire',
    header: 'Questionnaire #2',
    sortable: false,
    searchable: false,
    primaryKey: false,
    Component: CkboxQuestCont
  }, // State - (checkbox) //TODO: should this be a prop and computed from form instead?
  {
    key: 'informedBiomarker',
    header: 'Informed Biomarker result',
    sortable: false,
    searchable: false,
    primaryKey: false,
    Component: CkboxInformedBiomarkerCont
  }, // State - (checkbox)
  {
    key: 'register',
    header: 'Register',
    Component: NurseRegButton
  }, // State - (Gynae forms)
  {
    key: 'biomarkerSampleSent',
    header: 'Send Biomarker Sample',
    Component: NurseSendBiomarkerButton
  }, // State - promote comfirmation
  {
    key: 'reproductiveHealth',
    header: 'Reproductive Health',
    Component: NurseRHButton
  }, // State - (Gynae forms)
  {
    key: 'examination',
    header: 'Examination',
    Component: NurseExamButton
  }, // State - (Gynae forms)
  {
    key: 'exitMsg',
    header: 'Exit Message',
    Component: NurseExitMsgButton
  } // State - (Gynae forms)
];

/**
 * Component for Nurse Table
 */
class Nurse extends Component {
  render() {
    const filteredData = this.props.data.filter(
      patient => patient.HPVResult === 'Positive'
    );
    return (
      <div>
        <Table {...this.props} data={filteredData} columns={columns} />
      </div>
    );
  }
}

/**
 * @prop {object} propTypes
 * @prop {object} propTypes.headers - headers of columns 
 * @prop {object[]} propTypes.data - state
 * @prop {object[]} propTypes.person - state
 * @prop {string} propTypes.primaryKey - defines what column that should be primary key
 */
Nurse.propTypes = {
  headers: PropTypes.object.isRequired, // should contain callbacks for sorting and selection!?
  data: PropTypes.array.isRequired,
  primaryKey: PropTypes.string.isRequired
};
export default sematable('NurseTable', Nurse, columns);
