const express = require("express");
const DBConnect = require("./config/dbconnect");
const app = express();
require("dotenv").config();

app.use(express.json());
const PORT = process.env.PORT || 8472;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
  DBConnect();
});
