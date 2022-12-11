// controllers/auth.route.js
const express = require('express');
const router = express.Router();
const auth = require("../utils/users.auth");
const userRepo = require("../utils/users.repository");

router.get("/user", auth.checkAuthentication("USER"), userAction);
router.get("/admin", auth.checkAuthentication("ADMIN"), userAction);

router.post("/login", loginPostAction);
router.get("/logout", logoutAction);

async function userAction(request, response) {
  let userData = await userRepo.getOneUser(request.user.username);
  let userJson = JSON.stringify(userData); // if  userData.user_role ...
  response.send(userJson);
}

// async function protectedGetAction(request, response) {
//   if (request.isAuthenticated()) {
//     if (request.user.userRole === "ADMIN") {
//       response.redirect("/auth/admin");
//     } else {
//       response.redirect("/auth/user");
//     }
//   } else {
//       response.redirect("/auth");
//   }
// }

async function loginPostAction(request, response) {
  console.log(request.body.username, request.body.password);
  areValid = await userRepo.areValidCredentials(request.body.username, request.body.password);

  if (areValid) {
    user = await userRepo.getOneUser(request.body.username);
    request.login(user, function (err) { 
        if (err) { console.log("ERROR"); console.log(err); return next(err); }

        if (request.user.userRole === "ADMIN") {
            return response.redirect("/auth/admin");
        } else {
            return response.redirect("/auth/user");
        }
    });
  } else {
    response.send("Invalid credentials provided");
    // TODO redirect/normal error message
  }
}

function logoutAction(request, response) {
    request.logout(function(err) {
        if (err) { return next(err); }
        response.redirect('/auth');
    });
}

module.exports = router;