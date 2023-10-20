// const express = require("express");
const Movie = require("../models/moviesModel");
// const router = express.Router();
class Controller {

    static home(req, res){
        res.send("<h1>Welcome to Hana Movie Aplikasi</h1>");
    }

    static showallmovie(req, res){
        Movie.showallmovie((err, movies) => {
            if(err){
                res.send(err);
            }
            else{
                res.render("showallmovie", { movies });
            }
        });
        
    }

    static addformmovie(req, res){
        res.render("addformmovie");
    }

    static addPost(req, res){
        const { id, title, genres, year, photo } = req.body; 
        const objMovie = {
            id, title, genres, year, photo
        }
        Movie.addPost(objMovie, (err, movies) => {
            if(err){
                res.send(err);
            }
            else{
                res.redirect("/movies");
            }
        });

    }

    static editformmovie(req, res){
        Movie.editformmovie(req.params.id, (err, movies) => {
            if(err){
                res.send(err);
            }
            else{
                res.render("editformmovie", { movies } );
            }
        });
        
    }

    static editPost(req, res){
        const { title, genres, year, photo } = req.body; 
        const objMovie = {
            title, genres, year, photo
        }
        Movie.editPost(req.params.id, objMovie, (err, movies) => {
            if(err){
                res.send(err);
            }
            else{
                res.redirect("/movies");
            }
        });
    }

    static delete(req, res){
        const { id, title, genres, year, photo } = req.body; 
        const objMovie = {
            id, title, genres, year, photo
        }
        Movie.delete(req.params.id, objMovie, (err, movies) => {
            if(err){
                res.send(err);
            }
            else{
                res.redirect("/movies");
            }
        });

    }



}

// router.get("/", Controller.showall);

// router.get("/add", Controller.addform);
// router.post("/add", Controller.addPost);

// router.get("/:id/edit", Controller.editform); 
// router.post("/:id/edit", Controller.editPost);

// router.get("/:id/delete", Controller.delete);

module.exports = 
    Controller;
