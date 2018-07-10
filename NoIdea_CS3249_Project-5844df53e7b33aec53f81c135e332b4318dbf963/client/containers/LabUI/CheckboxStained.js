/** 
 * @namespace LabUI/CheckboxStained
 * @memberof module:container/LabUI
 * @desc Container to connect 'Stained' in Biomarker/Biopsy Lab UI to Checkbox component.
 */
import { connect } from 'react-redux';
import Checkbox from '../../components/helpComponents/Checkbox';
import { toggleSlideStained } from '../../actions/LabActions';

// Map state and actions to props
const mapStateToProps = (state, { row }) => {
  return {
    checked: row.slideStainStatus,
    disable: false
  };
};

const mapDispatchToProps = (dispatch, { row }) => {
  return {
    handleChange: () => dispatch(toggleSlideStained(row.id))
  };
};

const CheckboxStained = connect(mapStateToProps, mapDispatchToProps)(Checkbox);
export default CheckboxStained;
