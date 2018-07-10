import r from 'rethinkdb';

export const add = (community, conn) => {
  return r.table('community').insert(community).run(conn);
};

export const getAll = conn => {
  return r.table('community').run(conn).then(cursor => {
    return cursor.toArray();
  });
};

export const update = (community, conn) => {
    return r.table('community').get(community.id).update(community).run(conn);
};