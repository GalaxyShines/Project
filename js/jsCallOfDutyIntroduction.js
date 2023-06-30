// var ulFirst1=document.getElementsByClassName("ulFirst")[0];
// ulFirst1.addEventListener("mouseover",function(){
//     var action=ulFirst1.style.transform;
    
// });
var ulFirst1 = document.getElementsByClassName("ukFirst")[0];
ulFirst1.addEventListener("mouseover", function() {
    var currentPosition = parseInt(getComputedStyle(ulFirst1).getPropertyValue('transform').split(',')[4]);
    var newPosition = currentPosition + 5;
    ulFirst1.style.transform = "translateX(" + newPosition + "px)";
});
