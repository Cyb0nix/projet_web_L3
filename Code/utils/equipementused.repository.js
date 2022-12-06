
pool = require("../utils/db.js");

module.exports = {
    getBlankClient(){
        return {
            "equipmentUsedID":null,
            "equipmentID" : null,
            "projectID" : null,
            "startCondition":null,
            "endCondition":null
        }
    },

    async getProjectsOf(equipmentID){ 
        try {
            let conn = await pool.getConnection();
            // sql = "SELECT * FROM cars INNER JOIN brands ON car_brand=brand_id WHERE car_id = "+carId; 
            // SQL INJECTION => !!!!ALWAYS!!!! sanitize user input!
            // escape input (not very good) OR prepared statements (good) OR use orm (GOOD!)
            let sql = "SELECT name, type, startingDate,endingDate, state FROM equipementUsed INNER JOIN project p on equipementUsed.projectID = p.projectID WHERE equipmentID = ?";
            const [rows, fields] = await conn.execute(sql, [ equipmentID ]);
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
            let sql = "SELECT * FROM assigments INNER JOIN staff ON equipmentID = equipmentUsed.equipmentID WHERE projectID = ?";
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
    
    async delOneProjectEquipment(equipmentID,projectID){ 
        try {
            let conn = await pool.getConnection();
            let sql = "DELETE FROM equipementUsed WHERE equipmentID = ? AND projectID = ?";
            const [okPacket, fields] = await conn.execute(sql, [ equipmentID, projectID]);  // affectedRows, insertId
            conn.release();
            console.log("DELETE "+JSON.stringify(okPacket));
            return okPacket.affectedRows;
        }
        catch (err) {
            console.log(err);
            throw err; 
        }
    },

    async addOneProjectEquipement(equipmentID, projectID, startCondition, endCondition){ 
        try {
            let conn = await pool.getConnection();
            let sql = "INSERT INTO equipementUsed (equipmentUsedID, equipmentID, projectID, startCondition, endCondition) VALUES (NULL, ?, ?, ?, ?)"; // TODO: named parameters? :something
            const [okPacket, fields] = await conn.execute(sql, 
                        [equipmentID, projectID, startCondition, endCondition]);
            conn.release();
            console.log("INSERT "+JSON.stringify(okPacket));
            return okPacket.insertId;
        }
        catch (error) {
            console.log(error);
            throw error; 
        }
    },

    async editOneProjectEquipement(equipmentUsedID, equipmentID, projectID, startCondition, endCondition){ 
        try {
            let conn = await pool.getConnection();
            let sql = "UPDATE equipementUsed SET equipmentID=?, projectID=?, startCondition=?, endCondition=?, WHERE equipement_ID=?"; // TODO: named parameters? :something
            const [okPacket, fields] = await conn.execute(sql, 
                        [equipmentID, projectID, startCondition, endCondition, equipmentUsedID]);
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