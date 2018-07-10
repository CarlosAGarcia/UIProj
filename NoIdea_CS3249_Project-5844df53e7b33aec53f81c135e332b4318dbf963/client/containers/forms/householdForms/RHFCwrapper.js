/** 
 * @namespace householdUI/wrapper/RHFCwrapper
 * @memberof module:container/householdUI
 * @desc Container to connect 'Reproductive Health' form in Household UI to EditForm component.
 */
import React from 'react';
import { connect } from 'react-redux';
import EditForm from '../../../components/helpComponents/EditForm';
import ModalForm from '../../ModalFormContainer';
import ReproductiveHealthFormCont from './ReproductiveHealthFormCont';
import shortid from 'shortid';

// Map state and actions to props
const mapStateToProps = (state, { row }) => {
  const formID = shortid.generate();
  return {
    text: 'RH Form',
    attributes: {
      'data-toggle': 'modal',
      'data-target': '#' + formID
    },
    form: () => (
      <ModalForm title="Reproductive Health" id={formID} key={row.id}>
        <ReproductiveHealthFormCont id={row.id} formID={formID} />
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

const RHFCwrapper = connect(mapStateToProps, mapDispatchToProps)(EditForm);
export default RHFCwrapper;
