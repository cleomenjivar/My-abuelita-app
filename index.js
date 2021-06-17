// lib and imports
const express = require("express");
const app = express();

const myFirstController = require("./controllers/recipes.js")

// app setup
app.use(express.json())
app.use("/public", express.static("public"));
app.set("view engine", "ejs");


// pages
app.get('/',(req, res) => {
  res.render('home.ejs');
});


// Create here your api setup




app.listen(4000, () => console.log("Server Up and running"));
