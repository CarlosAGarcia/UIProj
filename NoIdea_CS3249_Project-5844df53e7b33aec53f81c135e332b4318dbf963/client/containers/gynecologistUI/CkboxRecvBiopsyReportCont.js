/** 
 * @namespace gynecologistUI/CkboxRecvBiopsyReportCont
 * @memberof module:container/gynecologistUI
 * @desc Container to connect 'Received Biopsy Report' in Gynecologist UI to Checkbox component.
 */
import { connect } from 'react-redux';
import Checkbox from '../../components/helpComponents/Checkbox';
import { toggleRecvBiopsyReport } from '../../actions/GynecologistActions';

// Map state and actions to props
const mapStateToProps = (state, { row }) => {
  return {
    checked: row.biopsyReportRecv,
    disable: false,
    hide: ''
  };
};

const mapDispatchToProps = (dispatch, { row }) => {
  return {
    handleChange: () => dispatch(toggleRecvBiopsyReport(row.patientID))
  };
};

const CkboxRecvBiopsyReportCont = connect(mapStateToProps, mapDispatchToProps)(Checkbox);
export default CkboxRecvBiopsyReportCont;
