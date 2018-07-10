/** 
 * @namespace householdUI/CkboxEligAskCont
 * @memberof module:container/householdUI
 * @desc Container to connect 'Eligible for Asking' in Household UI to Checkbox component.
 * Automatically computed. 
 */
import { connect } from 'react-redux';
import Checkbox from '../../components/helpComponents/Checkbox';

// Map state and actions to props
const mapStateToProps = (state, { row }) => {
  return {
    checked: row.eligibleAsking,
    disable: true,
    hide: ''
  };
};

const mapDispatchToProps = (dispatch, { row }) => {
  return {};
};

const CkboxEligAskCont = connect(mapStateToProps, mapDispatchToProps)(Checkbox);
export default CkboxEligAskCont;