// lib and imports
const express = require("express");
const app = express();

const myFirstCOntroller = require("./controllers/controller")

// app setup
app.use(express.json())
app.use("/static", express.static("public"));
app.set("view engine", "ejs");


// pages
app.get('/',(req, res) => {
  res.render('home.ejs');
});


// Create here your api setup

app.get("/",(req, res) => {
  res.render("#display-recipe");
})


app.listen(process.env.PORT || 4000, () => console.log("Server Up and running"));

