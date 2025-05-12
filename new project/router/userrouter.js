const { Router } = require("express");
const UserController = require("../controller/UserController");

let UserRouter=Router()

UserRouter.get("/",UserController.get)
UserRouter.post("/",UserController.post)


module.exports=UserRouter
