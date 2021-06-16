const express = require("express");
const app = express();
const postRoute = require("./routes/post");
const mongoose = require("mongoose");
require("dotenv/config");
const cors = require("cors");

//MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

//DataBase Connection

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true }, () =>
  console.log("db is connected")
);

//ROUTES
app.use("/", postRoute);

//Listen the app
const PORT = 3000;
app.listen(PORT);
console.log(`The server is running on Port ${PORT}`);
