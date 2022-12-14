pool = require("../utils/db.js");

module.exports = {
    getBlankProject(){
        return{
            "ProjectID" : null,
            "projectName" : null,
            "type": null,
            "IsPaid" : null,
            "startingDate" : null,
            "endingDate" : null,
            "benefits" : null,
            "state" : null,
            "clientID" : null
        }
    },
    async getAllProject(){ 
        try {
            let conn = await pool.getConnection();
            let sql = "SELECT * FROM project";
            const [rows, fields] = await conn.execute(sql);
            conn.release();
            console.log("Project FETCHED: "+rows.length);
            return rows;
        }
        catch (err) {
            console.log(err);
            throw err; 
        }
    },
    async getOneProject(ProjectID){ 
        try {
            let conn = await pool.getConnection();
            
            let sql = "SELECT * FROM project";
            const [rows, fields] = await conn.execute(sql, [ ProjectID ]);
            conn.release();
            console.log("Project FETCHED: "+rows.length);
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

    async delOneProject(ProjectID){ 
        try {
            let conn = await pool.getConnection();
            let sql = "DELETE FROM project WHERE ProjectID = ?";
            const [okPacket, fields] = await conn.execute(sql, [ ProjectID ]);
            conn.release();
            console.log("DELETE "+JSON.stringify(okPacket));
            return okPacket.affectedRows;
        }
        catch (err) {
            console.log(err);
            throw err; 
        }
    },
 
    async addOneProject(projectName, type, startingDate, endingDate, isPaid, benefits, state, client){ 
        try {
            let conn = await pool.getConnection();
            let sql = "INSERT INTO project (projectID, projectName, type, startingDate, endingDate, isPaid, benefits, state, client) VALUES (NULL,?, ?, ?, ?, ?, ?, ?, ?) ";
            const [okPacket, fields] = await conn.execute(sql, 
                [projectName, type, startingDate, endingDate, isPaid, benefits, state, client]);
            conn.release();
            console.log("INSERT "+JSON.stringify(okPacket));
            return okPacket.insertId;
        }
        catch (err) {
            console.log(err);
            throw err; 
        }
    },
    
    async editOneProject(ProjectID, projectName, type, startin_date, endingDate, IsPaid, benefits, state, ClientID){ 
        try {
            let conn = await pool.getConnection();
            let sql = "UPDATE project SET projectName=?, type=?, startingDate=?, endingDate=?, IsPaid=?, benefits=?, state=?, Client=? WHERE ProjectID=?";
            const [okPacket, fields] = await conn.execute(sql, 
                        [projectName, type, startin_date, endingDate, IsPaid, benefits, state, ClientID, ProjectID]);
            conn.release();
            console.log("UPDATE "+JSON.stringify(okPacket));
            return okPacket.affectedRows;
        }
        catch (err) {
            console.log(err);
            throw err; 
        }
    }
};





