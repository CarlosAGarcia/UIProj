/** 
 * @namespace PathoUI/CheckboxTested
 * @memberof module:container/PathoUI
 * @desc Container to connect 'Tested' in Pathologist UI to Checkbox component.
 */
import { connect } from 'react-redux';
import Checkbox from '../../components/helpComponents/Checkbox';

// Map state and actions to props
const mapStateToProps = (state, { row }) => {
  return {
    checked: row.pathoTestStatus,
    disable: true
  };
};

const mapDispatchToProps = (dispatch, { row }) => {
  return {};
};

const CheckboxPathoTested = connect(mapStateToProps, mapDispatchToProps)(
  Checkbox
);
export default CheckboxPathoTested;
