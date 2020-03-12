var arr = {};
var len=document.getElementsByName('input').length;
function onRegister(){
    for(let i=0;i<len;i++)
    {
        arr[i] = document.getElementsByName('input')[i].value;
    }
    console.log(JSON.stringify(arr));


    file = fopen("c:\MyFile.txt", 3);
    console.log(file);
}

var app = express();
app.get('/register',function(req,res){
    res.sendFile(__dirname + "/",+"Auth/register.html");
});


function ConnectToDB(){
    var mysql = require('mysql');
    var express = require('express');
    var app = express();
    var con = mysql.createConnection({
        host : "127.0.0.1",
        user : "root",
        password : "enterpi",
        database : "userdb"
    });
con.connect(function(err){
    if(err) throw err;
    con.query('select * from users',function (arr,result,fields) {
        if(err) throw err;
        console.log(result);
    })
});
app.listen(1337);
}
ConnectToDB();