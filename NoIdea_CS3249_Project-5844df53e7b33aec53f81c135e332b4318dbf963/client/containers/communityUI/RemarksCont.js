/** 
 * @namespace communityUI/RemarksCont
 * @memberof module:container/communityUI
 * @desc Container to connect 'Remarks' in Community UI to Text Field component.
 * User is only able to add remark after household has been visited.
 */
import { connect } from 'react-redux';
import TextField from '../../components/helpComponents/TextField';
import { addRemark } from '../../actions/CommunityActions';

// Map state and actions to props
const mapStateToProps = (state, { row }) => {
  return {
    remarks: row.remarks,
    show: (!row.visited)? 'none': '' // Only be able to add remark after visited
  };
};

const mapDispatchToProps = (dispatch, { row }) => {
  return {
    handleSubmit: (submission) => dispatch(addRemark(row.id, submission.text))
  };
};

const RemarksCont = connect(mapStateToProps, mapDispatchToProps)(TextField);
export default RemarksCont;