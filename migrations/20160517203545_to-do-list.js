
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('to_do_list', t => {
      t.increments('id');
      t.string('title');
      t.integer('timeElapsed');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('to_do_list')
  ]);
};
