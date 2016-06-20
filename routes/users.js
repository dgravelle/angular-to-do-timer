var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
  var data = req.body;

  knex('users').where({ email: data.email }).first().then(data => {
    if (!data) {
      // knex('users').insert(req.body, '*').then(user => {
      //
      // })
    }
    res.json(data);
  })

});

module.exports = router;
