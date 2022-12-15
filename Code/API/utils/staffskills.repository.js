
pool = require("../utils/db.js");

module.exports = {
    getBlankClient(){
        return {
            "staffSkillID":null,
            "staffID" : null,
            "skillID" : null
        }
    },

    async getOneStaffSkills(staffID){ 
        try {
            let conn = await pool.getConnection();
            // sql = "SELECT * FROM cars INNER JOIN brands ON car_brand=brand_id WHERE car_id = "+carId; 
            // SQL INJECTION => !!!!ALWAYS!!!! sanitize user input!
            // escape input (not very good) OR prepared statements (good) OR use orm (GOOD!)
            let sql = "SELECT * FROM staffSkills INNER JOIN skills on staffSkills.skillID = skills.skillID WHERE staffSkills.staffID = ?";
            const [rows, fields] = await conn.execute(sql, [ staffID ]);
            conn.release();
                return rows;
        }
        catch (err) {
            console.log(err);
            throw err; 
        }
    },

    async getAllStaffWith(skillID){ 
        try {
            let conn = await pool.getConnection();
            // sql = "SELECT * FROM cars INNER JOIN brands ON car_brand=brand_id WHERE car_id = "+carId; 
            // SQL INJECTION => !!!!ALWAYS!!!! sanitize user input!
            // escape input (not very good) OR prepared statements (good) OR use orm (GOOD!)
            let sql = "SELECT staffID,name,role FROM staffSkills INNER JOIN staff ON staff.staffID = staffSkills.staffID WHERE skillID = ?";
            const [rows, fields] = await conn.execute(sql, [ skillID ]);
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
    
    async delOneStaffSkill(staffID,skillID){ 
        try {
            let conn = await pool.getConnection();
            let sql = "DELETE FROM staffSkills WHERE staffID = ? AND skillID = ?";
            const [okPacket, fields] = await conn.execute(sql, [ staffID, skillID]);  // affectedRows, insertId
            conn.release();
            console.log("DELETE "+JSON.stringify(okPacket));
            return okPacket.affectedRows;
        }
        catch (err) {
            console.log(err);
            throw err; 
        }
    },

    async addOneStaffSkill(staffID, skillID){ 
        try {
            let conn = await pool.getConnection();
            let sql = "INSERT INTO staffSkills (staffSkillsID, staffID, skillID) VALUES (NULL, ?, ?)"; // TODO: named parameters? :something
            const [okPacket, fields] = await conn.execute(sql, 
                        [staffID, skillID]);
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