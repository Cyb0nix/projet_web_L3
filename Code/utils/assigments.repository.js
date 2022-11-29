
pool = require("../utils/db.js");

module.exports = {
    getBlankClient(){
        return {
            "assigmentId":null,
            "projectId" : null,
            "staffId" : null
        }
    },

    async getOneassigment(projectId){ 
        try {
            let conn = await pool.getConnection();
            let sql = "SELECT * FROM assigments WHERE projectId = ?";
            const [rows, fields] = await conn.execute(sql, [ projectId ]);
            conn.release();
            if (rows.length == 1) {
                return rows[0];
            } else {
                return false;
            }
        }
        catch (err) {
            console.log(err);
            throw err; 
        }
    },

    async getAllStaffsof(staffId){ 
        try {
            let conn = await pool.getConnection();
            let sql = "SELECT * FROM assigments WHERE staffId = ?";
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

    async getAllProjectsof(projectId){ 
        try {
            let conn = await pool.getConnection();
            let sql = "SELECT * FROM assigments WHERE projectId = ?";
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