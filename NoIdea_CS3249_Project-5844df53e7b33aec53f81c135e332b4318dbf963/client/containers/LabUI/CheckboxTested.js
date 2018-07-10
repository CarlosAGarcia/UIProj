/** 
 * @namespace LabUI/CheckboxTested
 * @memberof module:container/LabUI
 * @desc Container to connect 'Tested' in HPV Lab UI to Checkbox component.
 */
import { connect } from 'react-redux';
import Checkbox from '../../components/helpComponents/Checkbox';

// Map state and actions to props
const mapStateToProps = (state, { row }) => {
  return {
    checked: row.labTestStatus,
    disable: true
  };
};

const mapDispatchToProps = (dispatch, { row }) => {
  return {};
};

const CheckboxTested = connect(mapStateToProps, mapDispatchToProps)(Checkbox);
export default CheckboxTested;
