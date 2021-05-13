
const express = require ("express");
//require express

const app = express();
//call the whole module

app.get("/", function (request, res ){
  res.send("hello ");
});

app.get("/contact", function (request, res ){
  res.send("Contact me at: monsus2000@hotmail.com");
});

app.get("/about", function (request, res ){
  res.send("I'm Susy and I love hi");
});

app.listen(3000, function(){
  console.log("Server has started on port 3000");
});
