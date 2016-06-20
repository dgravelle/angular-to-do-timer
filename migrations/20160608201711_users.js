
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', t => {
      t.increments('id');
      t.string('username');
      t.string('password_hash');
    })
  ])
};

exports.down = function(knex, Promise) {

};
