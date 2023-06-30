var balance=0;
function consoleLog(content){
    console.log(content);
}
function setting(){
    const getInput=document.getElementById('getInput').value;
    balance=parseInt(getInput);
    consoleLog("操作初始金额成功，为"+balance);
    // window.alert("设置成功");
    document.getElementById('getInput').value='';
    appendP("设置初始金额为"+balance);
}
function getIn(){
    const getInput=document.getElementById('getInput').value;
    balance+=parseInt(getInput);
    consoleLog("操作存款成功，余额"+balance);
    // alert("存款成功");
    document.getElementById('getInput').value='';
    appendP("存款成功，余额"+balance);
}
function getOut(){
    const getInput=document.getElementById('getInput').value;
    switch (balance>=parseInt(getInput)){
        case true:
            balance-=parseInt(getInput);
            // alert("取款成功");
            consoleLog("操作取款成功，余额"+balance);
            document.getElementById('getInput').value='';
            appendP("取款成功，余额"+balance);
            break;
        default:
            // alert("余额不足，取款失败");
            consoleLog("操作取款失败，原因是余额不足");
            document.getElementById('getInput').value='';
            appendP("取款失败，余额不足");
            break;
    }
}
function view() {
    const getInput=document.getElementById('getInput').value;
    // alert("余额为"+balance);
    consoleLog("操作查看余额成功，余额为"+balance);
    appendP("查询余额，"+balance);
}
function appendP(text){
    var textArea=document.querySelector(".textArea");
    var newP=document.createElement("p");
    newP.textContent=getDate()+"　　"+text;
    textArea.insertBefore(newP,textArea.firstChild);
    const pList=textArea.querySelectorAll('p');
    if (pList.length>10){
        textArea.removeChild(pList[pList.length-1]);
    }
}
function getDate(){
    var currentDate=new Date();
    var hours=currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
    var milliseconds = currentDate.getMilliseconds();
    var retur=hours+":"+minutes+":"+seconds;
    return retur;
}