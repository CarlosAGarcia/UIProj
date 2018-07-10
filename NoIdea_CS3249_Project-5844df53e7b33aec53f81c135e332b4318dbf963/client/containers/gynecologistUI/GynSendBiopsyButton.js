/** 
 * @namespace gynecologistUI/GynSendBiopsyButton
 * @memberof module:container/gynecologistUI
 * @desc Container to connect 'Send Biopsy Sample' in Gynecologist UI to send a biopsy sample of a particular patient.
 */
import React from 'react';
import { connect } from 'react-redux';
import EditBtn from '../../components/helpComponents/EditBtn';
import ModalForm from '../ModalFormContainer';
import GynBiopsyForm
  from '../../containers/forms/gynForms/GynBiopsyFormContainer';
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
      <ModalForm
        title="Send a biompsy sample to the lab"
        id={formID}
        key={row.patientID}
      >
        <GynBiopsyForm id={row.patientID} formID={formID} />
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
