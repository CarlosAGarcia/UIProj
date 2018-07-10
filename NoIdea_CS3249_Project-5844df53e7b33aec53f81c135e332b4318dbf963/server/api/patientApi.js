import r from 'rethinkdb';

export const add = (patient, conn) => {
  return r.table('patient').insert(patient).run(conn);
};

export const getAll = conn => {
  return r.table('patient').run(conn).then(cursor => {
    return cursor.toArray();
  });
};

export const update = (patient, conn) => {
    return r.table('patient').filter(r.row('patientId').eq(patient.patientID)).update(patient).run(conn);
};

export const deletePerson = (id, conn) => {
    return r.table('patient').get(id).delete().run(conn);
};