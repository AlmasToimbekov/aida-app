const express = require("express");
const bodyParser = require("body-parser");
// const session = require('express-session');
// const keycloak = require('./config/keycloak-config.js').initKeycloak();
const dotenv = require('dotenv');
dotenv.config();

const cors = require("cors");

const app = express();

app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());
// var memoryStore = new session.MemoryStore();
// app.use(session({
//     secret: 'd1ea3f9e-8239-4344-b5b5-9867cd08675a',
//     resave: false,
//     saveUninitialized: true,
//     store: memoryStore
// }));

// app.use(keycloak.middleware());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

require("./routes/router")(app);
if (process.env.NODE_ENV === 'production') {
    const path = require('path');
    app.use(express.static(path.resolve(__dirname, '../client', 'dist')));

    app.get('/*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../client', 'dist', 'index.html'))
    })
}

// set port, listen for requests
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});