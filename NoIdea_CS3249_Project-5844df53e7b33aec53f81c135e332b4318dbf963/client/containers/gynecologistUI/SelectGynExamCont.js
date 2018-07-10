/** 
 * @namespace gynecologistUI/SelectGynExamCont
 * @memberof module:container/gynecologistUI
 * @desc Container to connect 'Gynecologist Exam Status' in Gynecologist UI to Select component.
 */
import { connect } from 'react-redux';
import SelectComp from '../../components/helpComponents/SelectComp';
import { selectGynExam } from '../../actions/GynecologistActions';

// Map state and actions to props
const mapStateToProps = (state, { row }) => {
  return {
    options: [
      { value: 'Incomplete', label: 'Incomplete' },
      { value: 'Positive', label: 'Positive' },
      { value: 'Negative', label: 'Negative' }
    ],
    value: row.gynExamStatus
  };
};

const mapDispatchToProps = (dispatch, { row }) => {
  return {
    handleChange: submission =>
      dispatch(selectGynExam(row.patientID, submission.value))
  };
};

const SelectGynExamCont = connect(mapStateToProps, mapDispatchToProps)(
  SelectComp
);
export default SelectGynExamCont;
