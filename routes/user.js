const express = require("express");
const userRouter = express.Router();

const Controller = require("../controllers/controlleruser");

userRouter.get("/", Controller.showall);

userRouter.get("/add", Controller.addform);
userRouter.post("/add", Controller.addPost);

userRouter.get("/:id/edit", Controller.editform);
userRouter.post("/:id/edit", Controller.editPost);

userRouter.get("/:id/delete", Controller.delete);

module.exports = userRouter;