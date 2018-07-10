import React, { Component, PropTypes } from 'react';
import sematable, { Table } from 'sematable';
import CheckboxTested from '../../containers/LabUI/CheckboxTested';
import CheckboxReceived from '../../containers/LabUI/CheckboxLabReceived';
import EditButton from '../../containers/LabUI/EditResult';

// Define column content
const columns = [
  {
    key: 'id',
    header: 'Sample ID',
    sortable: true,
    searchable: true,
    primaryKey: true
  }, //Prop
  {
    key: 'patientID',
    header: 'Patient ID',
    sortable: true,
    searchable: true
  }, //Prop
  {
    key: 'recvLab',
    header: 'Received',
    sortable: true,
    searchable: false,
    primaryKey: false,
    Component: CheckboxReceived
  }, // State (Checkbox)
  {
    key: 'recvLabDate',
    header: 'Date received',
    sortable: true,
    searchable: false,
    primaryKey: false
  }, // Prop - from Received
  {
    key: 'labTestStatus',
    header: 'Tested',
    sortable: true,
    searchable: false,
    primaryKey: false,
    Component: CheckboxTested
  }, // State (Checkbox)
  {
    key: 'labTestDate',
    header: 'Date Tested',
    sortable: true,
    searchable: false,
    primaryKey: false
  }, // Prop
  {
    key: 'labTestResult',
    header: 'Test Result',
    sortable: true,
    searchable: false,
    primaryKey: false
  }, // Prop
  {
    key: 'testValue',
    header: 'HPV Value'
  }, // Prop
  {
    key: 'labRemark',
    header: 'Remarks',
    sortable: false,
    searchable: false,
    primaryKey: false
  }, // Prop
  {
    key: 'edit',
    header: 'Add/Edit Result',
    Component: EditButton
  } //State
];

/**
 * Component for HPV Lab table
 */
class HPVLab extends Component {
  render() {
    return (
      <div>
        <Table {...this.props} columns={columns} />
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
HPVLab.propTypes = {
  headers: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  primaryKey: PropTypes.string.isRequired
};
export default sematable('HPVLabTable', HPVLab, columns);
