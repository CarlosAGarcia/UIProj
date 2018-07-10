/** 
 * @namespace LabUI/CheckboxReceived
 * @memberof module:container/LabUI
 * @desc Container to connect 'Received' in Lab UI to Checkbox component.
 */
import { connect } from 'react-redux';
import Checkbox from '../../components/helpComponents/Checkbox';
import { toggleLabReceived } from '../../actions/LabActions';

// Map state and actions to props
const mapStateToProps = (state, { row }) => {
  return {
    checked: row.recvLab,
    disable: false
  };
};

const mapDispatchToProps = (dispatch, { row }) => {
  return {
    handleChange: () => dispatch(toggleLabReceived(row.id))
  };
};

const CheckboxLabReceived = connect(mapStateToProps, mapDispatchToProps)(
  Checkbox
);
export default CheckboxLabReceived;
