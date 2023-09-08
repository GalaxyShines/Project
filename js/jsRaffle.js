var user={
    constructor(getUID,getPWD){
        getUID='123456';
        getPWD='123456';
    }
}
var toget=document.getElementById('getit');
toget.addEventListener('click',function (){
    func1()
});
function func1(){
    let getUID=document.getElementById('uid').value;
    let getPWD=document.getElementById('pwd').value;
    console.log(typeof getUID);
    console.log(typeof getPWD);
    console.log(getUID);
    console.log(getPWD);
    if (user.getUID==getPWD){
        document.getElementById('show').innerHTML=Math.floor(Math.random()*10);
        console.log('inner correct');
    }else {
        document.getElementById('show').innerHTML="failed to innerhtml";
    }
}