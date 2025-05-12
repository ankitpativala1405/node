import { UserMethod } from "../api/UseMethod.js";

let data =await(await UserMethod.Get()).json()

console.log("data",data);

let temp ='';
// for (let i = 0; i <= data.length; i++) {
for (let i = 0; i < data.length; i++) {
    
  temp += `<div>
<h3>${data[i].email}</h3>
<h4>${data[i].number}</h4>
<h4>${data[i].password}</h4>
</div>`;
}

document.getElementById("usershow").innerHTML=temp
