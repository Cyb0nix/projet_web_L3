

pool = require("../utils/db.js");

module.exports = {
    getBlankEquipement(){
        return{
            "equipement_ID" : null,
            "name" : null,
            "type": null,
            "condition" : null,
            "available" : null,
            "purchase_date" : null,
            "storage_place" : null,
            "renting_rate" : null,
            "bail_rate" : null,
        }
    },

    async getAllEquipement(){
        try{
            let conn = await pool.getConnection();
            let sql = "SELECT * FROM equipement";
            const rows = await conn.query(sql);
            conn.end();
            return rows;
        } catch (error) {
            console.log(error);
            throw error;
        }
    },

    async getOneEquipment(equipement_ID){ 
        try {
            let conn = await pool.getConnection();
            let sql = "SELECT * FROM equipement WHERE equipement_ID = ?";
            const rows = await conn.query(sql, equipement_ID);
            conn.end();
            console.log("ROWS FETCHED: "+rows.length);
            if (rows.length == 1) {
                return rows[0];
            } else {
                return false;
            }
        }
        catch (error) {
            console.log(error);
            throw error; 
        }
    },

    async delOneEquipement(equipement_ID){ 
        try {
            let conn = await pool.getConnection();
            let sql = "DELETE FROM equipement WHERE equipement_ID = ?";
            const okPacket = await conn.query(sql, equipement_ID); // affectedRows, insertId
            conn.end();
            console.log(okPacket);
            return okPacket.affectedRows;
        }
        catch (err) {
            console.log(err);
            throw err; 
        }
    },

    async addOneEquipement(name){ 
        try {
            let conn = await pool.getConnection();
            let sql = "INSERT INTO equipement (equipement_ID, name) VALUES (NULL,?) ";
            const okPacket = await conn.query(sql,name); // affectedRows, insertId
            conn.end();
            console.log(okPacket);
            return okPacket.insertId;
        }
        catch (error) {
            console.log(error);
            throw error; 
        }
    },

    async editOneEquipement(equipement_ID, name, type, condition, available, purchase_date, storage_place, renting_rate, bail_rate){ 
        try {
            let conn = await pool.getConnection();
            let sql = "UPDATE equipement SET name=?, number=?, email=?, WHERE equipement_ID=? "; // TODO: named parameters? :something
            const okPacket = await conn.query(sql, 
                        [name, type, condition, available, purchase_date, storage_place, renting_rate, bail_rate]);
            conn.end();
            console.log(okPacket);
            return okPacket.affectedRows;
        }
        catch (error) {
            console.log(error);
            throw error; 
        }
    }
}


class equipment{

    constructor(){}
    
    constructor(name){
        this.name = name;
    }

    constructor(name, type, condition){
        this.name = name;
        this.type = type;
        this.condition = condition;
    }
    constructor(name, type, condition, available, storage_place, purchase_date, renting_rate, bail_rate){
        this.name = name;
        this.type = type;
        this.condition = condition;
        this.available = available;
        this.storage_place = storage_place;
        this.purchase_date = purchase_date;
        this.renting_rate = renting_rate;
        this.bail_rate = bail_rate;
    }

    get getName() {
        return this.name;
    }
    get getType() {
        return this.type;
    }
    get getCondition() {
        return this.condition;
    }
    get getAvailable() {
        return this.available;
    }
    get getStorage_place() {
        return this.storage_place;
    }
    get getPurchase_date() {
        return this.purchase_date;
    }
    get getRenting_rate() {
        return this.renting_rate;
    }
    get getBail_rate() {
        return this.bail_rate;
    }
    set setName(newName) {
        this.name = newName;
    }
    set setType(newType) {
        this.type = newType;
    }
    set setCondition(newCondition) {
        this.condition = newCondition;
    }
    set setAvailable(newAvailable) {
        this.available = newAvailable;
    }
    set setPurchase_date(newPurchase_date) {
        this.purchase_date = newPurchase_date;
    }
    set setStorage_place(newStorage_place) {
        this.storage_place = newStorage_place;
    }
    set setRenting_rate(newRenting_rate) {
        this.renting_rate = newRenting_rate;
    }
    set setBail_rate(newBail_rate) {
        this.bail_rate = newBail_rate;
    }
}