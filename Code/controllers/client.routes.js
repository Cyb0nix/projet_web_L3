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
    response.redirect("/client/list");
}
async function clientListAction(request, response) {
    // response.send("LIST ACTION");
    var client = await clientRepo.getAllClient();
    // console.log(client);

    
    response.render(client);
}
async function clientShowAction(request, response) {
    // response.send("SHOW ACTION");
    var oneclient = await clientRepo.getOneClient(request.params.clientID);
    response.send(oneclient);
}
async function clientEditAction(request, response) {
    // response.send("EDIT ACTION");
    var brands = await clientRepo.getAllClient();
    var clientID = request.params.clientID;
    if (clientID!== null)
        var client = await clientRepo.getOneClient(clientID);
    else
        var client = clientRepo.getBlankClient();
    response.send(client);
}
async function clientDelAction(request, response) {
    // response.send("DEL ACTION");
    // TODO: remove extras for car, unless the car cannot be removed!!!
    var numRows = await clientRepo.delOneClient(request.params.clientID);
    request.session.flashMessage = "ROWS DELETED: "+numRows;

}

async function clientUpdateAction(request, response) {
    // response.send("UPDATE ACTION");
    var clientID = request.params.clientID;
    if (clientID===null) {
        clientID = await clientRepo.addOneClient(request.body.name, 
            request.body.number, 
            request.body.email);

        response.send(clientID);
    }else{
        var numRows = await clientRepo.editOneClient(clientID, 
            request.body.name, 
            request.body.number,  
            request.body.email);
    
        request.session.flashMessage = "ROWS UPDATED: "+numRows;
    }
    
}

module.exports = router;
