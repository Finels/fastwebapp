/**
 * Created by FL on 2017/10/10.
 */
Namespace.register("BR");
Namespace.register("BR.Msg");
Namespace.register("BR.Const");
Namespace.register("BR.Utils");
Namespace.register("BR.DateUtils");

BR.doAjax = function (url, param, success, complete, error) {
    $.ajax({
        //提交数据的类型 POST GET
        type: "POST",
        //提交的网址
        url: url,
        //提交的数据
        data: param,
        //返回数据的格式
        dataType: "json",//"xml", "html", "script", "json", "jsonp", "text".
        async: true,//true,false
        //在请求之前调用的函数
        beforeSend: function () {
        },
        //成功返回之后调用的函数
        success: success(ret),
        //调用执行后调用的函数
        complete: complete(XMLHttpRequest, textStatus),
        //调用出错执行的函数
        error: error
    });
}