
const express = require("express");
const router = express.Router();
const skillsRepo = require("../utils/skills.repository")

router.get("/", skillsRootAction);
router.get("/list", skillsListAction);
router.get('/show/:Project_ID', skillsShowAction);
router.get('/del/:Project_ID', skillsDelAction);
router.get('/edit/:Project_ID', skillsEditAction);
router.post('/update/:Project_ID', skillsUpdateAction);


function skillsRootAction(request, response) {
    response.redirect("/skills/list");
}

async function skillsListAction(request, response) {
    var skills = await skillsRepo.getAllSkills();
    var flashMessage = request.session.flashMessage; 
    request.session.flashMessage = "";
    
    response.render("skills_list", { "skills": skills, "flashMessage": flashMessage });
}

async function skillsShowAction(request, response) {
    var oneSkill = await skillRepo.getOneSkills(request.params.skillId);
    response.render("skills_show", { "oneSkill": oneSkill });
}
async function skillsEditAction(request, response) {
    var brands = await skillRepo.getAllBrands();
    var skillId = request.params.skillId;
    if (skillId!=="0")
        var skill = await skillRepo.getOneSkills(skillId);
    else
        var skill = skillRepo.getBlankSkills();
    response.render("skills_edit", { "oneskill": skill, "brands": brands });
}
async function skillsDelAction(request, response) {
    var numRows = await skillRepo.delOneSkills(request.params.skillId);
    request.session.flashMessage = "ROWS DELETED: "+numRows;
    response.redirect("/skills/list");
}
async function skillsUpdateAction(request, response) {
    var skillId = request.params.skillId;
    if (skillId==="0") skillId = await skillRepo.addOneSkills(request.body.skill_brand);

    var numRows = await skillRepo.editOneSkills(skillId, 
        request.body.skill);

    request.session.flashMessage = "ROWS UPDATED: "+numRows;
    response.redirect("/skills/list");
}

module.exports = router;





