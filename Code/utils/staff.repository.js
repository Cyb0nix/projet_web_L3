
pool = require("../utils/db.js");

module.exports = {
    getBlankStaff(){
        return {
            "staffId" : null,
            "name" : null,
            "discordId" : null,
            "email" : null,
            "phone" : null,
            "role" : null,
            "joinDate" : null,
            "isFormed" : null,
            "mdp" : null,
            "isAdmin" : null
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

    async getOneStaff(staffId){ 
        try {
            let conn = await pool.getConnection();
            let sql = "SELECT * FROM staff WHERE memberId = ?";
            const [rows, fields] = await conn.execute(sql, [ staffId ]);
            conn.release();
            console.log("CARS FETCHED: "+rows.length);
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
    async delOneStaff(staffId){ 
        try {
            let conn = await pool.getConnection();
            let sql = "DELETE FROM staff WHERE staffId = ?";
            const [okPacket, fields] = await conn.execute(sql, [ staffId ]);  // affectedRows, insertId
            conn.release();
            console.log("DELETE "+JSON.stringify(okPacket));
            return okPacket.affectedRows;
        }
        catch (err) {
            console.log(err);
            throw err; 
        }
    },
    async addOneStaff(name, discordId, email, phone, role, joinDate, isFormed, mdp, isAdmin){ 
        try {
            let conn = await pool.getConnection();
            let sql = "INSERT INTO staff (staffId, name, discordId, email, phone, role, joinDate, isFormed, mdp, isAdmin) VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, ?, ?)"; // TODO: named parameters? :something
            const [okPacket, fields] = await conn.execute(sql, 
                        [name,discordId,email,phone,role,joinDate,isFormed,mdp,isAdmin]);
            conn.release();
            console.log("INSERT "+JSON.stringify(okPacket));
            return okPacket.insertId;
        }
        catch (error) {
            console.log(error);
            throw error; 
        }
    },

    async editOneStaff(staffId, name, discordId, email, phone, role, joinDate, isFormed, mdp, isAdmin){ 
        try {
            let conn = await pool.getConnection();
            let sql = "UPDATE staff SET name=?, discordId=?, email=?, phone=?, role=?, joinDate=?, isFormed=?, mdp=?, isAdmin=?, WHERE staffId=?"; // TODO: named parameters? :something
            const [okPacket, fields] = await conn.execute(sql, 
                        [name, discordId, email, phone, role, joinDate, isFormed, mdp, isAdmin, staffId]);
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