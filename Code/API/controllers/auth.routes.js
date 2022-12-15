// controllers/auth.route.js
const express = require('express');
const router = express.Router();
const auth = require("../utils/users.auth");
const userRepo = require("../utils/users.repository");

router.get("/user", auth.checkAuthentication("USER"), userAction);
router.get("/admin", auth.checkAuthentication("ADMIN"), userAction);

router.post("/login", loginPostAction);
router.get("/logout", logoutAction);
router.get("/protected",protectedAction);

async function userAction(request, response) {
  let userData = await userRepo.getOneUser(request.user.username);
  let userJson = JSON.stringify(userData); // if  userData.user_role ...
  response.send(userJson);
}

async function protectedAction(request, response) {
  console.log("Auth check")
  if (request.isAuthenticated()) {
    response.send(true)
  } else {
      response.send(false)
  }
}

async function loginPostAction(request, response) {
  areValid = await userRepo.areValidCredentials(request.body.username, request.body.password);

  if (areValid) {
    user = await userRepo.getOneUser(request.body.username);
    request.login(user, function (err) { 
        if (err) { console.log("ERROR"); console.log(err);}
        
        if(request.isAuthenticated()){
          return response.send(JSON.stringify(user));
        }else{
          return response.send("failed");
        }
        
        
    });
  } else {
    response.send("Invalid credentials provided");
  }
}

function logoutAction(request, response) {
    request.logout(function(err) {
        if (err) { return next(err); }
        response.send("Logged out")
    });
}

module.exports = router;