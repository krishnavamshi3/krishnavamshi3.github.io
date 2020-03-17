var arr = {};
var len=document.getElementsByName('input').length;
function Register()
{
    document.getElementById('result') = "In js method";
    // const Url = 'localhost:13070/Auth/register';
    // $('btn').click(function(){
    //     $.post(Url,data,function(data,status){
    //         document.getElementById('result') = `${data}User successfully Registered and status is ${status}`;
    //     });
    // })
}
// function onRegister(){

//     for(let i=0;i<len;i++)
//     {
//         arr[i] = document.getElementsByName('input')[i].value;
//     }
//     document.getElementById('result') = arr;
//     if(document.getElementsByName('fullname'))
//     {
//         document.getElementById('nameValidation') = 'Name cannot be empty';
//     }
//     else if(document.getElementsByName('acadamicYear'))
//     {
//         document.getElementById('acadamicYear') = 'acadamicYear cannot be empty';
//     }
//     else{
//         document.getElementById('result') = 'all validations clear';
//     }
// }