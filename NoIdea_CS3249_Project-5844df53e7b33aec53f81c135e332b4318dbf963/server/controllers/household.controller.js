/**
 * @module 
 */
import r from 'rethinkdb';
import * as householdApi from '../api/householdApi';

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
export const add = (req, res, next) => {
  console.log(req.body);
  householdApi
    .add(req.body, req.connection)
    .then(success => res.json({ success }))
    .catch(error => {
      console.log(error);
      res.status(500).json({ error });
    });
};

export const getAll = (req, res, next) => {
    householdApi.getAll(req.connection)
    .then(values => {
        console.log(values);
        res.json({ success: values });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error });
    });
};

export const update = (req, res, next) => {
    console.log(req.body);
    householdApi.update(req.body, req.connection)
    .then(success => res.json({ success }))
    .catch(error => {
      console.log(error);
      res.status(500).json({ error });
    });
};

export const deletePerson = (req, res, next) => {
    console.log(req.body);
    householdApi.deletePerson(req.body.id, req.connection)
    .then(success => res.json({ success }))
    .catch(error => {
      console.log(error);
      res.status(500).json({ error });
    });
};