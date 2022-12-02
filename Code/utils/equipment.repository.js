pool = require("../utils/db.js");

module.exports = {
    getBlankEquipment(){ 
        return {
            "equipementID": null,
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

    async getAllEquipement(){ 
        try {
            let conn = await pool.getConnection();
            let sql = "SELECT * FROM equipement";
            const [rows, fields] = await conn.execute(sql);
            conn.release();
            console.log("Equipement FETCHED: "+rows.length);
            return rows;
        }
        catch (err) {
            console.log(err);
            throw err; 
        }
    },
    
    async getOneEquipement(equipementID){ 
        try {
            let conn = await pool.getConnection();
            
            let sql = "SELECT * FROM equipement";
            const [rows, fields] = await conn.execute(sql, [ equipementID ]);
            conn.release();
            console.log("Equipement FETCHED: "+rows.length);
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

    async delOneEquipement(equipementID){ 
        try {
            let conn = await pool.getConnection();
            let sql = "DELETE FROM equipement WHERE equipementID = ?";
            const [okPacket, fields] = await conn.execute(sql, [ equipementID ]);
            conn.release();
            console.log("DELETE "+JSON.stringify(okPacket));
            return okPacket.affectedRows;
        }
        catch (err) {
            console.log(err);
            throw err; 
        }
    },

    async addOneEquipement(name, type, condition, available, purchaseDate, storagePlace, rentingRate, bailRate){ 
        try {
            let conn = await pool.getConnection();
            let sql = "INSERT INTO equipement (equipementID, name, type, condition, available, purchaseDate, storagePlace, rentingRate, bailRate) VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, ?)";
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

    async editOneEquipement(equipementID, name, type, condition, available, purchaseDate, storagePlace, rentingRate, bailRate){ 
        try {
            let conn = await pool.getConnection();
            let sql = "UPDATE equipement SET name=?, type=?, condition=?, available=?, purchaseDate=?, storagePlace=?, rentingRate=?, bailRate=?, WHERE equipementID=?"; // TODO: named parameters? :something
            const [okPacket, fields] = await conn.execute(sql, 
                        [name, type, condition, available, purchaseDate, storagePlace, rentingRate, bailRate, equipementID]);
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


  
