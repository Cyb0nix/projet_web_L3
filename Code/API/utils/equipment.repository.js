pool = require("../utils/db.js");

module.exports = {
    getBlankEquipment(){ 
        return {
            "equipmentID": null,
            "type": null,
            "name": null,
            "condition": null,
            "available": null,
            "purchaseDate": null,
            "storagePlace" : null,
            "rentingRate" : null,
            "bailRate" : null,
        };
    },

    async getAllEquipment(){ 
        try {
            let conn = await pool.getConnection();
            let sql = "SELECT * FROM equipment";
            const [rows, fields] = await conn.execute(sql);
            conn.release();
            console.log("Equipment FETCHED: "+rows.length);
            return rows;
        }
        catch (err) {
            console.log(err);
            throw err; 
        }
    },
    
    async getOneEquipment(equipmentID){ 
        try {
            let conn = await pool.getConnection();
            
            let sql = "SELECT * FROM equipment";
            const [rows, fields] = await conn.execute(sql, [ equipmentID ]);
            conn.release();
            console.log("Equipment FETCHED: "+rows.length);
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

    async delOneEquipment(equipmentID){ 
        try {
            let conn = await pool.getConnection();
            let sql = "DELETE FROM equipment WHERE equipmentID = ?";
            const [okPacket, fields] = await conn.execute(sql, [ equipmentID ]);
            conn.release();
            console.log("DELETE "+JSON.stringify(okPacket));
            return okPacket.affectedRows;
        }
        catch (err) {
            console.log(err);
            throw err; 
        }
    },

    async addOneEquipment(name, type, condition, available, purchaseDate, storagePlace, rentingRate, bailRate){ 
        try {
            let conn = await pool.getConnection();
            let sql = "INSERT INTO equipment (equipmentID, name, type, condition, available, purchaseDate, storagePlace, rentingRate, bailRate) VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, ?)";
            const [okPacket, fields] = await conn.execute(sql, 
                        [name, type, condition, available, purchaseDate, storagePlace, rentingRate, bailRate]);
            conn.release();
            console.log("INSERT "+JSON.stringify(okPacket));
            return okPacket.insertId;
        }
        catch (err) {
            console.log(err);
            throw err; 
        }
    },

    async editOneEquipment(equipmentID, name, type, condition, available, purchaseDate, storagePlace, rentingRate, bailRate){ 
        try {
            let conn = await pool.getConnection();
            let sql = "UPDATE equipment SET name=?, type=?, condition=?, available=?, purchaseDate=?, storagePlace=?, rentingRate=?, bailRate=?, WHERE equipmentID=?"; // TODO: named parameters? :something
            const [okPacket, fields] = await conn.execute(sql, 
                        [name, type, condition, available, purchaseDate, storagePlace, rentingRate, bailRate, equipmentID]);
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


  
