function run(){
    alert(eval(document.getElementById('getInput1').value));
}
document.onkeydown=get;
function get(){
    if (window.event.keyCode==13){
        run();
    }
}
function goHome(){
    window.location.href="../indexDeskTop.html";
}