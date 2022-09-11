//jshint esversion:6
const express = require("express");
const app = express();



app.get("/", function(req,res){
  res.sendFile(__dirname + "/index.html");

});
app.get("/styles.css",function(req,res) {
  res.sendFile(__dirname + "styles/styles.css");
});


app.get("/logo.png",function(req,res) {
  res.sendFile(__dirname + "images/logo.png");
});

  app.get("/testimonials.html",function(req,res){
    res.sendFile(__dirname + "testimonials/testimonials.html");
  });
  app.get("/about.html",function(req,res){
    res.sendFile(__dirname + "about/about.html");
  });
  app.get("/services.html",function(req,res){
    res.sendFile(__dirname + "services/services.html");
  });
  app.get("/contact.html",function(req,res){
    res.sendFile(__dirname + "contact/contact.html");
  });
  app.get("/index.html", function(req,res){
    res.sendFile(__dirname + "/index.html");

  });

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
