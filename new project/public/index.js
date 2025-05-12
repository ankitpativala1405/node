// const { UserMethod } = require("../api/UseMethod");
// import { UserMethod } from "../api/UseMethod"
import { UserMethod } from '../api/UseMethod.js';


document.getElementById("SignUpForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  let user = {
    email: document.getElementById("exampleInputEmail1").value,
    number: document.getElementById("exampleInputNumber1").value,
    password: document.getElementById("exampleInputPassword1").value,
  };

  console.log(user);
  await (await UserMethod.Post(user)).json();

  alert("js linked");
});
