import r from 'rethinkdb';
import * as crypto from '../util/crypto';

export const getUserByEmail = (email, conn) => {
  return r
    .table('users')
    .filter(r.row('email').eq(email))
    .run(conn)
    .then(cursor => {
      return cursor.toArray();
    });
};

export const addUser = (user, conn) => {
  user.apiKey = crypto.newApiKey(user.email, user.password);
  user.password = crypto.newPassword(user.password);
  return r.table('users').insert(user).run(conn);
};

export const changePassword = (user, password, conn) => {
  user.apiKey = crypto.newApiKey(user.email, password);
  user.password = crypto.newPassword(password);
  return r
    .table('users')
    .get(user.id)
    .update({ apiKey: user.apiKey, password: user.password })
    .run(conn);
};

export const isConnected = (apiKey, conn) => {
  return r
    .table('users')
    .filter(r.row('apiKey').eq(apiKey))
    .run(conn)
    .then(cursor => {
      return cursor.toArray();
    })
    .then(response => {
      if (response.length > 0) return true;
      else throw new Error('Not connected');
    });
};
