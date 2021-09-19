const express = require('express');
const app = express();
const keycloak = require('./config/keycloak-config.js').initKeycloak();
app.use(keycloak.middleware());

const testController = require('./controller/test-controller');
app.use('/test', testController);

app.get('/', function(request, response){
    response.send('Server is up')
})

app.listen(3000);
