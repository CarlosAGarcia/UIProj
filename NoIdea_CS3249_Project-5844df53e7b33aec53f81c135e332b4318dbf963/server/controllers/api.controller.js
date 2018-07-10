/**
 * @module main controller for the API responsible of the client logic
 */

import r from 'rethinkdb';
import * as userApi from '../api/userApi';
import * as crypto from '../util/crypto';
import * as mailer from '../util/mailer';

/**
 * Check if the user is connected or not
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
export const isConnected = (req, res, next) => {
  userApi
    .isConnected(req.headers.authorization, req.connection)
    .then(() => next())
    .catch(error => res.status(401).json({ error }));
};

/**
 * Add a new user inside the DB
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
export const addUser = (req, res, next) => {
  let newUser = req.body;
  console.log(newUser);
  userApi
    .getUserByEmail(newUser.email, req.connection)
    .then(existingUser => {
      if (existingUser.length === 0) {
        userApi
          .addUser(newUser, req.connection)
          .then(success => res.json({ ...newUser, success }))
          .catch(error => {
            console.log(error);
            res.status(500).json({ error });
          });
      } else {
        res.json({ error: 'User already exists' });
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error });
    });
};

/**
 * Tries to connect the user
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
export const connectUser = (req, res, next) => {
  let user = req.body;
  console.log(user);
  userApi
    .getUserByEmail(user.email, req.connection)
    .then(resUser => {
      console.log(resUser);
      if (resUser.length !== 1) {
        res.json({ error: "User doesn't exist" });
      } else {
        resUser = resUser[0];
        if (!crypto.compare(user.password, resUser.password)) {
          res.json({ error: 'Password is incorrect' });
        } else {
          res.json({ apiKey: resUser.apiKey });
        }
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error });
    });
};

/**
 * send a reset password email to a user
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
export const sendResetEmail = (req, res, next) => {
  let user = req.body;
  console.log(user);
  userApi
    .getUserByEmail(user.email, req.connection)
    .then(resUser => {
      console.log(resUser);
      if (resUser.length !== 1) {
        res.json({ error: "User doesn't exist" });
      } else {
        resUser = resUser[0];
        mailer
          .sendResetLink(
            resUser.email,
            crypto.resetLink(resUser.email, resUser.id)
          )
          .then(info => res.json({ info }));
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error });
    });
};

/**
 * Tries to reset the password of a user
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
export const resetPassword = (req, res, next) => {
  let user = req.body;
  console.log(user);
  userApi
    .getUserByEmail(user.email, req.connection)
    .then(resUser => {
      console.log(resUser);
      if (resUser.length !== 1) {
        res.json({ error: "User doesn't exist" });
      } else {
        resUser = resUser[0];
        if (user.reset !== crypto.resetLink(resUser.email, resUser.id)) {
          res.json({ error: 'Incorrect link for the email' });
        } else {
          userApi
            .changePassword(resUser, user.password, req.connection)
            .then(success => res.json({ success }))
            .catch(error => {
              console.log(error);
              res.status(500).json({ error });
            });
        }
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error });
    });
};
