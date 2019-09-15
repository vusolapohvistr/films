const express = require('express');

const filmGet = require('../controllers/film-get-controller');
const filmPut = require('../controllers/film-put-controller');
const filmGetId = require('../controllers/film-get-id-contoller');
const filmDelete = require('../controllers/film-delete-controller');

const router = express.Router();


router.get('/film', filmGet);
router.get('/film/:id', filmGetId);
router.put('/film', filmPut);
router.delete('/film/:id', filmDelete);

module.exports = router;
