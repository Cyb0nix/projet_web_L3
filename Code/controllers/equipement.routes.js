// controllers/equipement.route.js
const express = require('express');
const router = express.Router();
const carRepo = require('../utils/equipement.repository');

router.get('/', equipementRootAction);
router.get('/list', equipementListAction);
router.get('/show/:equipement_ID', equipementShowAction);
router.get('/del/:equipement_ID', equipementDelAction);
router.get('/edit/:equipement_ID', equipementEditAction);
router.post('/update/:equipement_ID', equipementUpdateAction);


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
    
    response.render("equipement_list", { "equipement": equipement, "flashMessage": flashMessage });
}
async function equipementShowAction(request, response) {
    // response.send("SHOW ACTION");
    var oneEquipement = await equipementRepo.getOneEquipement(request.params.equipement_ID);
    response.render("equipement_show", { "oneEquipement": oneEquipement });
}
async function equipementEditAction(request, response) {
    // response.send("EDIT ACTION");
    var brands = await equipementRepo.getAllEquipement();
    var equipement_ID = request.params.equipement_ID;
    if (equipement_ID!== null)
        var equipement = await equipementRepo.getOneEquipement(equipement_ID);
    else
        var equipement = equipementRepo.getBlankEquipement();
    response.render("equipement_edit", { "oneEquipement": equipement, "type": type });
}
async function equipementDelAction(request, response) {
    // response.send("DEL ACTION");
    // TODO: remove extras for car, unless the car cannot be removed!!!
    var numRows = await equipementRepo.delOneEquipement(request.params.equipement_ID);
    request.session.flashMessage = "ROWS DELETED: "+numRows;
    response.redirect("/equipement/list");
}
async function equipementUpdateAction(request, response) {
    // response.send("UPDATE ACTION");
    var equipement_ID = request.params.equipement_ID;
    if (equipement_ID==="0") equipement_ID = await equipementRepo.addOneEquipement(request.body.type);

    var condition = request.body.condition === undefined ? 0 : 1; 
    var numRows = await equipementRepo.editOneEquipement(equipement_ID, 
        request.body.type, 
        request.body.name,  
        condition, 
        request.body.available,
        request.body.purchase_date,
        request.body.storage_place,
        request.body.renting_rate,
        request.body.bail_rate);

    request.session.flashMessage = "ROWS UPDATED: "+numRows;
    response.redirect("/equipement/list");
}

module.exports = router;
