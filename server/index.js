const express = require("express");
const bodyParser = require("body-parser");
// const cors = require("cors");

const app = express();

// var corsOptions = {
//     origin: "http://localhost:3000"
// };

// app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

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
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});