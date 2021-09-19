const session = require('express-session');
const Keycloak = require('keycloak-connect');

let _keycloak;

var keycloakConfig = {
    clientId: 'nodejs-microservice',
    bearerOnly: true,
    serverUrl: 'http://localhost:8080/auth',
    realm: 'Demo-Realm',
    credentials:{
        secret: '0be82b2f-a028-48dc-b47a-cf80f5c4a3b5'

    }
}

function initKeycloak(){
    if(_keycloak){
        console.warn('Trying to init keycloak again.');
        return _keycloak;
    }
    else{
        console.log('initializing keycloak...');
        var memoryStore = new session.MemoryStore();
        _keycloak = new Keycloak({store: memoryStore}, keycloakConfig);
        return _keycloak;
    }
}

function getKeycloak(){
    if(!_keycloak){
        console.log('keycloack has not been initialized, please call initKeycloak first.')
    }
    return _keycloak;
}

module.exports = {
    initKeycloak,
    getKeycloak
}