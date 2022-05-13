let express = require("express");
let PORT = 8000;

let app = express();

app.get("/hi", function(req, res){
    // logic
    console.log("GET /hi");
    let blob = {};
    blob.message = "hi";
    blob.time = new Date();

    res.json(blob);
})


app.get("/hello", function(req, res){
    console.log("GET /hello");

    let string = "<html><body>Hellow there! <br> Hope you are having a swell day</body></html>";

    res.send(string);
})


app.get("/friend", function(req, res){
    console.log("GET /friend");

    let q = req.query;
    let name = q.name;
    let greeting = "";
// if the query param contains name, then.....
    if(name ){
    greeting = `hello ${name}, how are you`
    } else { 
        greeting = "hello there, how are you"
    }

    res.send(greeting);
})



app.get("/sup", function(req, res){
    console.log("GET /sup");

    res.sendStatus(204);
})

app.get("/hey", function(req, res){
    console.log("GET /hey")
    res.status(400).send("hey girl heyyyyyy")
})

app.get("/echo", function(req, res){
    console.log("GET /echo");
    console.log("query params = ", req.query);
    res.json(req.query)

})

app.listen(PORT, function(){
    console.log("application has begun on port: ", PORT);
})