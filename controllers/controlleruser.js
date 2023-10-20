// const express = require("express");
const User = require("../models/usersModel");
// const router = express.Router();
class Controller {

    static home(req, res){
        res.send("<h1>Welcome to Hana Movie Aplikasi</h1>");
    }

    static showall(req, res){
        User.showall((err, users) => {
            if(err){
                res.send(err);
            }
            else{
                res.render("showall", { users });
            }
        });
        
    }

    static addform(req, res){
        res.render("addform");
    }

    static addPost(req, res){
        const { id, email, gender, password, role } = req.body; 
        const objUser = {
            id, email, gender, password, role
        }
        User.addPost(objUser, (err, users) => {
            if(err){
                res.send(err);
            }
            else{
                res.redirect("/users");
            }
        });

    }

    static editform(req, res){
        User.editform(req.params.id, (err, users) => {
            if(err){
                res.send(err);
            }
            else{
                res.render("editform", { users } );
            }
        });
        
    }

    static editPost(req, res){
        const { email, gender, password, role } = req.body; 
        const objUser = {
            email, gender, password, role
        }
        User.editPost(req.params.id, objUser, (err, users) => {
            if(err){
                res.send(err);
            }
            else{
                res.redirect("/users");
            }
        });
    }

    static delete(req, res){
        const { id, email, gender, password, role } = req.body; 
        const objUser = {
            id, email, gender, password, role
        }
        User.delete(req.params.id, objUser, (err, users) => {
            if(err){
                res.send(err);
            }
            else{
                res.redirect("/users");
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
