'use strict'

const router = require('express').Router();
const knex = require('../db/knex');

router.get('/todolist', (req, res, next) => {
  knex('to_do_list').select('*').then((data) => {
    // console.log(data);
    res.json(data);
  })
  .catch((err) => {
    // console.log(err);
    res.json(err);
  })
})

module.exports = router;
