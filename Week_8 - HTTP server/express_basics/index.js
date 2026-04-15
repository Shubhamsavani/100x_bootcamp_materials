// http server that supports 4 routes > (/sum , /sub, /div, /mul)
// multiple frameworks can be used: express, hono, elysiajs, trpc

const express = require("express");
const path = require("path");

const app = express();

app.listen(3000);

app.get('/', function(req, res){

    res.sendFile(path.join(__dirname, './index.html'));
})

// localhost:3000/sum?a=3&b=4
// sending the data from frontend in the form of queries
app.get("/sum", function(req, res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    const sum = a + b;
    res.json({
        ans: sum
    });
});

// localhost:3000/sub/2000/1
// sending the data as path parameters
app.get("/sub/:a/:b", function(req, res){
    const a= parseInt(req.params.a);
    const b= parseInt(req.params.b);

    console.log(a + " // " + b);
    const sub = a - b;
    res.json({
        ans: sub
    });
});

// localhost:3000/mul
// writing a GET request and sending the data in the json file fomat inside the body
app.use(express.json());

app.post("/mul/",function (req, res){
    const {a,b} = req.body;

    const mul = parseInt(a) * parseInt(b);

    res.json({
        ans: mul
    });
});

// localhost:3000/div
// writing a POST request and sending the data in json file format 
app.use(express.json());

app.post("/div/",function(req, res){
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    const div = a / b;
    
    res.json({
        ans: div
    });
});

