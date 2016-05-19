'use strict'

const router = require('express').Router();
const knex = require('../db/knex');

router.get('/todolist', (req, res, next) => {
  knex.select('*').from('to_do_list').then((data) => {
    console.log(data);
    res.status(200).send(data);
  })
  .catch((err) => {
    // console.log(err);
    res.json(err);
  })
});

router.post('/todolist', (req, res) => {
  knex('to_do_list').insert({ title: req.body.title }).then((data) => {
    res.status(200).send(data);
  })
  .catch((err) => {
    console.log(err);
  })
})

router.put('/todolist', (req, res) => {

})

module.exports = router;
