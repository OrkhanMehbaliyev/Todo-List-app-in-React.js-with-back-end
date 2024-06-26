const http = require("http");
const cors = require("cors");
const router = require("./routes/router");

const PORT = 3000;

const server = http.createServer((req, res) => {
  // Set CORS headers
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://todo-list-app-in-react-js.vercel.app"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
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
