<%--
  Created by IntelliJ IDEA.
  User: FL
  Date: 2017/9/20
  Time: 13:57
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>备份恢复和数据迁移平台</title>
    <link rel="stylesheet" href="/bootstrap-3.3.7-dist/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="/bootstrap-3.3.7-dist/css/bootstrap-theme.min.css"/>
</head>
<body>
<div class="container bs-docs-container">
    <div class="row" style="margin: 40px">
        <div style="text-align: center" class="col-md-12">
            <h1>备份恢复和数据迁移平台</h1>
        </div>
    </div>

    <div class="row">
        <div class="col-md-12">
            <form style="text-align: center" class="bs-example bs-example-form">
                <div class="input-group" style="margin: 20px">
                    <span class="input-group-addon" id="fastlogin_username" fastId="username">用户名</span>
                    <input type="text" class="form-control" placeholder="输入用户名" aria-describedby="fastlogin_username"
                           AUTOCOMPLETE="off">
                </div>
                <div class="input-group">
                    <span class="input-group-addon" id="fastlogin_password"
                          fastId="password">密&nbsp;&nbsp;&nbsp;码</span>
                    <input type="password" class="form-control" placeholder="输入密码"
                           aria-describedby="fastlogin_password"
                           AUTOCOMPLETE="off">
                </div>
                <a href="javascript:void(0)" id="index_login" class="btn btn-primary" role="button"
                   style="width: 200px;margin: 20px">登录</a>
            </form>
        </div>
    </div>
</div>

<script src="/js/jquery.js"></script>
<script src="/bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>
<script src="/js/browser_main.js"></script>
<script src="/js/init_index.js"></script>

</body>
</html>
