// var arr = {};
// var len=document.getElementsByName('input').length;
// function onRegister(){
//     for(let i=0;i<len;i++)
//     {
//         arr[i] = document.getElementsByName('input')[i].value;
//     }
//     console.log(JSON.stringify(arr));


//     file = fopen("c:\MyFile.txt", 3);
//     console.log(file);
// }

var con = require('../../config');
var Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');
module.exports.register = function (req,res) {
    var ecryptedPassword = cryptr.encrypt(req.body.password);
    var encryptedConfirmPassword = cryptr.encrypt(req.body.confirmPassword);
    var users = {
        "name":req.body.fullname,
        "academic_year":req.body.acadamicYear,
        "email":req.body.email,
        "password":ecryptedPassword,
        "confirmPassword":encryptedConfirmPassword,
        "security_question":req.body.Security
    }
    con.query('insert into users set ?',users,function(error,result,fields){
        if(error)
        {
            res.json({
                status:false,
                message:'error in query'
            });
            throw error;
        }
        else{
            res.json({
                status:true,
                data:users,
                message:'user registered successfully'
            });
        }
    })
}