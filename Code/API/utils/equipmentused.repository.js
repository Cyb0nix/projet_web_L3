
pool = require("./db.js");

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
          
            let sql = "SELECT * FROM equipmentUsed INNER JOIN project p on equipmentUsed.projectID = p.projectID WHERE equipmentID = ?";
            const [rows, fields] = await conn.execute(sql, [ equipmentID ]);
            conn.release();
        
                return rows;
            
        }
        catch (err) {
            console.log(err);
            throw err; 
        }
    },

    async getAllEquipmentOf(projectID){ 
        try {
            let conn = await pool.getConnection();
            // sql = "SELECT * FROM cars INNER JOIN brands ON car_brand=brand_id WHERE car_id = "+carId; 
            // SQL INJECTION => !!!!ALWAYS!!!! sanitize user input!
            // escape input (not very good) OR prepared statements (good) OR use orm (GOOD!)
            let sql = "SELECT * FROM equipmentUsed INNER JOIN equipment ON equipment.equipmentID = equipmentUsed.equipmentID WHERE projectID = ?";
            const [rows, fields] = await conn.execute(sql, [ projectID ]);
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
    
    async delOneProjectEquipment(equipmentID,projectID){ 
        try {
            let conn = await pool.getConnection();
            let sql = "DELETE FROM equipmentUsed WHERE equipmentID = ? AND projectID = ?";
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

    async addOneProjectEquipment(equipmentID, projectID, startCondition, endCondition){ 
        try {
            let conn = await pool.getConnection();
            let sql = "INSERT INTO equipmentUsed (equipmentUsedID, equipmentID, projectID, startCondition, endCondition) VALUES (NULL, ?, ?, ?, ?)"; // TODO: named parameters? :something
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

    async editOneProjectEquipment(equipmentUsedID, equipmentID, projectID, startCondition, endCondition){ 
        try {
            let conn = await pool.getConnection();
            let sql = "UPDATE equipmentUsed SET equipmentID=?, projectID=?, startCondition=?, endCondition=?, WHERE equipment_ID=?"; // TODO: named parameters? :something
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