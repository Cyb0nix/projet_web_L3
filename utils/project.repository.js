pool = require("../utils/db.js");

module.exports = {
    getBlankProject(){
        return{
            "Project_ID" : null,
            "type": null,
            "Is_Paid" : null,
            "starting_date" : null,
            "ending_date" : null,
            "Benefits" : null,
            "state" : null,
        }
    },

    async getAllProject(){
        try{
            let conn = await pool.getConnection();
            let sql = "SELECT * FROM Project";
            const rows = await conn.query(sql);
            conn.end();
            return rows;
        } catch (error) {
            console.log(error);
            throw error;
        }
    },

    async getOneEquipment(Project_ID){ 
        try {
            let conn = await pool.getConnection();
            let sql = "SELECT * FROM Project WHERE Project_ID = ?";
            const rows = await conn.query(sql, Project_ID);
            conn.end();
            console.log("ROWS FETCHED: "+rows.length);
            if (rows.length == 1) {
                return rows[0];
            } else {
                return false;
            }
        }
        catch (error) {
            console.log(error);
            throw error; 
        }
    },

    async delOneProject(Project_ID){ 
        try {
            let conn = await pool.getConnection();
            let sql = "DELETE FROM Project WHERE Project_ID = ?";
            const okPacket = await conn.query(sql, Project_ID); // affectedRows, insertId
            conn.end();
            console.log(okPacket);
            return okPacket.affectedRows;
        }
        catch (err) {
            console.log(err);
            throw err; 
        }
    },

    async addOneProject(){ 
        try {
            let conn = await pool.getConnection();
            let sql = "INSERT INTO Project (Project_ID) VALUES (NULL,?) ";
            const okPacket = await conn.query(sql); // affectedRows, insertId
            conn.end();
            console.log(okPacket);
            return okPacket.insertId;
        }
        catch (error) {
            console.log(error);
            throw error; 
        }
    },

    async editOneProject(Project_ID, type, starting_date, ending_date, Is_Paid, Benefits, state, Client){ 
        try {
            let conn = await pool.getConnection();
            let sql = "UPDATE Project SET=?, type=?, Client=?, WHERE Project_ID=? "; // TODO: d parameters? :something
            const okPacket = await conn.query(sql,
                [type, starting_date, ending_date, Is_Paid, Benefits, state, Client]);
            conn.end();
            console.log(okPacket);
            return okPacket.affectedRows;
        }
        catch (error) {
            console.log(error);
            throw error; 
        }
    }
}


