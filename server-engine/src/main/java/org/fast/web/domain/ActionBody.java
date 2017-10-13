package org.fast.web.domain;

import org.apache.struts2.json.JSONException;
import org.apache.struts2.json.JSONUtil;
import org.fast.web.util.StringUtil;

import java.util.ArrayList;
import java.util.Map;

/**
 * Description:  BillcardinoutManager
 * Copyright: © 2017 CSNT. All rights reserved.
 * Company: CSNT
 *
 * @author 付尧
 * @version 1.0
 * @timestamp 2017/10/13
 */
public class ActionBody {
    private String actionUrl;
    private String postData;
    private Map postMap;

    public String getActionUrl() {
        return actionUrl;
    }

    public void setActionUrl(String actionUrl) {
        this.actionUrl = actionUrl;
    }

    public String getPostData() {
        return postData;
    }

    public void setPostData(String postData) {
        this.postData = postData;
    }

    public Map getPostMap() throws JSONException {
        Map inMap = (Map) JSONUtil.deserialize(this.postData);
        inMap.put("requestDataJson", this.actionUrl + "\n" + StringUtil.replaceLast(this.postData.replaceAll("\"signature\":\"[a-z0-9]+\"", ""), ",", ""));
        return inMap;
    }

    public void setPostMap(Map postMap) {
        this.postMap = postMap;
    }
}
