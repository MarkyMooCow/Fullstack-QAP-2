// Remember to type | npm init -y | into the console to launch this puppy!

const http = require("http");
const routes = require('./routes.js')

const server = http.createServer((req, res) => {
  res.writeHead(200, { Content_Type: "text/html" });
  switch (req.url) {
    case "/":
      console.log("root");
      routes.indexPage('home.html',res)
      break;
    case "/about":
      console.log("/about");
      routes.indexPage('about.html',res)
      break;
    default:
      console.log("/default");
      routes.indexPage('default.html',res)
      break;
  }
});

server.listen(3000, "localhost", () => {
  console.log("bruhhhhhhhhhh");
});
