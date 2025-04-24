const mongoose = require("mongoose");

const dbconnect = async () => {
  try {
    await mongoose.connect("mongodb+srv://nodepractice:Ankit@cluster0.sk2g4jt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log(`Mongoose connected ..... 
        `);
  } catch (error) {
    console.error("Connection error:", error);
  }
};
 
module.exports=dbconnect


