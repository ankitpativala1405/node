const http = require("http");
require("dotenv").config();
const port = process.env.PORT || 9000;

const server = http.createServer((req, res) => {
  let url = req.url;
  if (url === "/") {
    res.write("Welcome To Home Page !!");
    res.end();
  } else if (url === "/about") {
    res.write("Welcome To About Page !!");
    res.end();
  } else if (url === "/contact") {
    res.write("Welcome To Contact Page !!");
    res.end();
  } else {
    res.writeHead(404);
    res.write("404 Page Not Found !!");
    res.end();
  }
});

server.listen(port, (err) => {
  !err ? console.log(`Server Start With PORT: ${port}`) : null;
});
