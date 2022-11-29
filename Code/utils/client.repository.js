
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
            let sql = "SELECT * FROM client";
            const [rows, fields] = await conn.execute(sql);
            conn.release();
            return rows;
        }
        catch (err) {
            // TODO: log/send error ... 
            console.log(err);
            throw err; // return false ???
        }
    },

    async getOneClient(clientId){ 
        try {
            let conn = await pool.getConnection();
            let sql = "SELECT * FROM client WHERE clientId = ?";
            const [rows, fields] = await conn.execute(sql, [ clientId ]);
            conn.release();
            console.log("CLIENT FETCHED: "+rows.length);
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
    async delOneClient(clientId){ 
        try {
            let conn = await pool.getConnection();
            let sql = "DELETE FROM client WHERE clientId = ?";
            const [okPacket, fields] = await conn.execute(sql, [ clientId ]);  // affectedRows, insertId
            conn.release();
            console.log("DELETE "+JSON.stringify(okPacket));
            return okPacket.affectedRows;
        }
        catch (err) {
            console.log(err);
            throw err; 
        }
    },
    async addOneClient(name, number, email){ 
        try {
            let conn = await pool.getConnection();
            let sql = "INSERT INTO client (clientId, name, number, email) VALUES (NULL, ?, ?, ?) "; // TODO: named parameters? :something
            const [okPacket, fields] = await conn.execute(sql, 
                        [name,number,email]);
            conn.release();
            console.log("INSERT "+JSON.stringify(okPacket));
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
            let sql = "UPDATE staff SET name=?, number=?, email=?, WHERE clientId=? "; 
            const [okPacket, fields] = await conn.execute(sql, 
                        [name,number,email,clientId]);
            conn.release();
            console.log("UPDATE "+JSON.stringify(okPacket));
            return okPacket.affectedRows;
        }
        catch (err) {
            console.log(err);
            throw err; 
        }
    }

    
}