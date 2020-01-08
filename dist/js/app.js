const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");

// import routes

const postsRoutes = require("./routes/index");

const app = express();

app.listen(3000, () => {
  console.log("listening on port 3000");
});

app.use("/post", postsRoutes);

// connect to db

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("connected to db");
});
