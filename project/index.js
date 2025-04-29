const express = require("express");
const DBConnect = require("./config/dbconnect");
const app = express();
const cors = require("cors");
const router = require("./routers/user");
app.use(cors());
require("dotenv").config();

app.use(express.json());
const PORT = process.env.PORT || 4000;


app.use("/api/users",router);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
  DBConnect();
});

