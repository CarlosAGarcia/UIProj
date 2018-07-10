import r from 'rethinkdb';

export const add = (sample, conn) => {
  return r.table('sample').insert(sample).run(conn);
};

export const getAll = (type, conn) => {
  return r
    .table('sample')
    .filter(r.row('type').eq(type))
    .run(conn)
    .then(cursor => {
      return cursor.toArray();
    });
};

export const update = (sample, conn) => {
  return r.table('sample').get(sample.id).update(sample).run(conn);
};
