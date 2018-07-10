/** @module household actions test
*  @desc Unit tests for HouseholdActions
*/
import * as actions from './HouseholdActions';

/**
*@dec tests the ADD_PERSON action vs manually set results
*@see HouseholdActions for actions referenced
*/
describe('household actions', () => {
	
  it('addPerson should create ADD_PERSON action and calculate eligibleAsking', () => {
    let newPerson = {
      id: 1234,
      name: 'Test Person',
      initials: 'TP',
      gender: 'female',
      age: 20,
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
    expect(actions.addPerson(1234, 542)(newPerson)).toEqual({
      type: 'ADD_PERSON',
      id: 1234,
	  data: newPerson,
      eligibleAsking: true
    });
  });

/**
*@dec tests the EDIT_PERSON action vs manually set results
*@see HouseholdActions for actions referenced
*/
  it('editPerson should create EDIT_PERSON action, update household data and calculate eligibleAsking', () => {
    let newPerson = {
      id: 543,
      name: 'Male Person',
      initials: 'MP',
      gender: 'male',
      age: 20,
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
    expect(actions.editPerson(543, 541)(newPerson)).toEqual({
	  data: newPerson,
      type: 'EDIT_PERSON',
      id: 543,
      eligibleAsking: false
    });
  });
  
/**
*@dec tests the DELETE_PERSON action vs manually set results
*@see HouseholdActions for actions referenced
*/

  it('confirmDelete should create DELETE_PERSON action', () => {
    let newRow = {
      id: 666
    };
    expect(actions.confirmDelete(newRow)).toEqual({
      type: 'DELETE_PERSON',
      id: 666
    });
  }); 
});
