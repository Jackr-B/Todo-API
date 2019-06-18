var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser");

var todoRoutes  = require("./routes/todos");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.send("THIS IS THE HOMEPAGE")
});

app.use("/api/todos", todoRoutes);

app.listen(3000, function(){
    console.log("Server running on port 3000")
})