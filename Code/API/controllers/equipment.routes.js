// controllers/equipment.route.js
const express = require('express');
const router = express.Router();
const equipmentRepo = require('../utils/equipment.repository');
const auth = require("../utils/users.auth");

router.get('/', auth.checkAuthentication("USER"), equipmentRootAction);
router.get('/list', auth.checkAuthentication("USER"), equipmentListAction);
router.get('/show/:equipmentID', auth.checkAuthentication("USER"), equipmentShowAction);
router.get('/del/:equipmentID', auth.checkAuthentication("USER"), equipmentDelAction);
router.get('/edit/:equipmentID', auth.checkAuthentication("USER"), equipmentEditAction);
router.post('/update/:equipmentID', auth.checkAuthentication("USER"), equipmentUpdateAction);


function equipmentRootAction(request, response) {

    response.redirect("/toudoomapi/equipment/list");
}
async function equipmentListAction(request, response) {

    var equipment = await equipmentRepo.getAllEquipment();
    console.log('[',request.ip,'] FETCHED All Equipments');
    
    response.send(JSON.stringify(equipment));
}

async function equipmentShowAction(request, response) {

    var oneEquipment = await equipmentRepo.getOneEquipment(request.params.equipmentID);
    response.send(JSON.stringify(oneEquipment));

    console.log('[',request.ip,'] FETCHED Equipment : ', request.params.equipmentID);
}
async function equipmentEditAction(request, response) {

    var brands = await equipmentRepo.getAllEquipment();
    var equipmentID = request.params.equipmentID;
    if (equipmentID!== null)
        var equipment = await equipmentRepo.getOneEquipment(equipmentID);
    else
        var equipment = equipmentRepo.getBlankEquipment();

    response.send(JSON.stringify(equipment));
    console.log('[',request.ip,'] FETCHED Equipment : ', request.params.equipmentID);
}
async function equipmentDelAction(request, response) {
    var numRows = await equipmentRepo.delOneEquipment(request.params.equipmentID);
    console.log('[',request.ip,'] DELETED Equipment : ', request.params.equipmentID);
    response.send(JSON.stringify("Deleted"));
}
async function equipmentUpdateAction(request, response) {
    // response.send("UPDATE ACTION");
    var equipmentID = request.params.equipmentID;
    if (equipmentID==="0"){
        equipmentID = await equipmentRepo.addOneEquipment(request.body.type, 
            request.body.name,  
            request.body.condition, 
            request.body.available,
            request.body.purchaseDate,
            request.body.storagePlace,
            request.body.rentingRate,
            request.body.bailRate);
        
        response.send(JSON.stringify(equipmentID));
        console.log('[',request.ip,'] ADDED Equipment : ', equipmentID);
    }else{
        var numRows = await equipmentRepo.editOneEquipment(equipmentID, 
            request.body.type, 
            request.body.name,  
            request.body.condition, 
            request.body.available,
            request.body.purchaseDate,
            request.body.storagePlace,
            request.body.rentingRate,
            request.body.bailRate);

        console.log('[',request.ip,'] EDITED Equipment : ', request.params.equipmentID);
        response.send(JSON.stringify(numRows));
    } 
}

module.exports = router;
