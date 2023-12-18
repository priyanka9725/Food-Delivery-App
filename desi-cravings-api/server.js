const express = require("express");
const app = express();
const port = 5000;
const mongoDB = require("./db");


app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
