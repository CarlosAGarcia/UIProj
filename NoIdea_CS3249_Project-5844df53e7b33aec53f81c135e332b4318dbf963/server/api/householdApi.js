import r from 'rethinkdb';

export const add = (household, conn) => {
  return r.table('household').insert(household).run(conn);
};

export const getAll = conn => {
  return r.table('household').run(conn).then(cursor => {
    return cursor.toArray();
  });
};

export const update = (household, conn) => {
    return r.table('household').get(household.id).update(household).run(conn);
};

export const deletePerson = (id, conn) => {
    return r.table('household').get(id).delete().run(conn);
};