
const express = require("express");
const router = express.Router();
const skillsRepo = require("../utils/skills.repository")
const auth = require("../utils/users.auth");

router.get('/', auth.checkAuthentication("USER"), skillsRootAction);
router.get('/list', auth.checkAuthentication("USER"), skillsListAction);
router.get('/show/:skillID', auth.checkAuthentication("USER"), skillsShowAction);
router.get('/del/:skillID', auth.checkAuthentication("ADMIN"), skillsDelAction);
router.post('/update/:skillID', auth.checkAuthentication("ADMIN"), skillsUpdateAction);


function skillsRootAction(request, response) {
  
    response.redirect("/toudoomapi/skills/list");
}
async function skillsListAction(request, response) {
    var skill = await skillsRepo.getAllskills();
    
    response.send(JSON.stringify(skill));
    console.log('[',request.ip,'] FETCHED all skills');
}
async function skillsShowAction(request, response) {

    var oneskill = await skillsRepo.getOneskills(request.params.skillID);

    response.send(JSON.stringify(oneskill));
    console.log('[',request.ip,'] FETCHED skill : ', request.params.skillID);
}


async function skillsDelAction(request, response) {
    var numRows = await skillsRepo.delOneskills(request.params.skillID);

    console.log('[',request.ip,'] DELETED skill : ', request.params.skillID);
    
}

async function skillsUpdateAction(request, response) {
    var skillID = request.params.skillID;
    if (skillID==="0"){
        skillID = await skillsRepo.addOneskills(request.body.skill);
        response.send(JSON.stringify.skillID)
        console.log('[',request.ip,'] ADDED skill : ', skillID);

    }else{
        var numRows = await skillsRepo.editOneskills(request.params.skillID, 
        request.body.skill);
        
        console.log('[',request.ip,'] EDITED skill : ', request.params.skillID);
    }
    
}

module.exports = router;