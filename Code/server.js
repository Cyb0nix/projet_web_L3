/*
cd WEBAPP
mkdir controllers models views
npm init -y
npm install mariadb express express-session body-parser passport dotenv ejs mysql2
>> https://www.npmjs.com/package/body-parser
edit/copy files, then ... node server.js 
*/

const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();
app.set("view engine", "ejs");
app.set("views", "views");
app.listen(process.env.WEB_PORT, '0.0.0.0',
    function() { console.log("Listening on "+process.env.WEB_PORT); }
);

app.get('/', (request, response) => { // 'GET' as a HTTP VERB, not as a 'getter'!
    let clientIp = request.ip;
    response.send(`Hello, dear ${clientIp}. I am a nodejs website...`);
    response.end(); // optional
});

// MIDDLEWARE REGISTRATIONS
// app.use(callback1, callback2, callback3)
const bodyParser = require("body-parser");
app.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }));

const session = require("express-session");
app.use(session({
    secret: "SecretRandomStringDskghadslkghdlkghdghaksdghdksh",
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 }, // 1 day in msec
    resave: false
}));

// const auth = require("./utils/users.auth");
// auth.initialization(app);

// app.use(routeBase, callback);
app.use("/project", require("./controllers/project.routes"));
app.use("/equipement", require("./controllers/equipement.routes"));
app.use("/client", require("./controllers/client.routes"));
app.use("/staff", require("./controllers/staff.routes"));
// app.use("/auth", require("./controllers/auth.route"));