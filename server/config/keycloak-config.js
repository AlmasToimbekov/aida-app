var session = require('express-session');
var Keycloak = require('keycloak-connect');

let _keycloak;

var keycloakConfig = {
    "realm": "aida-realm",
    "auth-server-url": "http://localhost:8080/auth/",
    "ssl-required": "external",
    "resource": "aida-web",
    "credentials": {
      "secret": "b02f6aee-e2cd-438b-93d4-d076e69139b2"
    },
    "confidential-port": 0,
    // "enable-cors": true,
  }

function initKeycloak() {
    if (_keycloak) {
        console.warn("Trying to init Keycloak again!");
        const memoryStore = new session.MemoryStore();

        app.use(session({
            secret: 'b02f6aee-e2cd-438b-93d4-d076e69139b2',
            resave: false,
            saveUninitialized: true,
            store: memoryStore
        }));

        _keycloak = new Keycloak({
            store: memoryStore
        }, keycloakConfig);

        app.use(_keycloak.middleware());
        return _keycloak;
    }
    else {
        console.log("Initializing Keycloak...");
        var memoryStore = new session.MemoryStore();
        _keycloak = new Keycloak({ store: memoryStore }, keycloakConfig);
        return _keycloak;
    }
}

function getKeycloak() {
    if (!_keycloak) {
        console.error('Keycloak has not been initialized. Please call init first.');
    }
    console.log('success to take keycloak again')
    return _keycloak;
}

module.exports = {
    initKeycloak,
    getKeycloak
};