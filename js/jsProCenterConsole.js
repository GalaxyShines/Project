// 控制台页面的JavaScript代码 - console.js

// 获取DOM元素
var addBtn = document.getElementById('add-btn');
var contentList = document.getElementById('content-list');

// 从本地存储中获取已添加的内容
var savedContent = localStorage.getItem('content');
if (savedContent) {
  contentList.innerHTML = savedContent;
}

// 添加按钮的点击事件处理函数
addBtn.addEventListener('click', function() {
  var content = prompt('请输入要添加的内容：');
  if (content) {
    var li = document.createElement('li');
    li.textContent = content;

    // 为每个li元素添加删除按钮
    var deleteBtn = document.createElement('button');
    deleteBtn.textContent = '删除';
    deleteBtn.addEventListener('click', function() {
      contentList.removeChild(li);
    });

    li.appendChild(deleteBtn);
    contentList.appendChild(li);

    // 将更新后的内容保存到本地存储
    localStorage.setItem('content', contentList.innerHTML);
  }
});
