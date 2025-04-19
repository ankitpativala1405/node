const express=require("express")
const app=express()

app.get("/test",(request,responce)=>{
    responce.send("ankit")
})


app.listen(8472,()=>{
    console.log("server start with 8472");
    
})