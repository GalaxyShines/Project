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
    window.location.href=".https://galaxyshines/Project/indexDeskTop.html";
}