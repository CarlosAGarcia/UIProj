/** 
 * @namespace householdUI/wrapper/SocFCwrapper
 * @memberof module:container/householdUI
 * @desc Container to connect 'Sociodemographic' form in Household UI to EditForm component.
 */
import React from 'react';
import { connect } from 'react-redux';
import EditForm from '../../../components/helpComponents/EditForm';
import ModalForm from '../../ModalFormContainer';
import SociodemographicFormCont from './SociodemographicFormCont';
import shortid from 'shortid';

// Map state and actions to props
const mapStateToProps = (state, { row }) => {
  const formID = shortid.generate();
  return {
    text: 'Soc Form',
    attributes: {
      'data-toggle': 'modal',
      'data-target': '#' + formID
    },
    form: () => (
      <ModalForm title="Sociodemographic" id={formID} key={row.id}>
        <SociodemographicFormCont id={row.id} formID={formID} />
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

const SocFCwrapper = connect(mapStateToProps, mapDispatchToProps)(EditForm);
export default SocFCwrapper;
