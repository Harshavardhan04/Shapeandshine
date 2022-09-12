//jshint esversion:6
const express = require("express");
const app = express();



app.get("/", function(req,res){
  res.sendFile(__dirname + "/index.html");

});
app.get("/styles.css",function(req,res) {
  res.sendFile(__dirname + "/styles.css");
});


app.get("images/logo.png",function(req,res) {
  res.sendFile(__dirname + "images/logo.png");
});

  app.get("testimonials/index.html",function(req,res){
    res.sendFile(__dirname + "testimonials/index.html");
  });
  app.get("about/index.html",function(req,res){
    res.sendFile(__dirname + "about/index.html");
  });
  app.get("services/index.html",function(req,res){
    res.sendFile(__dirname + "services/index.html");
  });
  app.get("contact/index.html",function(req,res){
    res.sendFile(__dirname + "contact/index.html");
  });
  app.get("/index.html", function(req,res){
    res.sendFile(__dirname + "/index.html");

  });

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
