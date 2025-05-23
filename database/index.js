let express = require("express");
const dbconnect = require("./db");
const User = require("./user");
const validate = require("./middleware");
let app = express();
app.use(express.json());

app.get("/", async (req, res) => {
  const{name,email}=req.query
  let query={}
  if(email){
    query.email=email
  }
  let users = await User.find(query);
  res.send(users);
});

app.get("/info/:id", async (req, res) => {
  let{id}=req.params
  let user=await User.findById(id)
  res.send(user)
});

app.post("/",validate, async (req, res) => {
  let user = await User.create(req.body);
  res.send(user);
});

app.delete("/:id", async (req, res) => {
  const { id } = req.params;
  let user = await User.findByIdAndDelete(id);
  res.send(user);
});

app.patch("/:id", async (req, res) => {
  const { id } = req.params;
  let user = await User.findByIdAndUpdate(id, req.body, { new: true });
  res.send(user);
});

app.listen(4000, () => {
  console.log("server connected.....");
  dbconnect();
});
