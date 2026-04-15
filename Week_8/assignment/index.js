// Create a middleware function that logs each incoming request’s HTTP method, URL, and timestamp to the console
// Create a middleware that counts total number of requests sent to a server. Also create an endpoint that exposes it

const express = require("express");

const app = express();
app.listen(3000);

requestCount =0;

function middlewareRequestLogger(req, res, next){
    console.log(Date.now() + " method - " + req.method);
    next();
}

function middlewareRequestCounter(req, res, next){
    requestCount ++;
    next();
}

// middleware to log the incoming requests
app.use(middlewareRequestLogger);

app.get("/requestCount", function(req, res){
    res.send("The number of incoming requests is: "+ requestCount);
})

// middleware called here to increase the counter
app.get("/",middlewareRequestCounter, function(req, res){
    res.send("Hi from the server");
});

// middleware called here to increase the counter
app.get("/status", middlewareRequestCounter, function(req, res){
    res.send(Date.now() + " || Server is up and running.");
})

