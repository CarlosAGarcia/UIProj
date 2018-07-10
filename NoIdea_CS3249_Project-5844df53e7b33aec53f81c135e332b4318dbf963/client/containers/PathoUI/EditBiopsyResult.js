/** 
 * @namespace PathoUI/EditBiopsyResult
 * @memberof module:container/PathoUI
 * @desc Container to connect 'Edit Result' in Biospy Pathologist UI to Edit Button component.
 */
import React from 'react';
import { connect } from 'react-redux';
import EditBtn from '../../components/helpComponents/EditBtn';
import { editBiopsyResult } from '../../actions/PathoActions';
import ModalForm from '../ModalFormContainer';
import BiopsyResultForm from '../../containers/forms/BiopsyResultFormContainer';

// Map state and actions to props
const mapStateToProps = (state, { row }) => {
  return {
    attributes: {
      'data-toggle': 'modal',
      'data-target': '#' + row.id
    },
    form: () => (
      <ModalForm title="Biopsy Result" id={row.id} key={row.id}>
        <BiopsyResultForm id={row.id} />
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
