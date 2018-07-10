/** 
 * @namespace householdUI/forms/addPersonFormsCont
 * @memberof module:container/householdUI
 * @desc Container to connect corresponding wrapper to the actual 'Household Composition' form.
 * 
 * Defines an 'empty Person'
 */
import { connect } from 'react-redux';
import HouseholdCompositionForm
  from '../../components/forms/householdForms/HouseholdCompositionForm';
import { addPerson } from '../../actions/HouseholdActions';

const mapStateToProps = (state, ownProps) => {
  // Define a new empty state
  let emptyP = {
    id: ownProps.id,
    communityId: ownProps.number,
    name: '',
    initials: '',
    gender: '',
    age: 0,
    relationship: '',
    eligibleAsking: false,
    presence: false,
    residency: '',
    willingness: false,
    reasonDecline: '',
    hasIntactUterus: false,
    hadCervicalCancer: false,
    isPregnant: false,
    understandProcedures: false,
    capableToConsent: false,
    eligibleStudy: false,
    consent: 'NA',
    isComOfResidence: false,
    nationalID: 0,
    dateOfBirth: '',
    contactNumber: 0,
    contactAddress: '',
    educationLevel: '',
    employmentStatus: '',
    maritalStatus: '',
    everHadSex: false,
    sexualDebut: 0,
    hadSexInPast12M: false,
    sexPartnersInPast12M: 0,
    sexPartnersInLife: 0,
    parity: 0,
    menstruation: '',
    familyPlanning: false,
    contraceptiveMethod: '',
    priorCCTestInd: false,
    priorCCTestLocation: '',
    priorCCTestRecordAvailableInd: false,
    priorCCTestDate: '',
    priorCCTestResult: '',
    breastLump: false,
    HIVTest: false,
    HIVTestResult: '',
    ART: '',
    TCConsent: false,
    KHB1TestPerformedInd: false,
    requisitionCodeNr: 0,
    HPVTestRefusalReason: '',
    questionnaire: false,
    sampleReq: false
  };
  return {
    initialState: emptyP
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit: values => dispatch(addPerson(ownProps.id, ownProps.id)(values))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  HouseholdCompositionForm
);
