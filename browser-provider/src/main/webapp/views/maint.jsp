<%--
  Created by IntelliJ IDEA.
  User: FL
  Date: 2017/10/13
  Time: 14:34
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
    <div class="row">
        <div class="col-md-12">
            <div class="bs-docs-section">
                <p class="lead">业务表 <code>uuid</code> 必填。对应表名
                    <code>targetTableName</code>选填，但是需要自行确保业务表UUID的正确性。附件路径<code>fileUrl</code>选填，若已填写了<code>targetTableName</code>则该项可不填，反之必填。
                </p>

                <div class="bs-callout bs-callout-danger">
                    <h4>username</h4>

                    <div class="input-group">
                        <input type="text" id="username" class="form-control" placeholder="Username"
                               aria-describedby="basic-addon1">
                    </div>
                    <p>多个uuid，请使用;号分隔</p>
                </div>

                <div class="bs-callout bs-callout-danger">
                    <h4>password</h4>

                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Username" aria-describedby="basic-addon1"
                               id="password">
                    </div>
                    <p>多个uuid，请使用;号分隔</p>
                </div>
                <button id="do_save">提交</button>

            </div>
        </div>
    </div>

</div>


<script src="/js/jquery.js"></script>
<script src="/bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>
<script src="/js/browser_main.js"></script>

<script src="/js/maint.js"></script>

</body>
</html>
