// controllers/project.route.js
const express = require('express');
const router = express.Router();
const carRepo = require('../utils/project.repository');

router.get('/', projectRootAction);
router.get('/list', projectListAction);
router.get('/show/:Project_ID', projectShowAction);
router.get('/del/:Project_ID', projectDelAction);
router.get('/edit/:Project_ID', projectEditAction);
router.post('/update/:Project_ID', projectUpdateAction);


function projectRootAction(request, response) {
    //response.send("ROOT ACTION");
    response.redirect("/project/list");
}
async function projectListAction(request, response) {
    // response.send("LIST ACTION");
    var project = await projectRepo.getAllProject();
    // console.log(project);
    var flashMessage = request.session.flashMessage; // express-flash ...
    request.session.flashMessage = "";
    
    response.render("project_list", { "project": project, "flashMessage": flashMessage });
}
async function projectShowAction(request, response) {
    // response.send("SHOW ACTION");
    var oneproject = await projectRepo.getOneproject(request.params.Project_ID);
    response.render("project_show", { "oneProject": oneProject });
}
async function projectEditAction(request, response) {
    // response.send("EDIT ACTION");
    var brands = await projectRepo.getAllProject();
    var Project_ID = request.params.Project_ID;
    if (Project_ID!== null)
        var car = await projectRepo.getOneProject(Project_ID);
    else
        var project = projectRepo.getBlankProject();
    response.render("project_edit", { "oneproject": project, "type": type });
}
async function projectDelAction(request, response) {
    // response.send("DEL ACTION");
    // TODO: remove extras for car, unless the car cannot be removed!!!
    var numRows = await projectRepo.delOneProject(request.params.Project_ID);
    request.session.flashMessage = "ROWS DELETED: "+numRows;
    response.redirect("/project/list");
}
async function projectUpdateAction(request, response) {
    // response.send("UPDATE ACTION");
    var Project_ID = request.params.Project_ID;
    if (Project_ID==="0") Project_ID = await projectRepo.addOneProject(request.body.type);

    var Is_Paid = request.body.Is_Paid === undefined ? 0 : 1; 
    var numRows = await projectRepo.editOneProject(Project_ID, 
        request.body.type,  
        Is_Paid, 
        request.body.starting_date,
        request.body.ending_date,
        request.body.storage_place,
        request.body.Benefits,
        request.body.state);

    request.session.flashMessage = "ROWS UPDATED: "+numRows;
    response.redirect("/project/list");
}

module.exports = router;