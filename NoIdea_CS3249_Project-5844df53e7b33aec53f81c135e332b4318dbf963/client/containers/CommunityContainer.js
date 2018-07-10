/** @module container/communityUI */

/** 
 * @namespace community
 * @memberof module:container/main
 * @desc Container to connect Community component to its state, props and 'Add Household' action.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Community from '../components/Community';
import shortid from 'shortid';
import ModalForm from './ModalFormContainer';
import HouseholdRegistration from './forms/addHouseholdRegistrationCont';
import { callApi } from '../util/apiCaller';
import { receiveHousehold } from '../actions/CommunityActions';

// Sematable headers
const headers = {
  id: 'id',
  name: 'name',
  householdNumber: 'householdNumber',
  address: 'address',
  visited: 'visited',
  visitDate: 'visitDate',
  completed: 'completed',
  remarks: 'remarks'
};

const primaryKey = 'id';

/**
 * Takes it state from community data structure
 * @param {object[]} state - map current state to props
 */
const mapStateToProps = state => {
  let newID = shortid.generate();
  return {
    object: headers,
    data: state.community,
    string: primaryKey,
    attributes: {
      'data-toggle': 'modal',
      'data-target': '#' + newID
    },
    form: () => (
      <ModalForm title="Add Household" id={newID} key={newID}>
        <HouseholdRegistration id={newID} />
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
    retreiveHousehold: () => dispatch(receiveHousehold())
  };
};

class CommunityContainer extends Component {
  componentDidMount() {
    this.props.retreiveHousehold();
  }

  render() {
    return <Community {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommunityContainer);
