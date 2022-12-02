
const express = require("express");
const router = express.Router();
const skillsRepo = require("../utils/skills.repository")

router.get('/', skillsRootAction);
router.get('/list', skillsListAction);
router.get('/show/:Skill_ID', skillsShowAction);
router.get('/del/:Skill_ID', skillsDelAction);
router.get('/edit/:Skill_ID', skillsEditAction);
router.post('/update/:Skill_ID', skillsUpdateAction);


function skillsRootAction(request, response) {
    //response.send("ROOT ACTION");
    response.redirect("/skills/list");
}
async function skillsListAction(request, response) {
    // response.send("LIST ACTION");
    var skill = await skillsRepo.getAllSkills();
    // console.log(skills);
    var flashMessage = request.session.flashMessage; // express-flash ...
    request.session.flashMessage = "";
    
    response.send(skill);
}
async function skillsShowAction(request, response) {
    // response.send("SHOW ACTION");
    var oneskill = await skillsRepo.getOneSkills(request.params.Skill_ID);

    response.send(oneskill)
}
async function skillsEditAction(request, response) {
    // response.send("EDIT ACTION");
    var brands = await skillsRepo.getAllSkills();
    var Skill_ID = request.params.Skill_ID;
    if (Skill_ID!== null)
        var skill = await skillsRepo.getOneSkills(Skill_ID);
    else
        var skill = skillsRepo.getBlankSkills();

    response.send(skill);
}

async function skillsDelAction(request, response) {
    var numRows = await skillsRepo.delOneSkills(request.params.Skill_ID);
    request.session.flashMessage = "ROWS DELETED: "+numRows;
}

async function skillsUpdateAction(request, response) {
    var Skill_ID = request.params.Skill_ID;
    if (Skill_ID==="0"){
        Skill_ID = await skillsRepo.addOneSkills(request.body.Skill);
        response.send(Skill_ID)
    }else{
        var Skill = request.body.Skill === undefined ? 0 : 1;
        var numRows = await skillsRepo.editOneSkills(Skill_ID, 
            Skill);
    
        request.session.flashMessage = "ROWS UPDATED: "+numRows;
    }
    
}

module.exports = router;