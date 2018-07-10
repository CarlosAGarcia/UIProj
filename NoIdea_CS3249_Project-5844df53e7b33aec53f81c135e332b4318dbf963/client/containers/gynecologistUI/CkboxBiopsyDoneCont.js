/** 
 * @namespace gynecologistUI/CkboxBiopsyDoneCont
 * @memberof module:container/gynecologistUI
 * @desc Container to connect 'Biopsy Done' in Gynecologist UI to Checkbox component.
 */
import { connect } from 'react-redux';
import Checkbox from '../../components/helpComponents/Checkbox';
import { toggleBiopsyDone } from '../../actions/GynecologistActions';

// Map state and actions to props
const mapStateToProps = (state, { row }) => {
  return {
    checked: row.biopsyDone,
    disable: false,
    hide: ''
  };
};

const mapDispatchToProps = (dispatch, { row }) => {
  return {
    handleChange: () => dispatch(toggleBiopsyDone(row.patientID))
  };
};

const CkboxBiopsyDoneCont = connect(mapStateToProps, mapDispatchToProps)(Checkbox);
export default CkboxBiopsyDoneCont;
