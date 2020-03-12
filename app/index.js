function hello(){
alert("Hi Guys Let's Start Now");
}
// hello();
// Hi This new notes 
// Description about the working project
// var h1 = "<h1>Welcome to KSM Community</h1>";
// var signup = "<button><a href='../Auth/register.html'>Sign Up</a></button>";
// document.body.innerHTML = h1+"<button><a href='../Auth/login.html'>Sign In</a></button>"+signup;

var express = require('express');
var app = express();
app.get('/',function(req,res){
    res.sendFile(__dirname + "/",+"index.html");
});

app.get('/Auth/register.html',function(req,res){
    res.sendFile(__dirname + "/",+"Auth/register.html");
});

app.listen(8012);