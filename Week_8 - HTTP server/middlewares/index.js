const express = require("express")

const app = express();
app.listen(3000);

requestCount =0;

function middleware(req, res, next){
    requestCount++;
    next();
}

// we want to return the number of request on the server on different routes but the call to the requestCount should not increase the reuqest count
app.get("/requestCount",function(req, res){
    console.log(requestCount);
    data = "The request count is: "+ requestCount;
    res.send(data);
});

// this middleware get applied to only the function below them and not the function above them 
// app.use(middleware);
// app.get("/", function(req,res){
//     res.send("Hi from the server");
// });

// app.get('/status',function (req, res){
//     res.send("The website is up");
// });


// another way to appy the middle wares is as 
app.get("/",middleware, function(req,res){
    res.send("Hi from the server");
});

app.get('/status',middleware, function (req, res){
    res.send("The website is up");
});
