function onclick1(){
    window.location.href="../indexDeskTop.html";
}
function action(){
    var getInput=document.getElementById('textarea').value;
    document.getElementById('resault').innerHTML(eval(getInput));
}