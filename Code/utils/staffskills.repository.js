
pool = require("../utils/db.js");

module.exports = {
    getBlankClient(){
        return {
            "staffskillID":null,
            "staffId" : null,
            "skillId" : null
        }
    },

    async getOneStaffSkills(memberId){ 
        try {
            let conn = await pool.getConnection();
            // sql = "SELECT * FROM cars INNER JOIN brands ON car_brand=brand_id WHERE car_id = "+carId; 
            // SQL INJECTION => !!!!ALWAYS!!!! sanitize user input!
            // escape input (not very good) OR prepared statements (good) OR use orm (GOOD!)
            let sql = "SELECT * FROM skills WHERE staffId = ?";
            const [rows, fields] = await conn.execute(sql, [ memberId ]);
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

    async getAllStaffWith(skillId){ 
        try {
            let conn = await pool.getConnection();
            // sql = "SELECT * FROM cars INNER JOIN brands ON car_brand=brand_id WHERE car_id = "+carId; 
            // SQL INJECTION => !!!!ALWAYS!!!! sanitize user input!
            // escape input (not very good) OR prepared statements (good) OR use orm (GOOD!)
            let sql = "SELECT * FROM skills WHERE skillId = ?";
            const [rows, fields] = await conn.execute(sql, [ skillId ]);
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
    
    async delOneStaffSkill(staffId,skillId){ 
        try {
            let conn = await pool.getConnection();
            let sql = "DELETE FROM staffskill WHERE staffId = ? AND skillId = ?";
            const [okPacket, fields] = await conn.execute(sql, [ staffId, skillId]);  // affectedRows, insertId
            conn.release();
            console.log("DELETE "+JSON.stringify(okPacket));
            return okPacket.affectedRows;
        }
        catch (err) {
            console.log(err);
            throw err; 
        }
    },

    async addOneStaffSkill(staffId, skillId){ 
        try {
            let conn = await pool.getConnection();
            let sql = "INSERT INTO staffskills (staffskillId, staffId, skillId) VALUES (NULL, ?, ?)"; // TODO: named parameters? :something
            const [okPacket, fields] = await conn.execute(sql, 
                        [staffId, skillId]);
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