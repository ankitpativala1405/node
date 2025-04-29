const User = require("../models/schema")

const UserController={
    get:async(req,res)=>{
        let user=await User.find()
        res.send(user)
    },
    post:async(req,res)=>{
       try {
         let user=await User.create(req.body)
         res.status(201).send(user)
       } catch (error) {
        res.send(error)
       }
    }
}
module.exports=UserController