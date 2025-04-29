const { Router } = require("express");
const UserController = require("../controllers/user");


const router = Router();
router.get("/",UserController.get)
router.post("/",UserController.post)
module.exports = router;

