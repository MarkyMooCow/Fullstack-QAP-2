// Remember to type | npm init -y | into the console to launch this puppy!

const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { Content_Type: "text/html" });
  res.write("<html>Holy crap thing friggin worked");
  switch (req.url) {
    case "/":
      console.log("root");
      res.write("<body>Cool story bro</body>");
      break;
    case "/about":
      console.log("/about");
      res.write("<body>Too bad I got Strawberry Yop</body>");
      break;
    default:
      console.log("default");
      res.write("GO SOMEWHERE ELSE PLEASE");
      break;
  }
  res.write("BRUHHHHHHHHH</html>");
  res.end();
});

server.listen(3000, "localhost", () => {
  console.log("bruhhhhhhhhhh");
});
