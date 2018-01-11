package org.fast.web.sys.exception;

import java.util.HashMap;
import java.util.Map;

/**
 * Description:  SysException
 * Copyright: © 2017 CSNT. All rights reserved.
 * Company: CSNT
 *
 * @author 付尧
 * @version 1.0
 * @timestamp 2017/12/19
 */
public class SysException extends RuntimeException {
    private String apiName;
    private String exceptionKey;
    private String exceptionMsg;
    private String stackMsg;
    private Map contextMap;

    public SysException(String exceptionKey) {
        super(new Exception());
        this.exceptionKey = exceptionKey;
        this.exceptionMsg = "";
        this.stackMsg = "";
        this.contextMap = new HashMap();
    }

    public SysException(Throwable t) {
        super(t);
        this.exceptionKey = "RUNTIME_ERROR";
        this.exceptionMsg = "";
        this.stackMsg = "";
        this.contextMap = new HashMap();
    }

    public SysException(String exceptionKey, Map contextMap) {
        super(new Exception());
        this.exceptionKey = exceptionKey;
        this.exceptionMsg = "";
        this.stackMsg = "";
        this.contextMap = contextMap;
    }

    public SysException(String exceptionKey, Throwable t) {
        super(t);
        this.exceptionKey = exceptionKey;
        this.exceptionMsg = "";
        this.stackMsg = "";
        this.contextMap = new HashMap();
    }

    public SysException(String exceptionKey, Map contextMap, Throwable t) {
        super(t);
        this.exceptionKey = exceptionKey;
        this.exceptionMsg = "";
        this.stackMsg = "";
        this.contextMap = contextMap;
    }

    public SysException(String apiName, String exceptionKey, String exceptionMsg, String stackMsg) {
        super(new Exception());
        this.apiName = apiName;
        this.exceptionKey = exceptionKey;
        this.exceptionMsg = exceptionMsg;
        this.stackMsg = stackMsg;
    }

    public String getApiName() {
        return apiName;
    }

    public void setApiName(String apiName) {
        this.apiName = apiName;
    }

    public String getExceptionKey() {
        return this.exceptionKey;
    }

    public void setExceptionKey(String exceptionKey) {
        this.exceptionKey = exceptionKey;
    }

    public Map getContextMap() {
        return this.contextMap;
    }

    public void setContextMap(Map contextMap) {
        this.contextMap = contextMap;
    }

    public String getExceptionMsg() {
        return this.exceptionMsg;
    }

    public void setExceptionMsg(String exceptionMsg) {
        this.exceptionMsg = exceptionMsg;
    }

    public String getStackMsg() {
        return this.stackMsg;
    }

    public void setStackMsg(String stackMsg) {
        this.stackMsg = stackMsg;
    }
}
