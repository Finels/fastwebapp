package org.fast.web.domain;

import java.util.Map;

/**
 * Description:  RequestBean
 * Copyright: © 2017 CSNT. All rights reserved.
 * Company: CSNT
 *
 * @author 付尧
 * @version 1.0
 * @timestamp 2017/11/3
 */
public class ActionBody {
    private Map dataBody;
    private String signature;//签名，每次请求需要验证
    private String timestamp;//时间戳
    private String networkDelay;//当前网络延迟
    private String sessionId;

    public Map getDataBody() {
        return dataBody;
    }

    public void setDataBody(Map dataBody) {
        this.dataBody = dataBody;
    }

    public String getSignature() {
        return signature;
    }

    public void setSignature(String signature) {
        this.signature = signature;
    }

    public String getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(String timestamp) {
        this.timestamp = timestamp;
    }

    public String getNetworkDelay() {
        return networkDelay;
    }

    public void setNetworkDelay(String networkDelay) {
        this.networkDelay = networkDelay;
    }

    public String getSessionId() {
        return sessionId;
    }

    public void setSessionId(String sessionId) {
        this.sessionId = sessionId;
    }

    public ActionBody() {
    }

    public ActionBody(Map dataBody, String signature, String timestamp, String networkDelay, String sessionId) {
        this.dataBody = dataBody;
        this.signature = signature;
        this.timestamp = timestamp;
        this.networkDelay = networkDelay;
        this.sessionId = sessionId;
    }
}
