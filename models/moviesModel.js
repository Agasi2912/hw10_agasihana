const pool = require("../config/connectdb");

class Movie {
    constructor(id, title, genres, year, photo){
        this.id = +id;
        this.title = title;
        this.genres = genres;
        this.year = year;
        this.photo = photo;
    }

    static showallmovie(callback){
        let query = `SELECT * FROM "movies";`;

        pool.query(query, (err, movies) => {
            if(err){
                callback(err, null);
            }
            else{

                movies = movies.rows.map(movie => new Movie(movie.id, movie.title, movie.genres, movie.year, movie.photo));

                console.log(movies);

                console.log("SHOW DATA");
                callback(null, movies)
            }
        });
        
    }

    static addPost(objMovie, callback){
        let query = `
                INSERT INTO "movies" ("id", "title", "genres", "year", "photo") VALUES ($1, $2, $3, $4, $5);
            `;

            let arrData = [objMovie.id, objMovie.title, objMovie.genres, objMovie.year, objMovie.photo];

            pool.query(query, arrData, (err, result) => {
                if(err){
                    callback(err, null);
                }
                else{
                    console.log(`${objMovie.title} sudah masuk datanya..`);
                    callback(null, null);
                }
            });
    }

    static editformmovie(id, callback){
        let query = `SELECT * FROM "movies" WHERE id = ${+id};`;

        pool.query(query, (err, movies) => {
            if(err){
                callback(err, null);
            }
            else{
                // * instantiate
                console.log(movies.rows[0]);
                console.log("SHOW DATA");
                callback(null, movies.rows[0]);
            }
        });

    }

    static editPost(id, objMovie, callback){
        let query = `
            UPDATE "movies" SET "title" = $1, "genres" = $2, "year" = $3, "photo" = $4 WHERE "id" = ${+id};
            `;

            let arrData = [objMovie.title, objMovie.genres, objMovie.year, objMovie.photo];

            pool.query(query, arrData, (err, result) => {
                if(err){
                    callback(err, null);
                }
                else{
                    console.log(`${objMovie.title} sudah di update datanya..`);
                    callback(null, null);
                }
            });
    }

    static delete(id){
        let query = `
                DELETE FROM "movies" WHERE "id" = $1;
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

module.exports = Movie;