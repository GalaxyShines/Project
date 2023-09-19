var array={"荣耀手机":3999};//商品价目表
var inventory={"荣耀手机":3};//商品库存表
var salePrice={"荣耀手机":0.9};
var name=prompt("请输入商品名称");
var nums=parseInt(prompt("请输入购买数量"));
var address=prompt("请输入收货地址");
if (name in array){
    if (inventory[name]>0){
        var amount=parseInt(array[name]);
    }else{
        alert("库存不足");
        console.log(name+"库存不足");
    }
}else{
    window.alert("该商品不存在");
}
var get=document.querySelectorAll("table")[0].querySelectorAll("tr")[1].querySelectorAll("td");
get[0].innerHTML=name;
get[1].innerHTML=amount;
get[2].innerHTML=nums;
get[3].innerHTML=salePrice[name]*10+"折";
get[4].innerHTML=amount*nums*salePrice[name];
get[5].innerHTML=address;