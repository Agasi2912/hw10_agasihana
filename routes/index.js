const express = require("express");

const router = express.Router();

const Controller = require("../controllers/controlleruser");

const userRouter = require("./user");

const movieRouter = require("./movie")

router.get("/", Controller.home);

router.use("/users", userRouter);

router.use("/movies", movieRouter);

module.exports = router;