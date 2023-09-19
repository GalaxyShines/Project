var userPack = {
    '221335': '123456',
    '221303': '123456',
    '221312': '123456',
    'Admin': '123456'
}
var yuanshen = ['纳西妲', '宵宫', '钟离', '达达利亚', '温迪', '八重神子', '雷电将军', '神里绫人', '神里绫华'];
var toget = document.getElementById('getit');
toget.addEventListener('click', function () {
    func1()
});

function func1() {
    let getUID = getelemid('uid').value;
    let getPWD = getelemid('pwd').value;
    console.log('uid类型' + typeof getUID);
    console.log('pwd类型' + typeof getPWD);
    console.log('uid:' + getUID);
    console.log('pwd:' + getPWD);
    if (userPack[getUID] === getPWD) {
        getelemid('show').innerHTML = yuanshen[Math.floor(Math.random() * 10)];
        console.log('条件符合，执行完毕');
    } else {
        getelemid('show').innerHTML = "用户名或密码错误";
        console.log('条件不符合');
    }
}

function getelemid(name) {
    return document.getElementById(name);
}