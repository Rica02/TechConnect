var express = require('express')

var router = express.Router()

//home route 
app.get("/",function(req,res) {
    res.send("Tech connect");
})

//about us page 
app.get ("/", function(req,res){
    res.send("about us page ")
})

//   