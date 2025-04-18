const express=require("express")
const app=express()
app.listen(8472,()=>{
    console.log("server start with 8472");
    
})
app.get("/test",(request,responce)=>{
    responce.send("ankit")
})