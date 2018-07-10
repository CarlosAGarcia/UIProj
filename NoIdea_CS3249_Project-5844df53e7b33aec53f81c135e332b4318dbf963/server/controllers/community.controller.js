/**
 * @module community controller
 * In charge of the community api call
 */

import r from 'rethinkdb';
import * as communityApi from '../api/communityApi';

/**
 * Add a new household
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
export const add = (req, res, next) => {
  console.log(req.body);
  communityApi
    .add(req.body, req.connection)
    .then(success => res.json({ success }))
    .catch(error => {
      console.log(error);
      res.status(500).json({ error });
    });
};

/**
 * Get all the household 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
export const getAll = (req, res, next) => {
    communityApi.getAll(req.connection)
    .then(values => {
        console.log(values);
        res.json({ success: values });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error });
    });
};

/**
 * Updates a given household
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
export const update = (req, res, next) => {
    console.log(req.body);
    communityApi.update(req.body, req.connection)
    .then(success => res.json({ success }))
    .catch(error => {
      console.log(error);
      res.status(500).json({ error });
    });
};
