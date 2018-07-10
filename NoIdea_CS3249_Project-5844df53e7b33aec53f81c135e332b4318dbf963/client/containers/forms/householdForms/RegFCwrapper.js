/** 
 * @namespace householdUI/wrapper/RegFCwrapper
 * @memberof module:container/householdUI
 * @desc Container to connect 'Registration' form in Household UI to EditForm component.
 */
import React from 'react';
import { connect } from 'react-redux';
import EditForm from '../../../components/helpComponents/EditForm';
import ModalForm from '../../ModalFormContainer';
import RegistrationFormCont from './RegistrationFormCont';
import shortid from 'shortid';

// Map state and actions to props
const mapStateToProps = (state, { row }) => {
  const formID = shortid.generate();
  return {
    text: 'Reg Form',
    attributes: {
      'data-toggle': 'modal',
      'data-target': '#' + formID
    },
    form: () => (
      <ModalForm title="Register Patient" id={formID} key={row.id}>
        <RegistrationFormCont id={row.id} formID={formID} />
      </ModalForm>
    ),
    disable: !row.eligibleStudy
  };
};

const mapDispatchToProps = (dispatch, { row }) => {
  return {
    handleClick: () => {}
  };
};

const RegFCwrapper = connect(mapStateToProps, mapDispatchToProps)(EditForm);
export default RegFCwrapper;
