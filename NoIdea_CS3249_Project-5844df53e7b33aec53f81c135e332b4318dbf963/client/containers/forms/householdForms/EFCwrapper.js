/** 
 * @namespace householdUI/wrapper/EFCwrapper
 * @memberof module:container/householdUI
 * @desc Container to connect 'Eligible' form in Household UI to EditForm component.
 */
import React from 'react';
import { connect } from 'react-redux';
import EditForm from '../../../components/helpComponents/EditForm';
import ModalForm from '../../ModalFormContainer';
import EligibilityFormCont from './EligibilityFormCont';
import shortid from 'shortid';

// Map state and actions to props
const mapStateToProps = (state, { row }) => {
  const formID = shortid.generate();
  return {
    text: 'Elig Form',
    attributes: {
      'data-toggle': 'modal',
      'data-target': '#' + formID
    },
    form: () => (
      <ModalForm title="Eligibility" id={formID} key={row.id}>
        <EligibilityFormCont id={row.id} formID={formID} />
      </ModalForm>
    ),
    disable: !row.willingness
  };
};

const mapDispatchToProps = (dispatch, { row }) => {
  return {
    handleClick: () => {}
  };
};

const EFCwrapper = connect(mapStateToProps, mapDispatchToProps)(EditForm);
export default EFCwrapper;
