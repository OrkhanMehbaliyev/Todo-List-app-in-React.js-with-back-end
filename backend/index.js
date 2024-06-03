const http = require("http");
const cors = require("cors");
const router = require("./routes/router");

const PORT = 3000;

const server = http.createServer((req, res) => {
  cors()(req, res, () => {
    // Your server logic here
    router.handleRouters(req, res);
    res.writeHead(200, {
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "*", // Allow requests from any origin
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE", // Allow specified HTTP methods
      "Access-Control-Allow-Headers": "Content-Type, Authorization", // Allow specified headers
    });
    // Send response
    res.end("Hello World!");
  });
});

server.listen(PORT, () => {
  console.log("Server listening in port " + PORT);
});
