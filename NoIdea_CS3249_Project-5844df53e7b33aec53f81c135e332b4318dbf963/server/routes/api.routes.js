/**
 * @module Api.routes
 * 
 * Router for all the routes of the API
 */


import { Router } from 'express';
import * as apiController from '../controllers/api.controller';
import * as communityController from '../controllers/community.controller';
import * as householdController from '../controllers/household.controller';
import * as sampleController from '../controllers/sample.controller';
import * as patientController from '../controllers/patient.controller';

const router = new Router();
// CLIENT LOGIC
router.route('/signup').post(apiController.addUser);
router.route('/signin').post(apiController.connectUser);
router.route('/lostpassword').post(apiController.sendResetEmail);
router.route('/reset').post(apiController.resetPassword);
// COMMUNITY
router.route('/community/add').post(apiController.isConnected, communityController.add);
router.route('/community/getAll').get(apiController.isConnected, communityController.getAll);
router.route('/community/update').post(apiController.isConnected, communityController.update);
// PATIENT
router.route('/patient/add').post(apiController.isConnected, patientController.add);
router.route('/patient/getAll').get(apiController.isConnected, patientController.getAll);
router.route('/patient/update').post(apiController.isConnected, patientController.update);
// HOUSEHOLD
router.route('/household/add').post(apiController.isConnected, householdController.add);
router.route('/household/getAll').get(apiController.isConnected, householdController.getAll);
router.route('/household/update').post(apiController.isConnected, householdController.update);
router.route('/household/delete').delete(apiController.isConnected, householdController.deletePerson);
// SAMPLE
router.route('/sample/:type/getAll').get(apiController.isConnected, sampleController.getAll);
router.route('/sample/add').post(apiController.isConnected, sampleController.add);
router.route('/sample/update').post(apiController.isConnected, sampleController.update);

export default router;
