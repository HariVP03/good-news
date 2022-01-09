const express = require("express");
const http = require("http");
const path = require("path");

const port = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);

app.use(express.static(path.join(__dirname, "/../client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/../client/build", "index.html"));
});

server.listen(port, () => {
  console.log("Listening on port:", port);
});
