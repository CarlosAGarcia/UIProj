/** 
 * @namespace LabUI/CheckboxPrepared
 * @memberof module:container/LabUI
 * @desc Container to connect 'Prepared' in Biomarker/Biopsy Lab UI to Checkbox component.
 */
import { connect } from 'react-redux';
import Checkbox from '../../components/helpComponents/Checkbox';
import { toggleSlidePrepared } from '../../actions/LabActions';

// Map state and actions to props
const mapStateToProps = (state, { row }) => {
  return {
    checked: row.slidePrepStatus,
    disable: false
  };
};

const mapDispatchToProps = (dispatch, { row }) => {
  return {
    handleChange: () => dispatch(toggleSlidePrepared(row.id))
  };
};

const CheckboxPrepared = connect(mapStateToProps, mapDispatchToProps)(Checkbox);
export default CheckboxPrepared;
