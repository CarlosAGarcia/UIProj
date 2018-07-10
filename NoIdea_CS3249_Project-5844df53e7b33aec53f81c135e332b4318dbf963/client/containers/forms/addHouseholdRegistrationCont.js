/** 
 * @namespace communityUI/forms/addHouseholdRegistrationCont
 * @memberof module:container/communityUI
 * @desc Container to connect corresponding wrapper to the actual 'Add household' form.
 * 
 * Defines an 'empty Household'
 */
import { connect } from 'react-redux';
import HouseholdRegistrationForm
  from '../../components/forms/HouseholdRegistrationForm';
import { addHousehold } from '../../actions/CommunityActions';

const mapStateToProps = (state, ownProps) => {
  let emptyHH = {
    id: ownProps.id,
    name: '',
    householdNumber: 0,
    address: '',
    community: '',
    visited: false,
    visitDate: '',
    completed: false,
    gpsLocation: [0, 0],
    remarks: ''
  };
  return {
    initialState: emptyHH
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit: values => dispatch(addHousehold(ownProps.id, ownProps.id)(values))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  HouseholdRegistrationForm
);
