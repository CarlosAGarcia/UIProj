/** 
 * @namespace gynecologistUI/GynExamButton
 * @memberof module:container/gynecologistUI
 * @desc Container to connect 'Examination' in Gynecologist UI to correct Form and Edit Button component.
 */
import React from 'react';
import { connect } from 'react-redux';
import EditBtn from '../../components/helpComponents/EditBtn';
import ModalForm from '../ModalFormContainer';
import GynExamForm from '../../containers/forms/gynForms/GynExamFormContainer';
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
      <ModalForm title="Examination" id={formID} key={row.patientID}>
        <GynExamForm id={row.patientID} formID={formID} />
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
