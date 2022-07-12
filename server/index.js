const express = require("express");
const connection = require("./config/database.js")
const app = express();

app.get("/", function(req,res){

    var mySQLquery = "SELECT * FROM testdb.user"
    connection.query(mySQLquery,function(err,result){
        if(err){
            console.log(err)
            throw err;
        }res.send(result)
    })
})
app.listen(3007, function(){
    console.log("App listened function");

    connection.connect(function(err) {
        if(err){
            throw err;
        }console.log("DB connection is successful!")
    })
})  

