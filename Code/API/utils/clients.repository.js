
pool = require("./db.js");

module.exports = {
    getBlankClient(){
        return {
            "clientID" : null,
            "name" : null,
            "number" : null,
            "email" : null
        }
    },

    async getAllClient(){
        try {
            let conn = await pool.getConnection();
            let sql = "SELECT * FROM clients";
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

    async getOneClient(clientID){ 
        try {
            let conn = await pool.getConnection();
            let sql = "SELECT * FROM clients WHERE clientID = ?";
            const [rows, fields] = await conn.execute(sql, [ clientID ]);
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
    async delOneClient(clientID){ 
        try {
            let conn = await pool.getConnection();
            let sql = "DELETE FROM clients WHERE clientID = ?";
            const [okPacket, fields] = await conn.execute(sql, [ clientID ]);  // affectedRows, insertId
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
            let sql = "INSERT INTO clients (clientID, name, number, email) VALUES (NULL, ?, ?, ?) "; // TODO: named parameters? :something
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

    async editOneClient(clientID, name, number, email){ 
        try {
            let conn = await pool.getConnection();
            let sql = "UPDATE clients SET name=?, number=?, email=?, WHERE clientID=? "; 
            const [okPacket, fields] = await conn.execute(sql, 
                        [name,number,email,clientID]);
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