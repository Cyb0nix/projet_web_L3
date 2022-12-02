// controllers/Staff.route.js
const express = require('express');
const router = express.Router();
const StaffRepo = require('../utils/staff.repository');
const AssigmentRepo = require('../utils/assigments.repository')
const StaffSkillRepo =require('../utils/staffskills.repository')

router.get('/', StaffRootAction);
router.get('/list', StaffListAction);
router.get('/show/:staffID', StaffShowAction);
router.get('/del/:staffID', StaffDelAction);
router.get('/edit/:staffID', StaffEditAction);
router.get('/formed',StaffFormed);
router.get('/projects/:staffID',StaffProjects);
router.post('/addProject/:staffID',StaffAddProject);
router.get('/delProject/:staffID',StaffDelProject);
router.post('/addSkill/:staffID',StaffAddSkill);
router.get('/delSkill/:staffID',StaffDelSkill);
router.post('/update/:staffID', StaffUpdateAction);


function StaffRootAction(request, response) {
    //response.send("ROOT ACTION");
    response.redirect("/staff/list");
}
async function StaffListAction(request, response) {
    // response.send("LIST ACTION");
    var Staff = await StaffRepo.getAllStaff();
    // console.log(Staff);
    var flashMessage = request.session.flashMessage; // express-flash ...
    request.session.flashMessage = "";
    
    response.send(Staff);
}
async function StaffFormed(request, response) {
    // response.send("LIST ACTION");
    var Staff = await StaffRepo.getformed();
    // console.log(Staff);
    var flashMessage = request.session.flashMessage; // express-flash ...
    request.session.flashMessage = "";
    
    response.send(Staff);
}

async function StaffProjects(request, response) {
    // response.send("SHOW ACTION");
    var oneStaff = await AssigmentRepo.getAllProjectsOf(request.params.staffID);

    response.send(oneStaff);
}

async function StaffAddProject(request, response) {
    // response.send("SHOW ACTION");
    var assigmentID = await AssigmentRepo.addOneAssignement(request.body.projectID,request.params.staffID);
    response.send(assigmentID);

}

async function StaffDelProject(request, response) {
    // response.send("SHOW ACTION");
    var assigmentID = await AssigmentRepo.delOneAssignement(request.body.projectID,request.params.staffID);
    response.send(assigmentID);

}
async function StaffAddSkill(request, response) {
    // response.send("SHOW ACTION");
    var assigmentID = await StaffSkillRepo.addOneStaffSkill(request.params.staffID,request.body.skillID);
    response.send(assigmentID);

}

async function StaffDelSkill(request, response) {
    // response.send("SHOW ACTION");
    var assigmentID = await StaffSkillRepo.delOneStaffSkill(request.params.staffID,request.body.skillID);

}

async function StaffShowAction(request, response) {
    // response.send("SHOW ACTION");
    var oneStaff = await StaffRepo.getOneStaff(request.params.staffID);

    response.send(oneStaff);
}
async function StaffEditAction(request, response) {
    // response.send("EDIT ACTION");
    var brands = await StaffRepo.getAllStaff();
    var staffID = request.params.staffID;
    if (staffID!== null)
        var Staff = await StaffRepo.getOneStaff(staffID);
    else
        var Staff = StaffRepo.getBlankStaff();

    response.send(Staff);
}
async function StaffDelAction(request, response) {
    var numRows = await StaffRepo.delOneStaff(request.params.staffID);
    request.session.flashMessage = "ROWS DELETED: "+numRows;
}
async function StaffUpdateAction(request, response) {
    // response.send("UPDATE ACTION");
    var staffID = request.params.staffID;
    if (staffID===null){
        staffID = await StaffRepo.addOneStaff(request.body.name, 
            request.body.discordID,  
            request.body.email, 
            request.body.phone,
            request.body.role,
            request.body.joinDate,
            request.body.isFormed,
            request.body.mdp,
            request.body.isAdmin);
        
        response.send(staffID);
    }else{
        var available = request.body.available === undefined ? 0 : 1; 
        var numRows = await StaffRepo.editOneStaff(request.body.name, 
            request.body.discordID,  
            request.body.email, 
            request.body.phone,
            request.body.role,
            request.body.joinDate,
            request.body.isFormed,
            request.body.mdp,
            request.body.isAdmin);

        request.session.flashMessage = "ROWS UPDATED: "+numRows;
    } 

    
}

module.exports = router;
