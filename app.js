var express = require("express");
var app     = express();
var request = require("request");

app.set("view engine", "ejs");


app.get("/",(req,res)=>{
    res.render("search")
})


app.get("/result", (req,res)=>{
    var query = req.query.search;
    var url = "https://openlibrary.org/subjects/love.json?details=true"+ query;
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200) {
            var data = JSON.parse(body)
            res.render("result", {data:data})
        }
        });
    });



app.listen(8000, process.env.IP, () => {
	console.log('port is working');
});