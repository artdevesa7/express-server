const express = require('express');
const app = express();
//create a function called app
//best practice to use app

app.get("/", function(request, response){
    response.send("<h1>hello world</h1>");
})
/*first parameter: "/" is the location of the get request, so sent 
to root of the website requesting access to our express app server at localhost port 3000. 
Think of "/"
as the root of a website like www.arturodevesa.com, but at our localhost.
second parameter: when that get request happens, we can trigger a call 
back function with two parameters, request and response

press Ctrl C to exit node server.js*/

app.get("/contact", function(request, response){
    response.send("my email is arturodevesa@hotmail.com");
})
// new contact route
// nodemon server.js in terminal to active server

app.get("/about", function(request,respond){
    respond.send("this is my about page");
})

app.get("/hobbies", function(request,respond){
    respond.send("<lu><li>Running</li><li>Swimming</li><li>Cycling</li></lu>");
})

app.listen(3000, function(){
    console.log("Server started on port 3000");
})