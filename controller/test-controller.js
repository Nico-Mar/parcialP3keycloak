const express = require('express');
const router = express.Router();

const keycloak = require('../config/keycloak-config.js').getKeycloak();

router.get('/anonymous', function(request,response){
    response.send('Hello anonymous')
})

router.get('/user',keycloak.protect('usuario'),function(request,response){
    response.send('Hello user')
})

router.get('/admin',keycloak.protect('admin'),function(request,response){
    response.send('Hello admin')
})

router.get('/all-user',keycloak.protect(['admin','usuario']),function(request,response){
    response.send('Hello all-user')
})

module.exports = router;