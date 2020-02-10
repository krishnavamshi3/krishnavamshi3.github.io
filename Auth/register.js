var arr = {};
var len=document.getElementsByName('exampleInputPassword1').length;
function onRegister(){
    for(let i=0;i<len;i++)
    {
        arr[i] = document.getElementsByName('exampleInputPassword1')[i].value;
    }
    console.log(JSON.stringify(arr));
}