import React, { Component, PropTypes } from 'react';
import sematable, { Table } from 'sematable';
// Containers
import CkboxEligAskCont from '../containers/householdUI/CkboxEligAskCont';
import CkboxPresenceCont from '../containers/householdUI/CkboxPresenceCont';
import CkboxEligStudyCont from '../containers/householdUI/CkboxEligStudyCont';
import CkboxQuestCont from '../containers/householdUI/CkboxQuestCont';
import CkboxSampleCont from '../containers/householdUI/CkboxSampleCont';
import EditPersonCont from '../containers/householdUI/EditPersonCont';
import DeletePersonCont from '../containers/householdUI/DeletePersonCont';
// Forms
import AEWFCwrapper from '../containers/forms/householdForms/AEWFCwrapper';
import EFCwrapper from '../containers/forms/householdForms/EFCwrapper';
import RegFCwrapper from '../containers/forms/householdForms/RegFCwrapper';
import SocFCwrapper from '../containers/forms/householdForms/SocFCwrapper';
import RHFCwrapper from '../containers/forms/householdForms/RHFCwrapper';
import HPVSFCwrapper from '../containers/forms/householdForms/HPVSFCwrapper';

// Define column content
const columns = [
  {
    key: 'id',
    header: 'Patient ID',
    sortable: false,
    searchable: false,
    primaryKey: true,
    hidden: true
  }, // Hidden ID key (shortid)
  {
    key: 'name',
    header: 'Name',
    sortable: true,
    searchable: true,
    primaryKey: false
  }, // Prop (text) - from form
  {
    key: 'gender',
    header: 'Gender',
    sortable: false,
    searchable: false,
    primaryKey: false
  }, // Prop (text) - from form
  {
    key: 'age',
    header: 'Age',
    sortable: false,
    searchable: false,
    primaryKey: false
  }, // Prop (int) - from form
  {
    key: 'relationship',
    header: 'Relationship',
    title: 'Relationship to elder',
    sortable: false,
    searchable: false,
    primaryKey: false
  }, // Prop (text) - from form
  {
    key: 'eligibleAsking',
    header: 'Eligible for asking',
    sortable: true,
    searchable: false,
    primaryKey: false,
    Component: CkboxEligAskCont
  }, // Prop (checkbox) - computed: if(female && 19+)
  {
    key: 'presence',
    header: 'Presence',
    sortable: true,
    searchable: false,
    primaryKey: false,
    Component: CkboxPresenceCont
  }, // Prop (checkbox) - from form
  {
    key: 'eligibleStudy',
    header: 'Eligible for study',
    sortable: true,
    searchable: false,
    primaryKey: false,
    Component: CkboxEligStudyCont
  }, // Prop (checkbox) - computed from form
  {
    key: 'consent',
    header: 'Consent',
    sortable: true,
    searchable: false,
    primaryKey: false
  }, // Prop (text) - from form
  {
    key: 'questionnaire',
    header: 'Questionnaire #1',
    sortable: true,
    searchable: false,
    primaryKey: false,
    Component: CkboxQuestCont
  }, // Prop (checkbox) - from form
  {
    key: 'sampleReq',
    header: 'HPV sample',
    sortable: true,
    searchable: false,
    primaryKey: false,
    Component: CkboxSampleCont
  }, // Prop (text) - from form
  {
    key: 'edit',
    header: '',
    Component: EditPersonCont
  }, // State - (Add/Edit forms)
  {
    key: 'ageElig',
    header: '',
    Component: AEWFCwrapper
  }, // State - (Age-Eligible form)
  {
    key: 'eligibility',
    header: '',
    Component: EFCwrapper
  }, // State - (Eligibility form)
  {
    key: 'registration',
    header: '',
    Component: RegFCwrapper
  }, // State - (Registration form)
  {
    key: 'sociodem',
    header: '',
    Component: SocFCwrapper
  }, // State - (Sociodemographic form)
  {
    key: 'reprod',
    header: '',
    Component: RHFCwrapper
  }, // State - (Reproductive Health form)
  {
    key: 'hpvSample',
    header: '',
    Component: HPVSFCwrapper
  }, // State - (HPV Sample form)
  {
    key: 'delete',
    header: '',
    Component: DeletePersonCont
  } // State - will promt a confirmation
];

/**
 * Component for Household Table
 */
class Household extends Component {
  render() {
    const { handleClick, form, attributes, data, communityId } = this.props;
    this.props = {
      ...this.props,
      data: data.filter(household => household.communityId === communityId)
    };
    return (
      <div>
        <Table {...this.props} columns={columns} />
        <button
          type="button"
          className="btn btn-default"
          onClick={handleClick}
          {...attributes}
        >
          Add Person
        </button>
        {form && form()}
      </div>
    );
  }
}

/**
 * @prop {object} propTypes
 * @prop {object} propTypes.headers - headers of columns 
 * @prop {object[]} propTypes.data - state
 * @prop {string} propTypes.primaryKey - defines what column that should be primary key
 * @prop {attrbutes} propTypes.attributes - attributes for 'Add Household' button
 * @prop {form} propTypes.form - 'Add Household Registration' form
 * @prop {function} propTypes.handleClick - dispatch function
 */
Household.propTypes = {
  headers: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  primaryKey: PropTypes.string.isRequired,
  attributes: PropTypes.object.isRequired,
  form: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired
};
export default sematable('HouseholdTable', Household, columns);
