// controllers/equipement.route.js
const express = require('express');
const router = express.Router();
const equipementRepo = require('../utils/equipment.repository');

router.get('/', equipementRootAction);
router.get('/list', equipementListAction);
router.get('/show/:equipementID', equipementShowAction);
router.get('/del/:equipementID', equipementDelAction);
router.get('/edit/:equipementID', equipementEditAction);
router.post('/update/:equipementID', equipementUpdateAction);


function equipementRootAction(request, response) {
    //response.send("ROOT ACTION");
    response.redirect("/equipement/list");
}
async function equipementListAction(request, response) {
    // response.send("LIST ACTION");
    var equipement = await equipementRepo.getAllEquipement();
    // console.log(equipement);
    var flashMessage = request.session.flashMessage; // express-flash ...
    request.session.flashMessage = "";
    
    response.send(equipement);
}

async function equipementShowAction(request, response) {
    // response.send("SHOW ACTION");
    var oneEquipement = await equipementRepo.getOneEquipement(request.params.equipementID);

    response.send(oneEquipement);
}
async function equipementEditAction(request, response) {
    // response.send("EDIT ACTION");
    var brands = await equipementRepo.getAllEquipement();
    var equipementID = request.params.equipementID;
    if (equipementID!== null)
        var equipement = await equipementRepo.getOneEquipement(equipementID);
    else
        var equipement = equipementRepo.getBlankEquipement();

    response.send(equipement);
}
async function equipementDelAction(request, response) {
    var numRows = await equipementRepo.delOneEquipement(request.params.equipementID);
    request.session.flashMessage = "ROWS DELETED: "+numRows;
}
async function equipementUpdateAction(request, response) {
    // response.send("UPDATE ACTION");
    var equipementID = request.params.equipementID;
    if (equipementID===null){
        equipementID = await equipementRepo.addOneEquipement(request.body.type, 
            request.body.name,  
            request.body.condition, 
            request.body.available,
            request.body.purchase_date,
            request.body.storage_place,
            request.body.renting_rate,
            request.body.bail_rate);
        
        response.send(equipementID);
    }else{
        var available = request.body.available === undefined ? 0 : 1; 
        var numRows = await equipementRepo.editOneEquipement(equipementID, 
            request.body.type, 
            request.body.name,  
            request.body.condition, 
            available,
            request.body.purchase_date,
            request.body.storage_place,
            request.body.renting_rate,
            request.body.bail_rate);

        request.session.flashMessage = "ROWS UPDATED: "+numRows;
    } 

    
}

module.exports = router;
