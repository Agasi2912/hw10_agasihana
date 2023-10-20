const pool = require("./config/connectdb");

const dropTable = `
    DROP TABLE IF EXISTS "users";
`;

const queryTable = `
    CREATE TABLE "users" (
        "id" SERIAL PRIMARY KEY,
        "email" VARCHAR(50) NOT NULL,
        "gender" BOOLEAN NOT NULL,
        "password" VARCHAR(50) NOT NULL,
        "role" VARCHAR(50) NOT NULL,
    );
`;

pool.query(dropTable, (err, result) => {
    if(err){
        throw err;
    }
    else{
        console.log("DROP TABLE")
        pool.query(queryTable, (err, result) => {
            if(err){
                throw err;
            }
            else{
                console.log("CREATE TABLE");
                pool.end();
            }
        });
    }
});