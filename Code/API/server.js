
const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
var cors = require('cors')
const app = express();
// app.use(cors())

app.listen(process.env.WEB_PORT, function () {
    console.log('CORS-enabled web server listening on port ',process.env.WEB_PORT);
  })

app.get('/', function (request, response, next) {
    response.json({msg: 'This is CORS-enabled for all origins!'})
})

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

const auth = require("./utils/users.auth");
auth.initialization(app);



// app.use(routeBase, callback);
app.use("/toudoomapi/project", require("./controllers/project.routes"));
app.use("/toudoomapi/equipement", require("./controllers/equipment.routes"));
app.use("/toudoomapi/client", require("./controllers/client.routes"));
app.use("/toudoomapi/staff", require("./controllers/staff.routes"));
app.use("/auth", require("./controllers/auth.route"));