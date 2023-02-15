const express = require('express');
const route = express.Router();




route.post('/' , require('./../controllers/user').createUser);
route.get('/' , require('./../controllers/user').getAllusers);
route.get('/user/:userId' , require('./../controllers/user').getuser);
route.delete('/user/:userId' , require('./../controllers/user').deleteuser);
route.put('/user/:userId' , require('./../controllers/user').updateUser);

module.exports =route;