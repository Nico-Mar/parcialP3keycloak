const express = require('express');
const router = express.Router();

router.get('/anonymous', function(request,response){
    response.send('Hello anonymous')
})

router.get('/user',function(request,response){
    response.send('Hello user')
})

router.get('/admin',function(request,response){
    response.send('Hello admin')
})

router.get('/all-user',function(request,response){
    response.send('Hello all-user')
})

module.exports = router;