import React, { Component, PropTypes } from 'react';
import sematable, { Table } from 'sematable';
import CheckboxReceived from '../../containers/PathoUI/CheckboxPathoReceived';
import CheckboxTested from '../../containers/PathoUI/CheckboxTested';
import EditButton from '../../containers/PathoUI/EditBiomarkerResult';

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
    key: 'recvPatho',
    header: 'Received',
    sortable: true,
    searchable: false,
    primaryKey: false,
    Component: CheckboxReceived
  }, // State (Checkbox)
  {
    key: 'recvPathoDate',
    header: 'Date Received',
    sortable: true,
    searchable: false,
    primaryKey: false
  }, // Prop - from Received
  {
    key: 'pathoTestStatus',
    header: 'Tested',
    sortable: true,
    searchable: false,
    primaryKey: false,
    Component: CheckboxTested
  }, //Prop - from form submitted
  {
    key: 'pathoTestDate',
    header: 'Test Date',
    sortable: true,
    searchable: false,
    primaryKey: false
  }, //Prop
  {
    key: 'result',
    header: 'Result',
    sortable: true,
    searchable: false,
    primaryKey: false
  }, //Prop
  {
    key: 'pathoRemarks',
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
 * Component for Biomarker pathologist table
 */
class BiomarkerPatho extends Component {
  render() {
    const filteredData = this.props.data.filter(
      sample => sample.slideStainStatus
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
BiomarkerPatho.propTypes = {
  headers: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  primaryKey: PropTypes.string.isRequired
};
export default sematable('BiomarkerPathoTable', BiomarkerPatho, columns);
