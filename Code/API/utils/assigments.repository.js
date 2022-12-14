
pool = require("../utils/db.js");

module.exports = {
    getBlankClient(){
        return {
            "assigmentID":null,
            "projectID" : null,
            "staffID" : null
        }
    },

    async getAllProjectsOf(staffID){ 
        try {
            let conn = await pool.getConnection();
            let sql = "SELECT Type, starting_date,ending_date, state FROM assigments INNER JOIN project p on assigments.projectID = p.projectID WHERE staffID = ?";
            const [rows, fields] = await conn.execute(sql, [ staffID ]);
            conn.release();
            if (rows.length != 0) {
                return rows;
            } else {
                return false;
            }
        }
        catch (err) {
            console.log(err);
            throw err; 
        }
    },

    async getAllStaffsOf(projectID){ 
        try {
            let conn = await pool.getConnection();
            let sql = "SELECT staff.staffID,task,name,role FROM assigments INNER JOIN staff ON staff.staffID = assigments.staffID WHERE projectID = ?";
            const [rows, fields] = await conn.execute(sql, [ projectID ]);
            conn.release();
            if (rows.length != 0) {
                return rows;
            } else {
                return false;
            }
        }
        catch (err) {
            console.log(err);
            throw err; 
        }
    },
    
    async delOneAssignement(projectID, staffID){ 
        try {
            let conn = await pool.getConnection();
            let sql = "DELETE FROM assigments WHERE projectID = ? AND staffID = ?";
            const [okPacket, fields] = await conn.execute(sql, [ projectID, staffID]);  // affectedRows, insertId
            conn.release();
            console.log("DELETE "+JSON.stringify(okPacket));
            return okPacket.affectedRows;
        }
        catch (err) {
            console.log(err);
            throw err; 
        }
    },

    async addOneAssignement(projectID, staffID,task){ 
        try {
            let conn = await pool.getConnection();
            let sql = "INSERT INTO assigments (assignmentID, projectID, staffID,task) VALUES (NULL, ?, ?, ?)"; // TODO: named parameters? :something
            const [okPacket, fields] = await conn.execute(sql, 
                        [projectID, staffID,task]);
            conn.release();
            console.log("INSERT "+JSON.stringify(okPacket));
            return okPacket.insertId;
        }
        catch (error) {
            console.log(error);
            throw error; 
        }
    }
    
};