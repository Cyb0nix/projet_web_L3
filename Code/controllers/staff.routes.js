// controllers/Staff.route.js
const express = require('express');
const router = express.Router();
const StaffRepo = require('../utils/staff.repository');

router.get('/', StaffRootAction);
router.get('/list', StaffListAction);
router.get('/show/:staffId', StaffShowAction);
router.get('/del/:staffId', StaffDelAction);
router.get('/edit/:staffId', StaffEditAction);
router.post('/update/:staffId', StaffUpdateAction);


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

async function StaffShowAction(request, response) {
    // response.send("SHOW ACTION");
    var oneStaff = await StaffRepo.getOneStaff(request.params.staffId);

    response.send(oneStaff);
}
async function StaffEditAction(request, response) {
    // response.send("EDIT ACTION");
    var brands = await StaffRepo.getAllStaff();
    var staffId = request.params.staffId;
    if (staffId!== null)
        var Staff = await StaffRepo.getOneStaff(staffId);
    else
        var Staff = StaffRepo.getBlankStaff();

    response.send(Staff);
}
async function StaffDelAction(request, response) {
    var numRows = await StaffRepo.delOneStaff(request.params.staffId);
    request.session.flashMessage = "ROWS DELETED: "+numRows;
}
async function StaffUpdateAction(request, response) {
    // response.send("UPDATE ACTION");
    var staffId = request.params.staffId;
    if (staffId===null){
        staffId = await StaffRepo.addOneStaff(request.body.name, 
            request.body.discordId,  
            request.body.email, 
            request.body.phone,
            request.body.role,
            request.body.joinDate,
            request.body.isFormed,
            request.body.mdp,
            request.body.isAdmin);
        
        response.send(staffId);
    }else{
        var available = request.body.available === undefined ? 0 : 1; 
        var numRows = await StaffRepo.editOneStaff(request.body.name, 
            request.body.discordId,  
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
