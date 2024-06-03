const http = require("http");
const router = require("./routes/router");

const PORT = 3000;

const server = http.createServer((req, res) => {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // Handle preflight request
  if (req.method === "OPTIONS") {
    res.writeHead(200);
    res.end();
    return;
  }
  router.handleRouters(req, res);
});

server.listen(PORT, () => {
  console.log("Server listening in port " + PORT);
});
