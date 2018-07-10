/** 
 * @namespace householdUI/EditPersonCont
 * @memberof module:container/householdUI
 * @desc Container to connect 'Edit Person' in Household UI to Edit Button component.
 */
import React from 'react';
import { connect } from 'react-redux';
import EditBtn from '../../components/helpComponents/EditBtn';
import ModalForm from '../ModalFormContainer';
import PersonRegistration from '../../containers/forms/editPersonFormsCont';
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
      <ModalForm title="Edit Person" id={formID} key={row.id}>
        <PersonRegistration id={row.id} formID={formID} />
      </ModalForm>
    )
  };
};

const mapDispatchToProps = (dispatch, { row }) => {
  return {
    handleClick: () => {}
  };
};

const EditPersonCont = connect(mapStateToProps, mapDispatchToProps)(EditBtn);
export default EditPersonCont;
