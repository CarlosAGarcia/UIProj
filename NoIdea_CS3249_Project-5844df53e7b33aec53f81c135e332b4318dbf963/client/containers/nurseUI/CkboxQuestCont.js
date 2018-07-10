/** 
 * @namespace nurseUI/CkboxQuestCont
 * @memberof module:container/nurseUI
 * @desc Container to connect 'Questionnaire #2' in Nurse UI to Checkbox component.
 */
import { connect } from 'react-redux';
import Checkbox from '../../components/helpComponents/Checkbox';
import { toggleQuestionnaire } from '../../actions/NurseActions';

// Map state and actions to props
const mapStateToProps = (state, { row }) => {
  return {
    checked: row.questionnaire,
    disable: true,
    hide: ''
  };
};

const mapDispatchToProps = (dispatch, { row }) => {
  return {
   handleChange: () => dispatch(toggleQuestionnaire(row.patientID))
  };
};

const CkboxQuestCont = connect(mapStateToProps, mapDispatchToProps)(Checkbox);
export default CkboxQuestCont;