// controllers/Staff.route.js
const express = require('express');
const router = express.Router();
const StaffRepo = require('../utils/staff.repository');
const AssigmentRepo = require('../utils/assigments.repository')
const StaffSkillRepo =require('../utils/staffskills.repository')
const auth = require("../utils/users.auth");

router.get('/', auth.checkAuthentication("USER"), StaffRootAction);
router.get('/list', auth.checkAuthentication("USER"), StaffListAction);
router.get('/show/:staffID', auth.checkAuthentication("USER"), StaffShowAction);
router.get('/del/:staffID', StaffDelAction);
router.get('/edit/:staffID', auth.checkAuthentication("USER"), StaffEditAction);
router.post('/update/:staffID', auth.checkAuthentication("USER"), StaffUpdateAction);
router.get('/formed', auth.checkAuthentication("USER"), StaffFormed);
router.get('/projects/:staffID', auth.checkAuthentication("USER"), StaffProjects);
router.post('/addSkill/:staffID', auth.checkAuthentication("USER"), StaffAddSkill);
router.post('/delSkill/:staffID', auth.checkAuthentication("USER"), StaffDelSkill);
router.get('/getSkill/:staffID', auth.checkAuthentication("USER"), StaffGetSkill);



function StaffRootAction(request, response) {

    response.redirect("/toudoomapi/staff/list");
}
async function StaffListAction(request, response) {

    var Staff = await StaffRepo.getAllStaff();
    
    response.send(JSON.stringify(Staff));
    console.log('[',request.ip,'] FETCHED all Staff ');
}
async function StaffFormed(request, response) {

    var StaffFormed = await StaffRepo.getformed();
    
    response.send(JSON.stringify(StaffFormed));
    console.log('[',request.ip,'] FETCHED all formed Staff ');
}

async function StaffProjects(request, response) {
    // response.send("SHOW ACTION");
    var oneStaff = await AssigmentRepo.getAllProjectsOf(request.params.staffID);

    response.send(JSON.stringify(oneStaff));
    console.log('[',request.ip,'] FETCHED all projetcs of Staff :', request.params.staffID);
}

async function StaffAddSkill(request, response) {
    // response.send("SHOW ACTION");
    var assigmentID = await StaffSkillRepo.addOneStaffSkill(request.params.staffID,request.body.skillID);
    response.send(JSON.stringify(assigmentID));
    console.log('[',request.ip,'] ADDED skill to Staff :', request.params.staffID);

}

async function StaffDelSkill(request, response) {
    // response.send("SHOW ACTION");
    var assigmentID = await StaffSkillRepo.delOneStaffSkill(request.params.staffID,request.body.skillID);
    console.log('[',request.ip,'] DELETED skill to Staff :', request.params.staffID);
    response.send(JSON.stringify("del",assigmentID));

}

async function StaffGetSkill(request, response){

    var skills = await StaffSkillRepo.getOneStaffSkills(request.params.staffID);

    response.send(JSON.stringify(skills));
    console.log('[',request.ip,'] FETCHED skills of Staff :', request.params.staffID);
}

async function StaffShowAction(request, response) {
    // response.send("SHOW ACTION");
    var oneStaff = await StaffRepo.getOneStaff(request.params.staffID);

    response.send(JSON.stringify(oneStaff));
    console.log('[',request.ip,'] FETCHED Staff :', request.params.staffID);
}

async function StaffEditAction(request, response) {
    // response.send("EDIT ACTION");
    var brands = await StaffRepo.getAllStaff();
    var staffID = request.params.staffID;
    if (staffID!== null)
        var Staff = await StaffRepo.getOneStaff(staffID);
    else
        var Staff = StaffRepo.getBlankStaff();

    response.send(JSON.stringify(Staff));
}

async function StaffDelAction(request, response) {
    var numRows = await StaffRepo.delOneStaff(request.params.staffID);
    console.log('[',request.ip,'] DELETED Staff :', request.params.staffID);
    response.send(JSON.stringify("del",numRows));
}

async function StaffUpdateAction(request, response) {
    // response.send("UPDATE ACTION");
    var staffID = request.params.staffID;
    let isFormed;
    if (request.body.isFormed) {
        isFormed = 1;
    }else{
        isFormed = 0;
    }
     
    if (staffID==="0"){
        staffID = await StaffRepo.addOneStaff(request.body.name, 
            request.body.discordID,  
            request.body.email, 
            request.body.phone,
            request.body.role,
            request.body.joinDate,
            isFormed);
        
        response.send(JSON.stringify(staffID));
        console.log('[',request.ip,'] ADDED Staff :', staffID);
    }else{

        var numRows = await StaffRepo.editOneStaff(
            request.params.staffID,
            request.body.name, 
            request.body.discordID,  
            request.body.email, 
            request.body.phone,
            request.body.role,
            request.body.joinDate,
            isFormed);

        console.log('[',request.ip,'] EDITED Staff :', request.params.staffID);
    } 

    
}

module.exports = router;
