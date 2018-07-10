/** 
 * @namespace nurseUI/SelectExamStatusCont
 * @memberof module:container/nurseUI
 * @desc Container to connect 'Nurse Examination Status' in Nurse UI to Select component.
 */
import { connect } from 'react-redux';
import SelectComp from '../../components/helpComponents/SelectComp';
import { selectNurseExam } from '../../actions/NurseActions';

// Map state and actions to props
const mapStateToProps = (state, { row }) => {
  return {
    options: [
      { value: 'notDone', label: 'Not Done' },
      { value: 'Positive', label: 'Positive' },
      { value: 'Negative', label: 'Negative' }
    ],
    value: row.nurseExamStatus
  };
};

const mapDispatchToProps = (dispatch, { row }) => {
  return {
    handleChange: submission =>
      dispatch(selectNurseExam(row.patientID, submission.value))
  };
};

const SelectExamStatusCont = connect(mapStateToProps, mapDispatchToProps)(
  SelectComp
);
export default SelectExamStatusCont;
