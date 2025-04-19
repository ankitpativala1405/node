const express=require("express")
const mongoose=require("mongoose")
const app=express()

// mongodb+srv://nodepractice:<db_password>@cluster0.sk2g4jt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

app.get("/test",(request,responce)=>{
    responce.send("ankit")
})


app.listen(8472,()=>{
    console.log("server start with 8472");
    
})