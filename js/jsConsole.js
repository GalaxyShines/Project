let labelSet=document.getElementById('set-index-label');
let cssSet=document.getElementById('set-index-css');
function getId(id){
    let getElement=document.getElementById(id);
    return getElement;
}
labelSet.addEventListener('click',function () {
    getId('show-2').style.display="none";
    getId('show-1').style.display="block";
});
cssSet.addEventListener('click',function () {
    getId('show-1').style.display="none";
    getId('show-2').style.display="block";
});