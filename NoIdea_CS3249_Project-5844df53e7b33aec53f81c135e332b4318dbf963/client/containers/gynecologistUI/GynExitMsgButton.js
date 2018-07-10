/** 
 * @namespace gynecologistUI/GynExitMsgButton
 * @memberof module:container/gynecologistUI
 * @desc Container to connect 'Exit Message' in Gynecologist UI to correct Form and Edit Button component.
 */
import React from 'react';
import { connect } from 'react-redux';
import EditBtn from '../../components/helpComponents/EditBtn';
import ModalForm from '../ModalFormContainer';
import GynExitMsgForm
  from '../../containers/forms/gynForms/GynExitMsgFormContainer';
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
      <ModalForm title="Exit Message" id={formID} key={row.patientID}>
        <GynExitMsgForm id={row.patientID} formID={formID} />
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
