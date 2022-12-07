
const express = require("express");
const router = express.Router();
const skillsRepo = require("../utils/skills.repository")

router.get('/', skillsRootAction);
router.get('/list', skillsListAction);
router.get('/show/:skillID', skillsShowAction);
router.get('/del/:skillID', skillsDelAction);
router.post('/update/:skillID', skillsUpdateAction);


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