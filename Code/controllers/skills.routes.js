
const express = require("express");
const router = express.Router();
const skillsRepo = require("../utils/skills.repository")

router.get('/', skillsRootAction);
router.get('/list', skillsListAction);
router.get('/show/:skillID', skillsShowAction);
router.get('/del/:skillID', skillsDelAction);
router.get('/edit/:skillID', skillsEditAction);
router.post('/update/:skillID', skillsUpdateAction);


function skillsRootAction(request, response) {
    //response.send("ROOT ACTION");
    response.redirect("/skills/list");
}
async function skillsListAction(request, response) {
    // response.send("LIST ACTION");
    var skill = await skillsRepo.getAllskills();
    // console.log(skills);
    var flashMessage = request.session.flashMessage; // express-flash ...
    request.session.flashMessage = "";
    
    response.send(skill);
}
async function skillsShowAction(request, response) {
    // response.send("SHOW ACTION");
    var oneskill = await skillsRepo.getOneskills(request.params.skillID);

    response.send(oneskill)
}
async function skillsEditAction(request, response) {
    // response.send("EDIT ACTION");
    var brands = await skillsRepo.getAllskills();
    var skillID = request.params.skillID;
    if (skillID!== null)
        var skill = await skillsRepo.getOneskills(skillID);
    else
        var skill = skillsRepo.getBlankskills();

    response.send(skill);
}

async function skillsDelAction(request, response) {
    var numRows = await skillsRepo.delOneskills(request.params.skillID);
    request.session.flashMessage = "ROWS DELETED: "+numRows;
}

async function skillsUpdateAction(request, response) {
    var skillID = request.params.skillID;
    if (skillID==="0"){
        skillID = await skillsRepo.addOneskills(request.body.skill);
        response.send(skillID)
    }else{
        // var skill = request.body.skill === undefined ? 0 : 1;
        // var numRows = await skillsRepo.editOneskills(skillID, 
        //     skill);
    
        // request.session.flashMessage = "ROWS UPDATED: "+numRows;
    }
    
}

module.exports = router;