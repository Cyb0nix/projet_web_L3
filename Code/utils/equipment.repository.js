pool = require("../utils/db.js");

module.exports = {
    getBlankEquipment(){ 
        return {
            "equipement_ID": null,
            "type": null,
            "name": null,
            "condition": null,
            "available": null,
            "purchase_date": null,
            "storage_place" : null,
            "renting_rate" : null,
            "bail_rate" : null,
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
    
    async getOneEquipement(equipement_ID){ 
        try {
            let conn = await pool.getConnection();
            
            let sql = "SELECT * FROM equipement";
            const [rows, fields] = await conn.execute(sql, [ equipement_ID ]);
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

    async delOneEquipement(equipement_ID){ 
        try {
            let conn = await pool.getConnection();
            let sql = "DELETE FROM equipement WHERE equipement_ID = ?";
            const [okPacket, fields] = await conn.execute(sql, [ equipement_ID ]);
            conn.release();
            console.log("DELETE "+JSON.stringify(okPacket));
            return okPacket.affectedRows;
        }
        catch (err) {
            console.log(err);
            throw err; 
        }
    },

    async addOneEquipement(name, type, condition, available, purchase_date, storage_place, renting_rate, bail_rate){ 
        try {
            let conn = await pool.getConnection();
            let sql = "INSERT INTO equipement (equipement_ID, name, type, condition, available, purchase_date, storage_place, renting_rate, bail_rate) VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, ?)";
            const [okPacket, fields] = await conn.execute(sql, 
                        [name, type, condition, available, purchase_date, storage_place, renting_rate, bail_rate]);
            conn.release();
            console.log("INSERT "+JSON.stringify(okPacket));
            return okPacket.insertId;
        }
        catch (err) {
            console.log(err);
            throw err; 
        }
    },

    async editOneEquipement(equipement_ID, name, type, condition, available, purchase_date, storage_place, renting_rate, bail_rate){ 
        try {
            let conn = await pool.getConnection();
            let sql = "UPDATE equipement SET name=?, type=?, condition=?, available=?, purchase_date=?, storage_place=?, renting_rate=?, bail_rate=?, WHERE equipement_ID=?"; // TODO: named parameters? :something
            const [okPacket, fields] = await conn.execute(sql, 
                        [name, type, condition, available, purchase_date, storage_place, renting_rate, bail_rate, equipement_ID]);
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


  
