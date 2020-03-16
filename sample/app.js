const express = require('express');
app = express();
const port = 3000;

app.use(express.static('public'));


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/handle-form',(req,res) => {
	console.log(req.body);
  res.sendFile(__dirname+'/public/register.html');
}
);


function ConnectToDB(){
var mysql = require('mysql');
var con = mysql.createConnection({
	host : "localhost",
        user : "root",
        password : "toor",
        database : "KSM"
});
con.connect(function(err){
    if(err) throw err;
    con.query('select * from Students;',function (arr,result,fields) {
        if(err) throw err;
        console.log(result);
    });
})
};


app.listen(2909);

