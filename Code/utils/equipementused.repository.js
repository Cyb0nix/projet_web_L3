
pool = require("../utils/db.js");

module.exports = {
    getBlankClient(){
        return {
            "equipementUsedID":null,
            "equipementID" : null,
            "projectID" : null,
            "startCondition":null,
            "endCondition":null
        }
    },

    async getProjectsOf(equipementID){ 
        try {
            let conn = await pool.getConnection();
            // sql = "SELECT * FROM cars INNER JOIN brands ON car_brand=brand_id WHERE car_id = "+carId; 
            // SQL INJECTION => !!!!ALWAYS!!!! sanitize user input!
            // escape input (not very good) OR prepared statements (good) OR use orm (GOOD!)
            let sql = "SELECT * FROM equipementUsed WHERE equipementID = ?";
            const [rows, fields] = await conn.execute(sql, [ equipementID ]);
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

    async getAllEquipementOf(projectID){ 
        try {
            let conn = await pool.getConnection();
            // sql = "SELECT * FROM cars INNER JOIN brands ON car_brand=brand_id WHERE car_id = "+carId; 
            // SQL INJECTION => !!!!ALWAYS!!!! sanitize user input!
            // escape input (not very good) OR prepared statements (good) OR use orm (GOOD!)
            let sql = "SELECT * FROM equipementUsed WHERE projectID = ?";
            const [rows, fields] = await conn.execute(sql, [ projectID ]);
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
    
    async delOneProjectEquipment(equipementID,projectID){ 
        try {
            let conn = await pool.getConnection();
            let sql = "DELETE FROM equipementUsed WHERE equipementID = ? AND projectID = ?";
            const [okPacket, fields] = await conn.execute(sql, [ equipementID, projectID]);  // affectedRows, insertId
            conn.release();
            console.log("DELETE "+JSON.stringify(okPacket));
            return okPacket.affectedRows;
        }
        catch (err) {
            console.log(err);
            throw err; 
        }
    },

    async addOneProjectEquipement(equipementID, projectID, startCondition, endCondition){ 
        try {
            let conn = await pool.getConnection();
            let sql = "INSERT INTO equipementUsed (equipementUsedID, equipementID, projectID, startCondition, endCondition) VALUES (NULL, ?, ?, ?, ?)"; // TODO: named parameters? :something
            const [okPacket, fields] = await conn.execute(sql, 
                        [equipementID, projectID, startCondition, endCondition]);
            conn.release();
            console.log("INSERT "+JSON.stringify(okPacket));
            return okPacket.insertId;
        }
        catch (error) {
            console.log(error);
            throw error; 
        }
    },

    async editOneProjectEquipement(equipementUsedID, equipementID, projectID, startCondition, endCondition){ 
        try {
            let conn = await pool.getConnection();
            let sql = "UPDATE equipementUsed SET equipementID=?, projectID=?, startCondition=?, endCondition=?, WHERE equipement_ID=?"; // TODO: named parameters? :something
            const [okPacket, fields] = await conn.execute(sql, 
                        [equipementID, projectID, startCondition, endCondition, equipementUsedID]);
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