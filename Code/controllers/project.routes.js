// controllers/project.route.js
const express = require('express');
const router = express.Router();
const projectRepo = require('../utils/project.repository');
const assignementRepo = require('../utils/assigments.repository');
const equipementRepo = require('../utils/equipementused.repository');

router.get('/', projectRootAction);
router.get('/list', projectListAction);
router.get('/show/:ProjectID', projectShowAction);
router.get('/del/:ProjectID', projectDelAction);
router.get('/edit/:ProjectID', projectEditAction);
router.post('/update/:ProjectID', projectUpdateAction);
router.get('/staffList/:ProjectID',projectStaffListAction);
router.post('/addStaff/:ProjectID',projectAddStaffAction);
router.get('/delStaff/:ProjectID', projectDelStaffAction);
router.get('/equipmentList/:ProjectID',projectEquipmentListAction);
router.post('/addEquipment/:ProjectID',projectAddEquipmentAction);
router.get('/delEquipment/:ProjectID',projectDelEquipmentAction);



function projectRootAction(request, response) {
    response.redirect("/project/list");
}

async function projectListAction(request, response) {
    // response.send("LIST ACTION");
    var project = await projectRepo.getAllProject();
    
    response.send(JSON.stringify(project));
}

async function projectStaffListAction(request, response){

    var staffList = await assignementRepo.getAllStaffsOf(request.params.ProjectID);

    response.send(JSON.stringify(staffList));
}

async function projectAddStaffAction(request,response){
    var assigmentID = await assignementRepo.addOneAssignement(request.params.ProjectID, request.body.staffID);

    response.send(JSON.stringify(assigmentID));
}

async function projectDelStaffAction(request,response){
    var numbRow = await assignementRepo.delOneAssignement(request.params.projectID, request.body.staffID);
    console.log("Assigment Deleted : ",numbRow);
}

async function projectShowAction(request, response) {
    // response.send("SHOW ACTION");
    var oneproject = await projectRepo.getOneProject(request.params.ProjectID);

    response.send(JSON.stringify(oneproject));
}

async function projectEquipmentListAction(request, response){

    var equipementList = await equipementRepo.getAllEquipementOf(request.params.ProjectID);

    response.send(JSON.stringify(equipementList));
}

async function projectAddEquipmentAction(request, response){

    var equipementUsedID = await equipementRepo.addOneProjectEquipement(request.body.equipementID,request.params.ProjectID);

    response.send(JSON.stringify(equipementUsedID));

    console.log(request.body.equipementID, "added to ",request.params.ProjectID);

}

async function projectDelEquipmentAction(request,response){

    var numRows = await equipementRepo.delOneProjectEquipment(request.body.equipementID,request.params.ProjectID);

    console.log(request.body.equipementID, "removed from" ,request.params.ProjectID)

}

async function projectEditAction(request, response) {
    // response.send("EDIT ACTION");
    var ProjectID = request.params.ProjectID;
    if (ProjectID!== null)
        var project = await projectRepo.getOneProject(ProjectID);
    else
        var project = projectRepo.getBlankProject();

    response.send(JSON.stringify(project));
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
            request.body.state,
            request.body.clientID);
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
            request.body.state,
            request.body.clientID);
    
        request.session.flashMessage = "ROWS UPDATED: "+numRows;
    }
    
}

module.exports = router;