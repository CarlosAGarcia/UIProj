/** 
 * @namespace LabUI/EditResult
 * @memberof module:container/LabUI
 * @desc Container to connect 'Edit Result' in Lab UI to Edit Button component.
 */
import React from 'react';
import { connect } from 'react-redux';
import EditBtn from '../../components/helpComponents/EditBtn';
import ModalForm from '../ModalFormContainer';
import HPVResultForm from '../../containers/forms/HPVResultFormContainer';

// Map state and actions to props
const mapStateToProps = (state, { row }) => {
  return {
    attributes: {
      'data-toggle': 'modal',
      'data-target': '#' + row.id
    },
    form: () => (
      <ModalForm title="HPV Result" id={row.id} key={row.id}>
        <HPVResultForm id={row.id} />
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
