pool = require("../utils/db.js");

module.exports = {
    getBlankSkills(){
        return {
            "skillId" : null,
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

    async getOneSkills(skillId){ 
        try {
            let conn = await pool.getConnection();
            let sql = "SELECT * FROM skills WHERE skillId = ?";
            const [rows, fields] = await conn.execute(sql, [ skillId ]);
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

    async delOneSkills(skillId){ 
        try {
            let conn = await pool.getConnection();
            let sql = "DELETE FROM skills WHERE skillId = ?";
            const [okPacket, fields] = await conn.execute(sql, [ skillId ]);  
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

