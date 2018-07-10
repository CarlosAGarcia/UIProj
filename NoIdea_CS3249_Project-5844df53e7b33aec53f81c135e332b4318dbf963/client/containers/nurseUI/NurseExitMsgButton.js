/** 
 * @namespace nurseUI/NurseExitMsgButton
 * @memberof module:container/nurseUI
 * @desc Container to connect 'Exit Message' in Nurse UI to correct Form and Edit Button component.
 */
import React from 'react';
import { connect } from 'react-redux';
import EditBtn from '../../components/helpComponents/EditBtn';
import ModalForm from '../ModalFormContainer';
import NurseExitForm from '../../containers/forms/nurseForms/NurseExitFormContainer';
import { v4 } from 'uuid';

// Map state and actions to props
const mapStateToProps = (state, { row }) => {
  const formID = v4();
  return {
    attributes: {
      'data-toggle': 'modal',
      'data-target': '#' + formID
    },
    form: () => (
      <ModalForm title="Exit Message" id={formID} key={row.patientID}>
        <NurseExitForm id={row.patientID} formID={formID} />
      </ModalForm>
    )
  };
};

const mapDispatchToProps = (dispatch, { row }) => {
  return {
    handleClick: () => {}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditBtn);