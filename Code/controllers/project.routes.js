// controllers/project.route.js
const express = require('express');
const router = express.Router();
const projectRepo = require('../utils/project.repository');

router.get('/', projectRootAction);
router.get('/list', projectListAction);
router.get('/show/:ProjectID', projectShowAction);
router.get('/del/:ProjectID', projectDelAction);
router.get('/edit/:ProjectID', projectEditAction);
router.post('/update/:ProjectID', projectUpdateAction);


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
    
    response.send(project);
}
async function projectShowAction(request, response) {
    // response.send("SHOW ACTION");
    var oneproject = await projectRepo.getOneProject(request.params.ProjectID);

    response.send(oneproject)
}
async function projectEditAction(request, response) {
    // response.send("EDIT ACTION");
    var brands = await projectRepo.getAllProject();
    var ProjectID = request.params.ProjectID;
    if (ProjectID!== null)
        var project = await projectRepo.getOneProject(ProjectID);
    else
        var project = projectRepo.getBlankProject();

    response.send(project);
}

async function projectDelAction(request, response) {
    var numRows = await projectRepo.delOneProject(request.params.ProjectID);
    request.session.flashMessage = "ROWS DELETED: "+numRows;
}

async function projectUpdateAction(request, response) {
    var ProjectID = request.params.ProjectID;
    if (ProjectID==="0"){
        ProjectID = await projectRepo.addOneProject(request.body.type, 
            request.body.isPaid, 
            request.body.startingDate,
            request.body.endingDate,
            request.body.storagePlace,
            request.body.benefits,
            request.body.state);
        response.send(ProjectID)
    }else{
        var isPaid = request.body.isPaid === undefined ? 0 : 1;
        var numRows = await projectRepo.editOneProject(ProjectID, 
            request.body.type,  
            isPaid, 
            request.body.startingDate,
            request.body.endingDate,
            request.body.storagePlace,
            request.body.benefits,
            request.body.state);
    
        request.session.flashMessage = "ROWS UPDATED: "+numRows;
    }
    
}

module.exports = router;