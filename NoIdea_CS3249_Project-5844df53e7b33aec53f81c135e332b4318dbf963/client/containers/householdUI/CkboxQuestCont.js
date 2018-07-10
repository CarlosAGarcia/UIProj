/** 
 * @namespace householdUI/CkboxQuestCont
 * @memberof module:container/householdUI
 * @desc Container to connect 'Questionnaire #1' in Household UI to Checkbox component.
 * Only shown if person is elibible for study.
 */
import { connect } from 'react-redux';
import Checkbox from '../../components/helpComponents/Checkbox';

// Map state and actions to props
const mapStateToProps = (state, { row }) => {
  return {
    checked: row.questionnaire,
    disable: true,
    hide: (!row.eligibleStudy)? 'none' : ''
  };
};

const mapDispatchToProps = (dispatch, { row }) => {
  return {};
};

const CkboxQuestCont = connect(mapStateToProps, mapDispatchToProps)(Checkbox);
export default CkboxQuestCont;
