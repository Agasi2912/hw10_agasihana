const express = require("express");
const movieRouter = express.Router();

const Controller = require("../controllers/controllermovie");

movieRouter.get("/", Controller.showallmovie);

movieRouter.get("/add", Controller.addformmovie);
movieRouter.post("/add", Controller.addPost);

movieRouter.get("/:id/edit", Controller.editformmovie);
movieRouter.post("/:id/edit", Controller.editPost);

movieRouter.get("/:id/delete", Controller.delete);

module.exports = movieRouter;