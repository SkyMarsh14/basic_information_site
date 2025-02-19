const express = require("express");
const fs = require("fs");
const app = express();

app.get("/", (req, res) => {
  res.sendFile("./index.html", {
    root: __dirname,
  });
});
app.get("/:id", (req, res) => {
  res.sendFile(`./${req.params.id}.html`, { root: __dirname }, (err) => {
    res.status(404).sendFile("./404.html", { root: __dirname });
    console.log("The specified route doesn't exist.");
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`My first express app - Listening on Port ${PORT}`);
});
