/** 
 * @namespace householdUI/wrapper/HPVSFCwrapper
 * @memberof module:container/householdUI
 * @desc Container to connect 'HPV Sample' form in Household UI to EditForm component.
 */
import React from 'react';
import { connect } from 'react-redux';
import EditForm from '../../../components/helpComponents/EditForm';
import ModalForm from '../../ModalFormContainer';
import HPVSampleFormCont from './HPVSampleFormCont';
import shortid from 'shortid';

// Map state and actions to props
const mapStateToProps = (state, { row }) => {
  const formID = shortid.generate();
  return {
    text: 'HPV Form',
    attributes: {
      'data-toggle': 'modal',
      'data-target': '#' + formID
    },
    form: () => (
      <ModalForm title="HPV Sample" id={formID} key={row.id}>
        <HPVSampleFormCont id={row.id} formID={formID} />
      </ModalForm>
    ),
    disable: !(row.consent == 'Signed')
  };
};

const mapDispatchToProps = (dispatch, { row }) => {
  return {
    handleClick: () => {}
  };
};

const HPVSFCwrapper = connect(mapStateToProps, mapDispatchToProps)(EditForm);
export default HPVSFCwrapper;
