/** 
 * @namespace communityUI/LinkToHouseholdCont
 * @memberof module:container/communityUI
 * @desc Container to connect 'Household Name' in Community UI to Link component.
 */
import { connect } from 'react-redux';
import LinkComp from '../../components/helpComponents/LinkComp';

// Map state and actions to props
const mapStateToProps = (state, { row }) => {
  return {
    url: '/household/' + row.householdNumber,
    row: row
  };
};

const mapDispatchToProps = (dispatch, { row }) => {
  return {};
};

const LinkToHouseholdCont = connect(mapStateToProps, mapDispatchToProps)(LinkComp);
export default LinkToHouseholdCont;
