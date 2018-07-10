/**
 * @module crypto
 * 
 * Basic module to ensure minimal security for the application (use of HMAC/bcrypt)
 */

import bcrypt from 'bcrypt';
import config from 'config';
import crypto from 'crypto';

/**
 * Creates the token that will be used for SHA
 * @param {string} email 
 * @param {string} other 
 * 
 * @return the combined string using a secret
 */
const token = (email, other) =>
  email + '|' + other + ':' + config.get('secret');

/**
 * Hash the given data using SHA256
 * @param {string} data 
 */
const sha256 = data =>
  crypto.createHash('sha256').update(data).digest('base64');

/**
 * Synchronously compare a plain password and its hash
 * @param {string} plain 
 * @param {string} hash 
 * 
 * @return true if match, false otherwise
 */
export const compare = (plain, hash) => bcrypt.compareSync(plain, hash);

/**
 * Generates the password bcrypt using the plain password
 * @param {string} plain 
 * @return The bcrypt version of the password
 */
export const newPassword = plain => bcrypt.hashSync(plain, 10);

/**
 * Creates the api key for a given user
 * @param {string} email 
 * @param {string} plain 
 * @return The api key
 */
export const newApiKey = (email, plain) => sha256(token(email, plain));

/**
 * Creates the reset link for a given user
 * @param {string} email 
 * @param {string} id 
 * 
 * @return Tht reset link
 */
export const resetLink = (email, id) => sha256(token(email, id));
