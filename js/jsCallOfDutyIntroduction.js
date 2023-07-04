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

const mouseEvents = ['mouseover', 'mouseout'];
const sets = [
  { id: 'D3', className: 'show1RD3' },
  { id: 'D4', className: 'show1RD4' },
  { id: 'D5', className: 'show1RD5' },
  { id: 'E5', className: 'show1RE5' },
  { id: 'E6', className: 'show1RE6' },
  { id: 'E7', className: 'show1RE7' },
  { id: 'F4', className: 'show1RF4' },
  { id: 'F5', className: 'show1RF5' },
  { id: 'F6', className: 'show1RF6' },
  { id: 'G5', className: 'show1RG5' },
];

for (const set of sets) {
  const showSet = document.getElementById(set.id);
  const showElement = document.querySelector(`.${set.className}`);
  
  for (const event of mouseEvents) {
    showSet.addEventListener(event, () => {
      showElement.style.zIndex = event === 'mouseover' ? '15' : '-1';
    });
  }
}
