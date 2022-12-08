pool = require("../utils/db.js");

module.exports = {
    getBlankSkills(){
        return {
            "skillID" : null,
            "skill" : null,
        }
    },

    async getAllSkills(){
        try {
            let conn = await pool.getConnection();
            let sql = "SELECT * FROM skills";
            const [rows, fields] = await conn.execute(sql);
            conn.release();
            return rows;
        }
        catch (err) {
            console.log(err);
            throw err; 
        }
    },

    async getOneSkills(skillID){ 
        try {
            let conn = await pool.getConnection();
            let sql = "SELECT * FROM skills WHERE skillID = ?";
            const [rows, fields] = await conn.execute(sql, [ skillID ]);
            conn.release();
            console.log("SKILLS FETCHED: "+rows.length);
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

    async delOneSkills(skillID){ 
        try {
            let conn = await pool.getConnection();
            let sql = "DELETE FROM skills WHERE skillID = ?";
            const [okPacket, fields] = await conn.execute(sql, [ skillID ]);  
            conn.release();
            console.log("DELETE "+JSON.stringify(okPacket));
            return okPacket.affectedRows;
        }
        catch (err) {
            console.log(err);
            throw err; 
        }
    },

    async addOneSkill(skill){ 
        try {
            let conn = await pool.getConnection();
            let sql = "INSERT INTO client (clientId, skill) VALUES (NULL, ?) " ;
            const [okPacket, fields] = await conn.execute(sql, 
                        [skill]);
            conn.release();
            console.log("INSERT "+JSON.stringify(okPacket));
            return okPacket.insertId;
        }
        catch (error) {
            console.log(error);
            throw error; 
        }
    },
}

