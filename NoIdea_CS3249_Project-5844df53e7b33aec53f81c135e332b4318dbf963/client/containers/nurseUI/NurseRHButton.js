/** 
 * @namespace nurseUI/NurseRHButton
 * @memberof module:container/nurseUI
 * @desc Container to connect 'Reproductive Health' in Nurse UI to correct Form and Edit Button component.
 */
import React from 'react';
import { connect } from 'react-redux';
import EditBtn from '../../components/helpComponents/EditBtn';
import ModalForm from '../ModalFormContainer';
import NurseRHForm from '../../containers/forms/nurseForms/NurseRHFormContainer';
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
      <ModalForm title="Reproductive Health" id={formID} key={row.patientID}>
        <NurseRHForm id={row.patientID} formID={formID} />
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