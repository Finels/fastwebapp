/**
 * Created by FL on 2017/11/27.
 */
$(document).ready(function () {
    $("#do_save").click(function () {
        //获取用户名和密码
        var username = $("#username").val();
        var password = $("#password").val();
        var saveUrl = "/home/save.action";
        var replaceHost = $(this).context.baseURI;
        //Json.parse(String);
        //Json.stringify(Object);
        var user = {};
        user.username = username;
        user.password = password;
        user.nickname = null;
        // user.seq = null;
        // user.phone = null;
        BR.doAjax(saveUrl, user, function (ret) {
            alert("success");
        }, null, function (ret) {
            alert(ret.responseText.errorDescription);
        });
    });

});
