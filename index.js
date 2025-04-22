const express=require("express")
const app=express()

 let mongo = `mongodb+srv://nodepractice:<db_password>@cluster0.sk2g4jt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

app.get("/test",(request,responce)=>{
    responce.send("ankit")
})

const mongoose = require("mongoose");

const dbconnect = async () => {
  try {
    await mongoose.connect("mongodb+srv://nodepractice:Ankit@cluster0.sk2g4jt.mongodb.net/yourDatabaseName?retryWrites=true&w=majority&appName=Cluster0");
    console.log("Mongoose connected ..... ");
  } catch (error) {
    console.error("Connection error:", error);
  }
};

dbconnect();

app.listen(8472,()=>{
    console.error("server start with 8472...");
    
})

