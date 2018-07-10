/** 
 * @namespace communityUI/CheckboxComplCont
 * @memberof module:container/communityUI
 * @desc Container to connect 'Completed' in Community UI to Checkbox component.
 */
import { connect } from 'react-redux';
import Checkbox from '../../components/helpComponents/Checkbox';
import { toggleCompleted } from '../../actions/CommunityActions';

// Map state and actions to props
const mapStateToProps = (state, { row }) => {
  return {
    checked: row.completed,
    disable: !row.visited,
    hide: ''
  };
};

const mapDispatchToProps = (dispatch, { row }) => {
  return {
    handleChange: () => dispatch(toggleCompleted(row.id))
  };
};

const CheckboxComplCont = connect(mapStateToProps, mapDispatchToProps)(Checkbox);
export default CheckboxComplCont;
