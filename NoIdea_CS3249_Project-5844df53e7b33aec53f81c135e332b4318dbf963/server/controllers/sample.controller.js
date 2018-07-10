import r from 'rethinkdb';
import * as sampleApi from '../api/sampleApi';

export const add = (req, res, next) => {
  console.log(req.body);
  sampleApi
    .add(req.body, req.connection)
    .then(success => res.json({ success }))
    .catch(error => {
      console.log(error);
      res.status(500).json({ error });
    });
};

export const getAll = (req, res, next) => {
    sampleApi.getAll(req.params.type, req.connection)
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
    sampleApi.update(req.body, req.connection)
    .then(success => res.json({ success }))
    .catch(error => {
      console.log(error);
      res.status(500).json({ error });
    });
};
