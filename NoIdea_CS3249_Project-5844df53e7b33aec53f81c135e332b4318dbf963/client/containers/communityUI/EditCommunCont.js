/** 
 * @namespace communityUI/EditCommunCont
 * @memberof module:container/communityUI
 * @desc Container to connect 'Edit Household' form in Community UI to Edit Button component.
 */
import React from 'react';
import { connect } from 'react-redux';
import EditBtn from '../../components/helpComponents/EditBtn';
import ModalForm from '../ModalFormContainer';
import HouseholdRegistration
  from '../../containers/forms/editHouseholdRegistrationCont';
import shortid from 'shortid';

// Map state and actions to props
const mapStateToProps = (state, { row }) => {
  const formID = shortid.generate();
  return {
    attributes: {
      'data-toggle': 'modal',
      'data-target': '#' + formID
    },
    form: () => (
      <ModalForm title="Edit Household" id={formID} key={row.id}>
        <HouseholdRegistration id={row.id} formID={formID} />
      </ModalForm>
    )
  };
};

const mapDispatchToProps = (dispatch, { row }) => {
  return {
    handleClick: () => {}
  };
};

const EditCommunCont = connect(mapStateToProps, mapDispatchToProps)(EditBtn);
export default EditCommunCont;
