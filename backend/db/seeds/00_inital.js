const bcrypt = require('bcrypt');

exports.seed = async (knex) => {
  await knex('table_name').del();
  await knex('table_name').insert([
    { id: 1, colName: 'rowValue1' },
    { id: 2, colName: 'rowValue2' },
    { id: 3, colName: 'rowValue3' },
  ]);
};
