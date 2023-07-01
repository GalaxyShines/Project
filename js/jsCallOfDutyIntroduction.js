var ulFirst1=document.querySelector(".ulFirst");
var liAll=ulFirst1.querySelectorAll("li");
liAll.forEach(function (li) {
    li.addEventListener("mouseover",function () {
        li.style.transform="translate(+10px)";
    });
    li.addEventListener("mouseout",function () {
        li.style.transform="translate(-0px)";
    });
});
var show1L=document.querySelector(".show1L").querySelectorAll("ul li");
show1L.forEach(function (li){
    li.addEventListener("mouseover",function () {
        li.style.transform="translate(+10px)";
    });
    li.addEventListener("mouseout",function () {
        li.style.transform="translate(-0px)";
    });
});
// function bindHoverEvent() {
//     var liList = document.querySelectorAll(".show1L ul li");
//     liList.forEach(function (li) {
//         li.addEventListener("mouseover", function () {
//             var targetId = li.dataset.target;
//             var target = document.getElementById(targetId);
//             target.style.display = "block";
//         });
//         li.addEventListener("mouseout", function () {
//             var targetId = li.dataset.target;
//             var target = document.getElementById(targetId);
//             target.style.display = "none";
//         });
//     });
// }
// window.onload = function () {
//     bindHoverEvent();
// };


var showSetD3=document.getElementById("D3");
showSetD3.addEventListener("mouseover",function () {
    document.querySelector(".show1RD3").style.zIndex="15";
});
showSetD3.addEventListener("mouseout",function () {
    document.querySelector(".show1RD3").style.zIndex="-1";
});
var showSetD4=document.getElementById("D4");
showSetD4.addEventListener("mouseover",function () {
    document.querySelector(".show1RD4").style.zIndex="15";
});
showSetD4.addEventListener("mouseout",function () {
    document.querySelector(".show1RD4").style.zIndex="-1";
});
var showSetD5=document.getElementById("D5");
showSetD5.addEventListener("mouseover",function () {
    document.querySelector(".show1RD5").style.zIndex="15";
});
showSetD5.addEventListener("mouseout",function () {
    document.querySelector(".show1RD5").style.zIndex="-1";
});
var showSetE5=document.getElementById("E5");
showSetE5.addEventListener("mouseover",function () {
    document.querySelector(".show1RE5").style.zIndex="15";
});
showSetE5.addEventListener("mouseout",function () {
    document.querySelector(".show1RE5").style.zIndex="-1";
});
var showSetE6=document.getElementById("E6");
showSetE6.addEventListener("mouseover",function () {
    document.querySelector(".show1RE6").style.zIndex="15";
});
showSetE6.addEventListener("mouseout",function () {
    document.querySelector(".show1RE6").style.zIndex="-1";
});
var showSetE7=document.getElementById("E7");
showSetE7.addEventListener("mouseover",function () {
    document.querySelector(".show1RE7").style.zIndex="15";
});
showSetE7.addEventListener("mouseout",function () {
    document.querySelector(".show1RE7").style.zIndex="-1";
});
var showSetF4=document.getElementById("F4");
showSetF4.addEventListener("mouseover",function () {
    document.querySelector(".show1RF4").style.zIndex="15";
});
showSetF4.addEventListener("mouseout",function () {
    document.querySelector(".show1RF4").style.zIndex="-1";
});
var showSetF5=document.getElementById("F5");
showSetF5.addEventListener("mouseover",function () {
    document.querySelector(".show1RF5").style.zIndex="15";
});
showSetF5.addEventListener("mouseout",function () {
    document.querySelector(".show1RF5").style.zIndex="-1";
});
var showSetF6=document.getElementById("F6");
showSetF6.addEventListener("mouseover",function () {
    document.querySelector(".show1RF6").style.zIndex="15";
});
showSetF6.addEventListener("mouseout",function () {
    document.querySelector(".show1RF6").style.zIndex="-1";
});
var showSetG5=document.getElementById("G5");
showSetG5.addEventListener("mouseover",function () {
    document.querySelector(".show1RG5").style.zIndex="15";
});
showSetG5.addEventListener("mouseout",function () {
    document.querySelector(".show1RG5").style.zIndex="-1";
});