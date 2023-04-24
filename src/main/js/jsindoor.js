

/*
    此为注释
 */
var newTime=new Date();
document.write(newTime);

var resultAa=false;
resultAa=1000==1000;
document.write(resultAa);

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var userAdmin="admin";
    var passwd = "123456";
    // 在此处执行验证逻辑，例如使用 AJAX 向服务器发送请求
    if (userAdmin===username && passwd===password) {
        alert("登录成功，普通弹窗");
        // 如果验证成功，重定向到某个页面
       var res= confirm("确认弹窗，是否要跳转下个页面");
       if (res) {
           window.location.href = "https://www.baidu.com/";
       }else {
           var res1=prompt("输入内容：");
           if (res1) {
               alert(res1);
           }else {
               alert("完蛋玩意");
           }
       }
    }else {
        alert("登录失败");
    }


}