import r from 'rethinkdb';
import * as patientApi from '../api/patientApi';

export const add = (req, res, next) => {
  console.log(req.body);
  patientApi
    .add(req.body, req.connection)
    .then(success => res.json({ success }))
    .catch(error => {
      console.log(error);
      res.status(500).json({ error });
    });
};

export const getAll = (req, res, next) => {
    patientApi.getAll(req.connection)
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
    patientApi.update(req.body, req.connection)
    .then(success => res.json({ success }))
    .catch(error => {
      console.log(error);
      res.status(500).json({ error });
    });
};
