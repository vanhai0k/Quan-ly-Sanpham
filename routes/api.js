var express = require('express');
const route = express.Router();
var apiC = require('../controllers/api/api.controller');



// user

route.get('/users',apiC.Listuser);// get du lieu
route.post('/users',apiC.addUser);// them du lieu
route.put('/users/:idu',apiC.UpdateUser);// sua du lieu
route.delete('/users/:idu',apiC.deleteUser);// xoa du lieu
route.get('/pr',apiC.listPr);
route.post('/pr',apiC.addpr);




// product














module.exports = route;

