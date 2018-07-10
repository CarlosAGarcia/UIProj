/** @module container/householdUI */

/** 
 * @namespace household
 * @memberof module:container/main
 * @desc Container to connect Household component to its state, props and 'Add Person' action.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Household from '../components/Household';
import shortid from 'shortid';
import ModalForm from './ModalFormContainer';
import PersonRegistration from './forms/addPersonFormsCont';
import { retreivePersons } from '../actions/HouseholdActions';

// Sematable headers
const headers = {
  id: 'id',
  name: 'name',
  gender: 'gender',
  age: 'age',
  relationship: 'relationship',
  eligibleAsking: 'eligibleAsking',
  presence: 'presence',
  eligibleStudy: 'eligibleStudy',
  consent: 'consent',
  questionnaire: 'questionnaire',
  sampleReq: 'sampleReq'
};
const primaryKey = 'id';

/**
 * Takes it state from community data structure
 * @param {object[]} state - map current state to props
 */
const mapStateToProps = (state, ownProps) => {
  let newID = 'P-' + shortid.generate();
  return {
    object: headers,
    data: state.household,
    string: primaryKey,
    communityId: ownProps.number,
    attributes: {
      'data-toggle': 'modal',
      'data-target': '#' + newID
    },
    form: () => (
      <ModalForm title="Add Person" id={newID} key={newID}>
        <PersonRegistration id={newID} number={ownProps.number} />
      </ModalForm>
    )
  };
};

/**
 * @param {function} dispatch - map dispatch functions to props
 */
const mapDispatchToProps = dispatch => {
  return {
    handleClick: () => {},
    retreivePersons: () => dispatch(retreivePersons())
  };
};

class HouseholdContainer extends Component {
  componentDidMount() {
    this.props.retreivePersons();
  }

  render() {
    return <Household {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HouseholdContainer);
