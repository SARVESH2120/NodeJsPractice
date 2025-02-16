const http = require("http");

const server = http.createServer(function (req, res) {
  if (req.url === "/getSecretData") {
    res.end("There is no secret Data");
  }
  res.end("Hello world");
});

server.listen(7777);

//express framework to create server
//wrapper around server
