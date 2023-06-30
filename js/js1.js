// let money=0;
// let setting=document.getElementById('setting');
// setting.addEventListener('click',function (){
//     money=document.getElementById('put1').value;
// });
// let getIn=document.getElementById('getIn');
// getIn.addEventListener('click',function (){
//     money+=document.getElementById('put1').value;
// });
// let getOut=document.getElementById('getOut');
// getOut.addEventListener('click',function (){
//     switch (money>=document.getElementById('put1').value){
//         case true:
//             money-=document.getElementById('put1').value;
//             break;
//         case false:
//             alert("余额不足");
//             break;
//         default:
//             alert("Error!(ID:0x013)");
//             break;
//     }
// });
// let view=document.getElementById('view');
// view.addEventListener('click',function (){
//     alert("余额为："+money.toString());
// });

var money=0;
// var put1=document.getElementById('put1').value;
var put1=parseInt(document.getElementById('put1').value.trim());

// put1=parseInt(put1);
function setting(){
    if (isNaN(put1)){
        alert("输入错误，请输入数字");
    }else {
        money = put1;
        alert("设置成功");
        console.log(typeof money);
    }
}
// function getIn(){
//     money+=put1;
//     alert("存款成功");
// }
// function getOut(){
//     switch (money>=put1){
//         case true:
//             money-=put1;
//             alert("取款成功");
//             break;
//         case false:
//             alert("余额不足");
//             break;
//         default:
//             alert("ERROR");
//             break;
//     }
// }
// function view(){
//     alert("余额为："+money.toString());
// }