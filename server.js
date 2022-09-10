//jshint esversion:6
const express = require("express");
const app = express();



app.get("/", function(req,res){
  res.sendFile(__dirname + "/index.html");

});
app.get("/styles.css",function(req,res) {
  res.sendFile(__dirname + "/styles.css");
});

app.get("/index.js",function(req,res) {
  res.sendFile(__dirname + "/index.js");
});
app.get("/logo.png",function(req,res) {
  res.sendFile(__dirname + "/logo.png");
});

  app.get("/testimonials.html",function(req,res){
    res.sendFile(__dirname + "/testimonials.html");
  });
  app.get("/about.html",function(req,res){
    res.sendFile(__dirname + "/about.html");
  });
  app.get("/services.html",function(req,res){
    res.sendFile(__dirname + "/services.html");
  });
  app.get("/contact.html",function(req,res){
    res.sendFile(__dirname + "/contact.html");
  });
  app.get("/index.html", function(req,res){
    res.sendFile(__dirname + "/index.html");

  });

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
