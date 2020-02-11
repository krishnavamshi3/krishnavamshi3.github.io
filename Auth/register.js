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

"use strict";

function exportToJsonFile() {
    var file = fopen("data.json", 3);
    console.log(file);
    for(let i=0;i<len;i++)
    {
        arr[i] = document.getElementsByName('input')[i].value;
    }
    let dataStr = JSON.stringify(arr);
    let dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);

    let exportFileDefaultName = 'data.json';

    let linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
}