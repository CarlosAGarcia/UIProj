/** 
 * @namespace householdUI/wrapper/AEWFCwrapper
 * @memberof module:container/householdUI
 * @desc Container to connect 'Age-Eligible' form in Household UI to EditForm component.
 */
import React from 'react';
import { connect } from 'react-redux';
import EditForm from '../../../components/helpComponents/EditForm';
import ModalForm from '../../ModalFormContainer';
import AgeEligibleWomanFormCont from './AgeEligibleWomanFormCont';
import shortid from 'shortid';

// Map state and actions to props
const mapStateToProps = (state, { row }) => {
  const formID = shortid.generate();
  return {
    text: 'A-E Form',
    attributes: {
      'data-toggle': 'modal',
      'data-target': '#' + formID
    },
    form: () => (
      <ModalForm title="Age-Eligible woman" id={formID} key={'ageElig'}>
        <AgeEligibleWomanFormCont id={row.id} formID={formID} />
      </ModalForm>
    ),
    disable: !(row.eligibleAsking && row.presence)
  };
};

const mapDispatchToProps = (dispatch, { row }) => {
  return {
    handleClick: () => {}
  };
};

const AEWFCwrapper = connect(mapStateToProps, mapDispatchToProps)(EditForm);
export default AEWFCwrapper;
