
pool = require("../utils/db.js");

module.exports = {
    getBlankStaff(){
        return {
            "staffID" : null,
            "name" : null,
            "discordID" : null,
            "email" : null,
            "phone" : null,
            "role" : null,
            "joinDate" : null,
            "isFormed" : null
        }
    },

    async getAllStaff(){
        try {
            let conn = await pool.getConnection();
            let sql = "SELECT * FROM staff";
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

    async getOneStaff(staffID){ 
        try {
            let conn = await pool.getConnection();
            let sql = "SELECT * FROM staff WHERE staffID = ?";
            const [rows, fields] = await conn.execute(sql, [ staffID ]);
            conn.release();
            console.log("STAFF FETCHED: "+rows.length);
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
    async delOneStaff(staffID){ 
        try {
            let conn = await pool.getConnection();
            let sql = "DELETE FROM staff WHERE staffID = ?";
            const [okPacket, fields] = await conn.execute(sql, [ staffID ]);  // affectedRows, insertId
            conn.release();
            console.log("DELETE "+JSON.stringify(okPacket));
            return okPacket.affectedRows;
        }
        catch (err) {
            console.log(err);
            throw err; 
        }
    },
    async addOneStaff(name, discordID, email, phone, role, joinDate, isFormed){ 
        try {
            let conn = await pool.getConnection();
            let sql = "INSERT INTO staff (staffID, name, discordID, email, phone, role, joinDate, isFormed) VALUES (NULL, ?, ?, ?, ?, ?, ?, ?)"; // TODO: named parameters? :something
            const [okPacket, fields] = await conn.execute(sql, 
                        [name,discordID,email,phone,role,joinDate,isFormed]);
            conn.release();
            console.log("INSERT "+JSON.stringify(okPacket));
            return okPacket.insertId;
        }
        catch (error) {
            console.log(error);
            throw error; 
        }
    },

    async editOneStaff(staffID, name, discordID, email, phone, role, joinDate, isFormed){ 
        try {
            let conn = await pool.getConnection();
            let sql = "UPDATE staff SET name=?, discordID=?, email=?, phone=?, role=?, joinDate=?, isFormed=? WHERE staffID=?"; // TODO: named parameters? :something
            const [okPacket, fields] = await conn.execute(sql, 
                        [name, discordID, email, phone, role, joinDate, isFormed, staffID]);
            conn.release();
            console.log("UPDATE "+JSON.stringify(okPacket));
            return okPacket.affectedRows;
        }
        catch (err) {
            console.log(err);
            throw err; 
        }
    },

    async getformed(){
        try {
            let conn = await pool.getConnection();
            let sql = "SELECT * FROM staff WHERE isFormed=1";
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
    
};