var ulFirst1=document.querySelector(".ulFirst");
var liAll=ulFirst1.querySelectorAll("li");
liAll.addEventListener("mouseover",function () {
    liAll.style.transform="translate(+10px)";
});
liAll.addEventListener("mouseout",function () {
    liAll.style.transform="translate(-10px)";
});