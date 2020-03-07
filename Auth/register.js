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

function exportToJsonFile(){
    var mysql = require('mysql');
    var con = mysql.createConnection({
        host : "localhost",
        user : "mahesh",
        password : "Mahi9652"
    });
con.connect(function(err){
    if(err) throw err;
    console.log("connected");
});
}

exportToJsonFile();