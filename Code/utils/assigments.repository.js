
pool = require("../utils/db.js");

module.exports = {
    getBlankClient(){
        return {
            "assigmentId":null,
            "projectId" : null,
            "staffId" : null
        }
    },

    async getAllProjectsOf(staffId){ 
        try {
            let conn = await pool.getConnection();
            let sql = "SELECT Type, starting_date,ending_date, state FROM assigments INNER JOIN project p on assigments.projectId = p.projectId WHERE staffId = ?";
            const [rows, fields] = await conn.execute(sql, [ staffId ]);
            conn.release();
            if (rows.length == 1) {
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

    async getAllStaffsOf(projectId){ 
        try {
            let conn = await pool.getConnection();
            let sql = "SELECT staffId,task,name,role FROM assigments INNER JOIN staff ON staffId = assignement.staffId WHERE projectId = ?";
            const [rows, fields] = await conn.execute(sql, [ projectId ]);
            conn.release();
            if (rows.length == 1) {
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
    
    async delOneAssignement(projectId, staffId){ 
        try {
            let conn = await pool.getConnection();
            let sql = "DELETE FROM assigments WHERE projectId = ? AND staffId = ?";
            const [okPacket, fields] = await conn.execute(sql, [ projectId, staffId]);  // affectedRows, insertId
            conn.release();
            console.log("DELETE "+JSON.stringify(okPacket));
            return okPacket.affectedRows;
        }
        catch (err) {
            console.log(err);
            throw err; 
        }
    },

    async addOneAssignement(projectId, staffId){ 
        try {
            let conn = await pool.getConnection();
            let sql = "INSERT INTO assigments (staffstaffId, projectId, staffId) VALUES (NULL, ?, ?)"; // TODO: named parameters? :something
            const [okPacket, fields] = await conn.execute(sql, 
                        [projectId, staffId]);
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