
pool = require("../utils/db.js");

module.exports = {
    getBlankClient(){
        return {
            "clientId" : null,
            "name" : null,
            "number" : null,
            "email" : null
        }
    },

    async getAllClient(){
        try {
            let conn = await pool.getConnection();
            let sql = "SELECT * FROM clients";
            const rows = await conn.query(sql);
            conn.end();
            return rows;
        } catch (error) {
            console.log(error);
            throw error;
        }
    },

    async getOneClient(clientId){ 
        try {
            let conn = await pool.getConnection();
            // sql = "SELECT * FROM cars INNER JOIN brands ON car_brand=brand_id WHERE car_id = "+carId; // SQL INJECTION => !!!!ALWAYS!!!! sanitize user input!
            // escape input OR prepared statements OR use orm
            let sql = "SELECT * FROM cars WHERE car_id = ?";
            const rows = await conn.query(sql, clientId);
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
    async delOneClient(clientId){ 
        try {
            let conn = await pool.getConnection();
            let sql = "DELETE FROM clients WHERE clientId = ?";
            const okPacket = await conn.query(sql, clienId); // affectedRows, insertId
            conn.end();
            console.log(okPacket);
            return okPacket.affectedRows;
        }
        catch (err) {
            console.log(err);
            throw err; 
        }
    },
    async addOneClient(name){ 
        try {
            let conn = await pool.getConnection();
            let sql = "INSERT INTO clients (clientId, name) VALUES (NULL,?) ";
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
    async editOneClient(clientId, name, number, email){ 
        try {
            let conn = await pool.getConnection();
            let sql = "UPDATE cars SET name=?, number=?, email=?, WHERE clientId=? "; // TODO: named parameters? :something
            const okPacket = await conn.query(sql, 
                        [name, number, email, clientId]);
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