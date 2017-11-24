/**
 * Created by FL on 2017/10/10.
 */
var Namespace = new Object();
Namespace.register = function (path) {
    var arr = path.split(".");
    var ns = "";
    for (var i = 0; i < arr.length; i++) {
        if (i > 0) ns += ".";
        ns += arr[i];
        eval("if(typeof(" + ns + ") == 'undefined') " + ns + " = new Object();");
    }
}

Namespace.register("BR");
Namespace.register("BR.Msg");
Namespace.register("BR.Const");
Namespace.register("BR.Utils");
Namespace.register("BR.DateUtils");

BR.doAjax = function (url, param, success, complete, error) {
    //param = JSON.stringify(param);
    //var params = {
    //    actionUrl: url,
    //    postData:
    //};
    $.ajax({
        //提交数据的类型 POST GET
        type: "POST",
        //提交的网址
        url: url,
        //提交的数据
        data: JSON.stringify(param),
        //返回数据的格式
        dataType: "json",//"xml", "html", "script", "json", "jsonp", "text".
        //jsonp:"callback",
        //jsonpCallback:"",
        contentType: "application/json",
        async: true,//true,false
        //在请求之前调用的函数
        beforeSend: function () {
        },
        //成功返回之后调用的函数
        success: success,//ret
        //调用执行后调用的函数
        complete: null,//XMLHttpRequest, textStatus
        //调用出错执行的函数
        error: error
    });
}