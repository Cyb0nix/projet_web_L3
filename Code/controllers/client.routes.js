// controllers/client.route.js
const express = require('express');
const router = express.Router();
const clientRepo = require('../utils/clients.repository');

router.get('/', clientRootAction);
router.get('/list', clientListAction);
router.get('/show/:clientID', clientShowAction);
router.get('/del/:clientID', clientDelAction);
router.get('/edit/:clientID', clientEditAction);
router.post('/update/:clientID', clientUpdateAction);


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
    
    console.log('[',request.ip,'] DELETED Client : ', request.params.clientID);

}

async function clientUpdateAction(request, response) {
    // response.send("UPDATE ACTION");
    var clientID = request.params.clientID;
    if (clientID===null) {
        clientID = await clientRepo.addOneClient(request.body.name, 
            request.body.number, 
            request.body.email);

        response.send(clientID);
        console.log('[',request.ip,'] ADDED Client : ', clientID);
    }else{
        var numRows = await clientRepo.editOneClient(clientID, 
            request.body.name, 
            request.body.number,  
            request.body.email);
    
            console.log('[',request.ip,'] EDITED Client : ', request.params.clientID);
    }
    
}

module.exports = router;
