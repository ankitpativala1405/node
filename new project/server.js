const express = require("express");
const DbConnect = require("./config/dbconnect");
const UserRouter = require("./router/userrouter");
const app = express();
require("dotenv").config();
const cors = require("cors");
app.use(cors());

let port = process.env.PORT || 4000;
app.use(express.json())
app.use("/user", UserRouter);

app.listen(port, () => {
  console.log(`server listen with port-> ${port}`);
  DbConnect();
});
