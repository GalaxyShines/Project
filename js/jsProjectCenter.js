// // jsProjectCenter.js

// // 找到控制台的li元素
// var consoleLi = document.querySelector('.ul-top li');

// // 添加点击事件监听器
// consoleLi.addEventListener('click', function() {
//   // 创建新窗口
//   var newWindow = window.open('', 'Content Window');

//   // 创建ul元素，用于显示内容列表
//   var ul = document.createElement('ul');
//   newWindow.document.body.appendChild(ul);

//   // 创建官网仿制的li元素，并添加到ul中
//   var li1 = document.createElement('li');
//   li1.textContent = '官网仿制';
//   ul.appendChild(li1);

//   // 创建个人创意的li元素，并添加到ul中
//   var li2 = document.createElement('li');
//   li2.textContent = '个人创意';
//   ul.appendChild(li2);

//   // 创建参考元素的li元素，并添加到ul中
//   var li3 = document.createElement('li');
//   li3.textContent = '参考元素';
//   ul.appendChild(li3);

//   // 为每个li元素添加点击事件监听器
//   li1.addEventListener('click', function() {
//     ul.removeChild(li1);
//   });

//   li2.addEventListener('click', function() {
//     ul.removeChild(li2);
//   });

//   li3.addEventListener('click', function() {
//     ul.removeChild(li3);
//   });
// });
// jsProjectCenter.js

var consoleLi = document.getElementById('console-li');

consoleLi.addEventListener('click', function() {
  window.open('./proCenterConsole.html', '_blank');
});
