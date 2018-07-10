/** 
 * @namespace householdUI/DeletePersonCont
 * @memberof module:container/householdUI
 * @desc Container to connect 'Delete Person' in Household UI to Delete Button component.
 * A click will prompt a confirmation alert.
 */
import { connect } from 'react-redux';
import DeleteBtn from '../../components/helpComponents/DeleteBtn';
import { deletePerson } from '../../actions/HouseholdActions';
import { confirmDelete } from '../../actions/HouseholdActions';

// Map state and actions to props
const mapStateToProps = (state, { row }) => {
  return {};
};

const mapDispatchToProps = (dispatch, { row }) => {
  return {
    handleClick: () => deletePerson(row, dispatch)
  };
};

const DeletePersonCont = connect(mapStateToProps, mapDispatchToProps)(DeleteBtn);
export default DeletePersonCont;
