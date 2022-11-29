
pool = require("../utils/db.js");

module.exports = {
    getBlankClient(){
        return {
            "equipementUsedId":null,
            "equipementId" : null,
            "projectId" : null,
            "startCondition":null,
            "endCondition":null
        }
    },

    async getProjectsOf(equipementId){ 
        try {
            let conn = await pool.getConnection();
            // sql = "SELECT * FROM cars INNER JOIN brands ON car_brand=brand_id WHERE car_id = "+carId; 
            // SQL INJECTION => !!!!ALWAYS!!!! sanitize user input!
            // escape input (not very good) OR prepared statements (good) OR use orm (GOOD!)
            let sql = "SELECT * FROM equipementused WHERE equipementId = ?";
            const [rows, fields] = await conn.execute(sql, [ equipementId ]);
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

    async getAllEquipementOf(projectId){ 
        try {
            let conn = await pool.getConnection();
            // sql = "SELECT * FROM cars INNER JOIN brands ON car_brand=brand_id WHERE car_id = "+carId; 
            // SQL INJECTION => !!!!ALWAYS!!!! sanitize user input!
            // escape input (not very good) OR prepared statements (good) OR use orm (GOOD!)
            let sql = "SELECT * FROM equipementused WHERE projectId = ?";
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
    
    async delOneProjectEquipment(equipementId,projectId){ 
        try {
            let conn = await pool.getConnection();
            let sql = "DELETE FROM equipementused WHERE equipementId = ? AND projectId = ?";
            const [okPacket, fields] = await conn.execute(sql, [ equipementId, projectId]);  // affectedRows, insertId
            conn.release();
            console.log("DELETE "+JSON.stringify(okPacket));
            return okPacket.affectedRows;
        }
        catch (err) {
            console.log(err);
            throw err; 
        }
    },

    async addOneProjectEquipement(equipementId, projectId, startCondition, endCondition){ 
        try {
            let conn = await pool.getConnection();
            let sql = "INSERT INTO equipementused (equipementusedId, equipementId, projectId, startCondition, endCondition) VALUES (NULL, ?, ?, ?, ?)"; // TODO: named parameters? :something
            const [okPacket, fields] = await conn.execute(sql, 
                        [equipementId, projectId, startCondition, endCondition]);
            conn.release();
            console.log("INSERT "+JSON.stringify(okPacket));
            return okPacket.insertId;
        }
        catch (error) {
            console.log(error);
            throw error; 
        }
    },

    async editOneProjectEquipement(equipementusedId, equipementId, projectId, startCondition, endCondition){ 
        try {
            let conn = await pool.getConnection();
            let sql = "UPDATE equipementused SET equipementId=?, projectId=?, startCondition=?, endCondition=?, WHERE equipement_ID=?"; // TODO: named parameters? :something
            const [okPacket, fields] = await conn.execute(sql, 
                        [equipementId, projectId, startCondition, endCondition, equipementusedId]);
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