const express = require('express');
const app = express();

const testController = require('./controller/test-controller');
app.use('/test', testController);

app.get('/', function(request, response){
    response.send('Server is up')
})

app.listen(3000);
