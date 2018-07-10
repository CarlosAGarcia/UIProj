import React, { Component, PropTypes } from 'react';
import sematable, { Table } from 'sematable';
import CkboxGynRegisterCont
  from '../containers/gynecologistUI/CkboxGynRegisterCont';
import CkboxBiopsyDoneCont
  from '../containers/gynecologistUI/CkboxBiopsyDoneCont';
import CkboxRecvBiopsyReportCont
  from '../containers/gynecologistUI/CkboxRecvBiopsyReportCont';
import GynRegButton from '../containers/gynecologistUI/GynRegButton';
import GynExamButton from '../containers/gynecologistUI/GynExamButton';
import GynTreatButton from '../containers/gynecologistUI/GynTreatButton';
import GynExitMsgButton from '../containers/gynecologistUI/GynExitMsgButton';
import GynSendBiopsyButton
  from '../containers/gynecologistUI/GynSendBiopsyButton';

// Define column content
const columns = [
  {
    key: 'patientID',
    header: 'Patient ID',
    sortable: true,
    searchable: true,
    primaryKey: true
  }, // Prop (text) - Patient ID key
  {
    key: 'name',
    header: 'Full Name',
    sortable: true,
    searchable: true,
    primaryKey: false
  }, // Prop (text) - Patient Name
  {
    key: 'biomarkerResult',
    header: 'Biomarker Result',
    sortable: false,
    searchable: false,
    primaryKey: false
  }, // Prop (text) - from lab
  {
    key: 'nurseExamStatus',
    header: 'Nurse Examination',
    sortable: false,
    searchable: false,
    primaryKey: false
  }, // Prop (text) - from nurse
  {
    key: 'gynRegistration',
    header: 'Registration Done',
    sortable: false,
    searchable: false,
    primaryKey: false,
    Component: CkboxGynRegisterCont
  }, // Prop - from forms
  {
    key: 'biopsyReportRecv',
    header: 'Received Biopsy report',
    sortable: false,
    searchable: false,
    primaryKey: false,
    Component: CkboxRecvBiopsyReportCont
  }, // State - checkbox
  {
    key: 'register',
    header: 'Register',
    Component: GynRegButton
  }, // State - (Gynae forms)
  {
    key: 'biopsySampleSent',
    header: 'Send Biopsy Sample',
    Component: GynSendBiopsyButton
  }, // State - promote comfirmation
  {
    key: 'examination',
    header: 'Examination',
    Component: GynExamButton
  }, // State - (Gynae forms)
  {
    key: 'treatment',
    header: 'Treatment',
    Component: GynTreatButton
  }, // State - (Gynae forms)
  {
    key: 'exitMsg',
    header: 'Exit Message',
    Component: GynExitMsgButton
  } // State - (Gynae forms)
];

/**
 * Component for Gynecologist Table
 */
class Gynecologist extends Component {
  render() {
    const filteredData = this.props.data.filter(
      patient =>
        patient.nurseExamStatus === 'Positive' ||
        (patient.biomarkerResult !== 'Negative' &&
          patient.biomarkerResult !== '')
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
 * @prop {string} propTypes.primaryKey - defines what column that should be primary key
 */
Gynecologist.propTypes = {
  headers: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  primaryKey: PropTypes.string.isRequired
};
export default sematable('GynecologistTable', Gynecologist, columns);
