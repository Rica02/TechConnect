import Router from "./routes/routes"

var express = require('express')
var app = express()


app.listen("3000", function() {
    console.log("App listening at 3000");
})

app.use(Router)



