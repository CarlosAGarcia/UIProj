/** 
 * @namespace householdUI/CkboxPresenceCont
 * @memberof module:container/householdUI
 * @desc Container to connect 'Presence' in Household UI to Checkbox component.
 * Only shown if person is elibible for asking.
 */
import { connect } from 'react-redux';
import Checkbox from '../../components/helpComponents/Checkbox';

// Map state and actions to props
const mapStateToProps = (state, { row }) => {
  return {
    checked: row.presence,
    disable: true,
    hide: (!row.eligibleAsking)? 'none' : ''
  };
};

const mapDispatchToProps = (dispatch, { row }) => {
  return {};
};

const CkboxPresenceCont = connect(mapStateToProps, mapDispatchToProps)(Checkbox);
export default CkboxPresenceCont;