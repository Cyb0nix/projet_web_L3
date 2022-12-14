// controllers/client.route.js
const express = require('express');
const router = express.Router();
const clientRepo = require('../utils/clients.repository');
const auth = require("../utils/users.auth");

router.get('/', auth.checkAuthentication("USER"), clientRootAction);
router.get('/list', auth.checkAuthentication("USER"), clientListAction);
router.get('/show/:clientID', auth.checkAuthentication("USER"), clientShowAction);
router.get('/del/:clientID', auth.checkAuthentication("USER"), clientDelAction);
router.get('/edit/:clientID', auth.checkAuthentication("USER"), clientEditAction);
router.post('/update/:clientID', auth.checkAuthentication("USER"), clientUpdateAction);


function clientRootAction(request, response) {
    //response.send("ROOT ACTION");
    response.redirect("/toudoomapi/client/list");
}
async function clientListAction(request, response) {

    var client = await clientRepo.getAllClient();
    console.log('[',request.ip,'] FETCHED all clients');
    
    response.send(JSON.stringify(client));
}
async function clientShowAction(request, response) {

    var oneclient = await clientRepo.getOneClient(request.params.clientID);
    response.send(JSON.stringify(oneclient));
    console.log('[',request.ip,'] FETCHED Client : ', request.params.clientID);
}
async function clientEditAction(request, response) {

    var clientID = request.params.clientID;
    if (clientID!== null)
        var client = await clientRepo.getOneClient(clientID);
    else
        var client = clientRepo.getBlankClient();
    response.send(JSON.stringify(client));
    console.log('[',request.ip,'] EDITED Client : ', request.params.clientID);

}
async function clientDelAction(request, response) {

    var numRows = await clientRepo.delOneClient(request.params.clientID);
    response.send(JSON.stringify("Deleted"));
    
    console.log('[',request.ip,'] DELETED Client : ', request.params.clientID);

}

async function clientUpdateAction(request, response) {
    // response.send("UPDATE ACTION");
    var clientID = request.params.clientID;
    if (clientID==="0") {
        clientID = await clientRepo.addOneClient(request.body.name, 
            request.body.number, 
            request.body.email);

        response.send(JSON.stringify(clientID));
        console.log('[',request.ip,'] ADDED Client : ', clientID);
    }else{
        var numRows = await clientRepo.editOneClient(clientID, 
            request.body.name, 
            request.body.number,  
            request.body.email);
    
            console.log('[',request.ip,'] EDITED Client : ', request.params.clientID);
        
            response.send(JSON.stringify("Updated"));
    }
    
}

module.exports = router;
