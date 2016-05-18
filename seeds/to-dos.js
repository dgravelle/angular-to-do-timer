
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('to_do_list').del(),

    // Inserts seed entries
    knex('to_do_list').insert({ title: 'rowValue'}),
    knex('to_do_list').insert({ title: 'rowValue2'}),
    knex('to_do_list').insert({ title: 'rowValue3'})
  );
};
