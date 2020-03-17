    // var h1 = "<h1>Welcome to KSM Community</h1>";
    // var signup = "<button><a href='../Auth/register.html'>Sign Up</a></button>";
    // document.body.innerHTML = h1+"<button><a href='../Auth/login.html'>Sign In</a></button>"+signup;
    
    var express = require('express');
    var app = express();
    var con = require('../config');
    var bodyParser=require('body-parser');
    app.get('/',function(req,res){
        res.sendFile(__dirname + "/",+"index.html");
    });
    var registerController = require('./Auth/register');
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    
    /* route to register.html */
    // app.get('/Auth/register',function(req,res){
    //     res.sendFile(__dirname + "/" + "./Auth/register.html");
    // })
    /* route to register */
    app.post('/register',registerController.register);
    /*  path to controller */
    app.post('/Auth/register',registerController.register);
    app.listen(2020);
