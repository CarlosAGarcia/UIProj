/** 
 * @namespace nurseUI/NurseSendBiomarkerButton
 * @memberof module:container/nurseUI
 * @desc Container to connect 'Send Biomarker Sample' in Nurse UI to send a biomarker sample of a particular patient..
 */
import React from 'react';
import { connect } from 'react-redux';
import EditBtn from '../../components/helpComponents/EditBtn';
import ModalForm from '../ModalFormContainer';
import NurseBiomarkerForm
  from '../../containers/forms/nurseForms/NurseBiomarkerFormContainer';
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
        title="Send a biomarker sample to the lab"
        id={formID}
        key={row.patientID}
      >
        <NurseBiomarkerForm id={row.patientID} formID={formID} />
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
