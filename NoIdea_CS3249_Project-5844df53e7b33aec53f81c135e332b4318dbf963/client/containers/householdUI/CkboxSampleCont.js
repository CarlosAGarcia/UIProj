/** 
 * @namespace householdUI/CkboxSampleCont
 * @memberof module:container/householdUI
 * @desc Container to connect 'HPV Sample Requisition' in Household UI to Checkbox component.
 * Only shown if person is elibible for study.
 */
import { connect } from 'react-redux';
import Checkbox from '../../components/helpComponents/Checkbox';

// Map state and actions to props
const mapStateToProps = (state, { row }) => {
  return {
    checked: row.sampleReq,
    disable: true,
    hide: (!row.eligibleStudy)? 'none' : ''
  };
};

const mapDispatchToProps = (dispatch, { row }) => {
  return {};
};

const CkboxSampleCont = connect(mapStateToProps, mapDispatchToProps)(Checkbox);
export default CkboxSampleCont;