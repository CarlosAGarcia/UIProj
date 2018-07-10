/** 
 * @namespace PathoUI/forms/BiopsyResultFormContainer
 * @memberof module:container/PathoUI
 * @desc Container to connect corresponding wrapper to the actual 'Biopsy Result' form.
 */
import { connect } from 'react-redux';
import BiopsyResultForm
  from '../../components/forms/PathoForms/BiopsyResultForm';
import {
  editBiopsyResult,
  editBiopsyResultToPatient
} from '../../actions/PathoActions';

const mapStateToProps = (state, ownProps) => {
  return {
    initialState: state.sampleBiopsy.find(
      sampleBiopsy => sampleBiopsy.id === ownProps.id
    )
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit: values => {
      dispatch(editBiopsyResult(ownProps.id)(values)), dispatch(
        editBiopsyResultToPatient(ownProps.id)(values)
      );
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BiopsyResultForm);
