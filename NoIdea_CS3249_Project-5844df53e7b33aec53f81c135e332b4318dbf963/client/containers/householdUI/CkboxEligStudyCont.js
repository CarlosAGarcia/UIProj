/** 
 * @namespace householdUI/CkboxEligStudyCont
 * @memberof module:container/householdUI
 * @desc Container to connect 'Eligible for Study' in Household UI to Checkbox component.
 * Only shown if person is elibible for asking and present.
 */
import { connect } from 'react-redux';
import Checkbox from '../../components/helpComponents/Checkbox';

// Map state and actions to props
const mapStateToProps = (state, { row }) => {
  return {
    checked: row.eligibleStudy,
    disable: true,
    hide: !(row.eligibleAsking && row.presence)? 'none' : ''
  };
};

const mapDispatchToProps = (dispatch, { row }) => {
  return {};
};

const CkboxEligStudyCont = connect(mapStateToProps, mapDispatchToProps)(Checkbox);
export default CkboxEligStudyCont;