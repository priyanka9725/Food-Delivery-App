const express = require("express");
const app = express();
const port = 5000;
const mongoDB = require("./database");

app.get("/", (res, req) => {
  res.setEncoding("Hello World!");
});

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
