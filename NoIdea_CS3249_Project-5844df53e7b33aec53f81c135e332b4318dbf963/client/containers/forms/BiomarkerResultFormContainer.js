/** 
 * @namespace PathoUI/forms/BiomarkerResultFormContainer
 * @memberof module:container/PathoUI
 * @desc Container to connect corresponding wrapper to the actual 'Biomarker Result' form.
 */
import { connect } from 'react-redux';
import BiomarkerResultForm
  from '../../components/forms/PathoForms/BiomarkerResultForm';
import {
  editBiomarkerResult,
  editBiomarkerResultToPatient
} from '../../actions/PathoActions';

const mapStateToProps = (state, ownProps) => {
  return {
    initialState: state.sampleBiomarker.find(
      sampleBiomarker => sampleBiomarker.id === ownProps.id
    )
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit: values => {
      dispatch(editBiomarkerResult(ownProps.id)(values)), dispatch(
        editBiomarkerResultToPatient(ownProps.id)(values)
      );
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  BiomarkerResultForm
);
