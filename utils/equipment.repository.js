pool = require("../utils/db.js");

module.exports = {
    getBlankEquipment(){ 
        return {
            "equipement_ID": 0,
            "type": "null",
            "name": "null",
            "condition": "null",
            "available": "null",
            "purchase_date": "00/00/0000",
            "storage_place" : "null",
            "renting_rate" : "null",
            "bail_rate" : "null",
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
            const [rows, fields] = await conn.execute(sql, [ carId ]);
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

    async addOneEquipement(name){ 
        try {
            let conn = await pool.getConnection();
            let sql = "INSERT INTO equipement (equipement_ID, name) VALUES (NULL, ?) ";
            const [okPacket, fields] = await conn.execute(sql, [name]); // affectedRows, insertId
            conn.release();
            console.log("INSERT "+JSON.stringify(okPacket));
            return okPacket.insertId;
        }
        catch (err) {
            console.log(err);
            throw err; 
        }
    },

    async editOneCar(equipement_ID, name, type, condition, available, purchase_date, storage_place, renting_rate, bail_rate){ 
        try {
            let conn = await pool.getConnection();
            let sql = "UPDATE cars SET car_brand=?, car_name=?, car_baseprice=?, car_isFancy=?, car_realPrice=? WHERE car_id=? "; // TODO: named parameters? :something
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

  
