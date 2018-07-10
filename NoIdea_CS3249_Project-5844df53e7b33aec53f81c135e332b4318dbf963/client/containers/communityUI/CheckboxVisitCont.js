/** 
 * @namespace communityUI/CheckboxVisitCont
 * @memberof module:container/communityUI
 * @desc Container to connect 'Visited' in Community UI to Checkbox component.
 */
import { connect } from 'react-redux';
import Checkbox from '../../components/helpComponents/Checkbox';
import { toggleVisited } from '../../actions/CommunityActions';

// Map state and actions to props
const mapStateToProps = (state, { row }) => {
  return {
    checked: row.visited,
    disable: false,
    hide: ''
  };
};

const mapDispatchToProps = (dispatch, { row }) => {
  return {
    handleChange: () => dispatch(toggleVisited(row.id))
  };
};

const CheckboxVisitCont = connect(mapStateToProps, mapDispatchToProps)(Checkbox);
export default CheckboxVisitCont;
