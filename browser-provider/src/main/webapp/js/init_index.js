/**
 * Created by FL on 2017/10/10.
 */
$(document).ready(function () {
    $("#index_login").click(function () {
        //获取用户名和密码
        var username = $("#fastlogin_username").val();
        var password = $("#fastlogin_password").val();
        var loginUrl = "/home/login.action";
        var replaceHost = $(this).context.baseURI;
        //Json.parse(String);
        //Json.stringify(Object);
        var user = {};
        user.username = username;
        user.password = password;
        user.nickname = null;
        // user.seq = null;
        // user.phone = null;
        BR.doAjax(loginUrl, user, function (ret) {
            window.location.replace(replaceHost + "views/maint.jsp");
        }, null, function (ret) {
            alert(ret.responseText.errorDescription);
        });
    });

});
