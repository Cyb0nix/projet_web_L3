pool = require("../utils/db.js");

module.exports = {
    getBlankProject(){
        return{
            "Project_ID" : "null",
            "type": "null",
            "Is_Paid" : "null",
            "starting_date" : "00/00/0000",
            "ending_date" : "00/00/0000",
            "Benefits" : 0,
            "state" : "null",
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
    async getOneProject(Project_ID){ 
        try {
            let conn = await pool.getConnection();
            
            let sql = "SELECT * FROM project";
            const [rows, fields] = await conn.execute(sql, [ Project_ID ]);
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

    async delOneProject(Project_ID){ 
        try {
            let conn = await pool.getConnection();
            let sql = "DELETE FROM project WHERE Project_ID = ?";
            const [okPacket, fields] = await conn.execute(sql, [ Project_ID ]);
            conn.release();
            console.log("DELETE "+JSON.stringify(okPacket));
            return okPacket.affectedRows;
        }
        catch (err) {
            console.log(err);
            throw err; 
        }
    },
 
    async addOneProject(Project_ID){ 
        try {
            let conn = await pool.getConnection();
            let sql = "INSERT INTO project (Project_ID) VALUES (NULL, ?) ";
            const [okPacket, fields] = await conn.execute(sql, [Project_ID]); // affectedRows, insertId
            conn.release();
            console.log("INSERT "+JSON.stringify(okPacket));
            return okPacket.insertId;
        }
        catch (err) {
            console.log(err);
            throw err; 
        }
    },
    
    async editOneProject(Project_ID, type, startin_date, ending_date, Is_Paid, Benefits, state, Client){ 
        try {
            let conn = await pool.getConnection();
            let sql = "UPDATE project SET type=?, starting_date=?, ending_date=?, Is_Paid=?, Benefits=?, state=?, Client=? WHERE Project_ID=? "; // TODO: named parameters? :something
            const [okPacket, fields] = await conn.execute(sql, 
                        [type, startin_date, ending_date, Is_Paid, Benefits, state, Client, Project_ID]);
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

