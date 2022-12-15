// controllers/project.route.js
const express = require('express');
const router = express.Router();
const projectRepo = require('../utils/project.repository');
const assignementRepo = require('../utils/assigments.repository');
const auth = require("../utils/users.auth");
const equipmentRepo = require('../utils/equipmentused.repository');

router.get('/', auth.checkAuthentication("USER"), projectRootAction);
router.get('/list', auth.checkAuthentication("USER"), projectListAction);
router.get('/show/:projectID', auth.checkAuthentication("USER"), projectShowAction);
router.get('/del/:projectID', auth.checkAuthentication("ADMIN"), projectDelAction);
router.get('/edit/:projectID', auth.checkAuthentication("USER"), projectEditAction);
router.post('/update/:projectID', auth.checkAuthentication("USER"), projectUpdateAction);
router.get('/staffList/:projectID', auth.checkAuthentication("USER"), projectStaffListAction);
router.post('/addStaff/:projectID', auth.checkAuthentication("USER"), projectAddStaffAction);
router.post('/delStaff/:projectID', auth.checkAuthentication("USER"), projectDelStaffAction);
router.get('/equipmentList/:projectID', auth.checkAuthentication("USER"),projectEquipmentListAction);
router.post('/addEquipment/:projectID', auth.checkAuthentication("USER"),projectAddEquipmentAction);
router.post('/delEquipment/:projectID', auth.checkAuthentication("USER"), projectDelEquipmentAction);



function projectRootAction(request, response) {
    response.redirect("/toudoomapi/project/list");
}

async function projectListAction(request, response) {

    var project = await projectRepo.getAllProject();
    
    response.send(JSON.stringify(project));
    console.log('[',request.ip,'] FETCHED All projects ');
}

async function projectStaffListAction(request, response){

    var staffList = await assignementRepo.getAllStaffsOf(request.params.projectID);

    response.send(JSON.stringify(staffList));
    console.log('[',request.ip,'] FETCHED all staff of : ', request.params.projectID);
}

async function projectAddStaffAction(request,response){
    var assigmentID = await assignementRepo.addOneAssignement(request.params.projectID, request.body.staffID,request.body.task);

    response.send(JSON.stringify(assigmentID));
    console.log('[',request.ip,'] ADDED staff to : ', request.params.projectID);
}

async function projectDelStaffAction(request,response){
    var numbRow = await assignementRepo.delOneAssignement(request.params.projectID, request.body.staffID);
    console.log('[',request.ip,'] DELETED staff from : ', request.params.projectID);
    response.send(JSON.stringify("del",numbRow));
}

async function projectShowAction(request, response) {

    var oneproject = await projectRepo.getOneProject(request.params.projectID);

    response.send(JSON.stringify(oneproject));

    console.log('[',request.ip,'] FETCHED project : ', request.params.projectID);
}

async function projectEquipmentListAction(request, response){

    var equipmentList = await equipmentRepo.getAllEquipmentOf(request.params.projectID);

    response.send(JSON.stringify(equipmentList));

    console.log('[',request.ip,'] FETCHED all equipment of project : ', request.params.projectID);
}

async function projectAddEquipmentAction(request, response){

    var equipmentUsedID = await equipmentRepo.addOneProjectEquipment(request.body.equipmentID,request.params.projectID,request.body.startCondition,request.body.endCondition);

    response.send(JSON.stringify(equipmentUsedID));

    console.log('[',request.ip,'] ADDED equipment to project : ', request.params.projectID);

}

async function projectDelEquipmentAction(request,response){

    var numRows = await equipmentRepo.delOneProjectEquipment(request.body.equipmentID,request.params.projectID);

    console.log('[',request.ip,'] DELETED equipment of project : ', request.params.projectID);
    response.send(JSON.stringify("del", numRows));

}

async function projectEditAction(request, response) {

    var projectID = request.params.projectID;
    if (projectID!== null)
        var project = await projectRepo.getOneProject(projectID);
    else
        var project = projectRepo.getBlankProject();

    response.send(JSON.stringify(project));
    console.log('[',request.ip,'] EDITED project : ', request.params.projectID);
}

async function projectDelAction(request, response) {
    var numRows = await projectRepo.delOneProject(request.params.projectID);
    console.log('[',request.ip,'] DELETED project : ', request.params.projectID);
    response.send(JSON.stringify("Deleted"));
}

async function projectUpdateAction(request, response) {
    var projectID = request.params.projectID;
    console.log(request.body);
    console.log(request.params.projectID)
    if (projectID==="0"){
        projectID = await projectRepo.addOneProject(
            request.body.projectName,
            request.body.type, 
            request.body.startingDate,
            request.body.endingDate,
            request.body.isPaid, 
            request.body.benefits,
            request.body.state,
            request.body.client);
        response.send(JSON.stringify(projectID));
        console.log('[',request.ip,'] ADDED project : ', projectID);
    }else{
        var numRows = await projectRepo.editOneProject(projectID,
            request.body.projectName,
            request.body.type,  
            request.body.startingDate,
            request.body.endingDate,
            request.body.isPaid,
            request.body.benefits,
            request.body.state,
            request.body.client);
    
        console.log('[',request.ip,'] EDITED project : ', request.params.projectID);
        response.send(JSON.stringify(numRows));
    }
    
};

module.exports = router;