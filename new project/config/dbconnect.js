//

const mongoose = require("mongoose");

const DbConnect = async () => {
  await mongoose.connect(
    "mongodb+srv://nodepractice:Ankit@cluster0.sk2g4jt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  console.log(`mongoose connected....
        `);
};

module.exports = DbConnect;
