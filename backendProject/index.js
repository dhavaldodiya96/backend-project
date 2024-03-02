require("dotenv").config();

import express from "express";
const app = express();
const port = process.env.PORT || 3000;

const data = {
  employees: ["John", 30, "Peter"],
};

app.get("/", (req, res) => {
  res.send("server is ready");
});

app.listen(() => {
  console.log(`Example app listening on port ${port}`);
});
