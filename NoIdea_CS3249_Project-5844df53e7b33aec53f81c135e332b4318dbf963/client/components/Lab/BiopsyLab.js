import React, { Component, PropTypes } from 'react';
import sematable, { Table } from 'sematable';
import CheckboxPrepared from '../../containers/LabUI/CheckboxPrepared';
import CheckboxStained from '../../containers/LabUI/CheckboxStained';
import CheckboxReceived from '../../containers/LabUI/CheckboxLabReceived';

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
    header: 'Date Received',
    sortable: true,
    searchable: false,
    primaryKey: false
  }, // Prop - from Received
  {
    key: 'slidePrepStatus',
    header: 'Slide Prepared',
    sortable: true,
    searchable: false,
    primaryKey: false,
    Component: CheckboxPrepared
  }, //State (Checkbox)
  {
    key: 'slidePrepDate',
    header: 'Slide Prepared Date',
    sortable: true,
    searchable: false,
    primaryKey: false
  }, //Prop
  {
    key: 'slideStainStatus',
    header: 'Slide Stained',
    sortable: true,
    searchable: false,
    primaryKey: false,
    Component: CheckboxStained
  }, //State (Checkbox)
  {
    key: 'slideStainDate',
    header: 'Slide Stained Date',
    sortable: true,
    searchable: false,
    primaryKey: false
  } // Prop
];

/**
 * Component for Biopsy lab table
 */
class BiopsyLab extends Component {
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
BiopsyLab.propTypes = {
  headers: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  primaryKey: PropTypes.string.isRequired
};
export default sematable('BiopsyLabTable', BiopsyLab, columns);
