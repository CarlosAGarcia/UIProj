/** 
 * @namespace communityUI/forms/editHouseholdRegistrationCont
 * @memberof module:container/communityUI
 * @desc Container to connect corresponding wrapper to the actual 'Edit household' form.
 */
import { connect } from 'react-redux';
import HouseholdRegistrationForm
  from '../../components/forms/HouseholdRegistrationForm';
import { updateHousehold } from '../../actions/CommunityActions';

const mapStateToProps = (state, ownProps) => {
  return {
    initialState: state.community.find(
      household => household.id === ownProps.id
    )
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit: values => dispatch(updateHousehold(ownProps.id, ownProps.formID)(values))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  HouseholdRegistrationForm
);
