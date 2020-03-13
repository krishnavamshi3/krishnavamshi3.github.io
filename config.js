var mysql = require('mysql');
console.log(mysql);
    var con = mysql.createConnection({
        host : "127.0.0.1",
        user : "root",
        password : "enterpi",
        database : "userdb"
    });
con.connect(function(err){
    if(err) throw err;
    else{
        console.log('Connected Successfully');
    }
});
module.exports = con;