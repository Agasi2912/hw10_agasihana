const pool = require("../config/connectdb");

class User {
    constructor(id, email, gender, password, role){
        this.id = +id;
        this.email = email;
        this.gender = gender;
        this.password = password;
        this.role = role;
    }

    static showall(callback){
        let query = `SELECT * FROM "users";`;

        pool.query(query, (err, users) => {
            if(err){
                callback(err, null);
            }
            else{

                users = users.rows.map(user => new User(user.id, user.email, user.gender, user.password, user.role));

                console.log(users);

                console.log("SHOW DATA");
                callback(null, users)
            }
        });
        
    }

    static addPost(objUser, callback){
        let query = `
                INSERT INTO "users" ("id", "email", "gender", "password", "role") VALUES ($1, $2, $3, $4, $5);
            `;

            let arrData = [objUser.id, objUser.email, objUser.gender, objUser.password, objUser.role];

            pool.query(query, arrData, (err, result) => {
                if(err){
                    callback(err, null);
                }
                else{
                    console.log(`${objUser.email} sudah masuk datanya..`);
                    callback(null, null);
                }
            });
    }

    static editform(id, callback){
        let query = `SELECT * FROM "users" WHERE id = ${+id};`;

        pool.query(query, (err, users) => {
            if(err){
                callback(err, null);
            }
            else{
                // * instantiate
                console.log(users.rows[0]);
                console.log("SHOW DATA");
                callback(null, users.rows[0]);
            }
        });

    }

    static editPost(id, objUser, callback){
        let query = `
            UPDATE "users" SET "email" = $1, "gender" = $2, "password" = $3, "role" = $4 WHERE "id" = ${+id};
            `;

            let arrData = [objUser.email, objUser.gender, objUser.password, objUser.role];

            pool.query(query, arrData, (err, result) => {
                if(err){
                    callback(err, null);
                }
                else{
                    console.log(`${objUser.email} sudah di update datanya..`);
                    callback(null, null);
                }
            });
    }

    static delete(id){
        let query = `
                DELETE FROM "users" WHERE "id" = $1;
            `;
        let values = [+id];   
        
        pool.query(query, values, (err, result) => {
            if (err) {
                (err, null);
            } else {
                console.log(`Baris dengan id ${id} telah dihapus.`);
                (null, result);
            }
        });
    }
}

module.exports = User;