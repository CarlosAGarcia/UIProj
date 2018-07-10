/** 
 * @namespace PathoUI/CheckboxPathoReceived
 * @memberof module:container/PathoUI
 * @desc Container to connect 'Received' in Pathologist UI to Checkbox component.
 */
import { connect } from 'react-redux';
import Checkbox from '../../components/helpComponents/Checkbox';
import { togglePathoReceived } from '../../actions/PathoActions';

// Map state and actions to props
const mapStateToProps = (state, { row }) => {
  return {
    checked: row.recvPatho,
    disable: false
  };
};

const mapDispatchToProps = (dispatch, { row }) => {
  return {
    handleChange: () => dispatch(togglePathoReceived(row.id))
  };
};

const CheckboxPathoReceived = connect(mapStateToProps, mapDispatchToProps)(
  Checkbox
);
export default CheckboxPathoReceived;
