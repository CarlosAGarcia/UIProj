/** 
 * @namespace PathoUI/EditBiomarkerResult
 * @memberof module:container/PathoUI
 * @desc Container to connect 'Edit Result' in Biomarker Pathologist UI to Edit Button component.
 */
import React from 'react';
import { connect } from 'react-redux';
import EditBtn from '../../components/helpComponents/EditBtn';
import { editBiomarkerResult } from '../../actions/PathoActions';
import ModalForm from '../ModalFormContainer';
import BiomarkerResultForm
  from '../../containers/forms/BiomarkerResultFormContainer';

// Map state and actions to props
const mapStateToProps = (state, { row }) => {
  return {
    attributes: {
      'data-toggle': 'modal',
      'data-target': '#' + row.id
    },
    form: () => (
      <ModalForm title="Biomarker Result" id={row.id} key={row.id}>
        <BiomarkerResultForm id={row.id} />
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
