const UserData = require("../model/usermodel");

const UserController = {
  get: async (req, res) => {
    let user = await UserData.find();
    res.send(user);
  },
  post: async (req, res) => {
    let user = await UserData.create(req.body);
    res.status(201).json(user);
  },
};
module.exports=UserController
