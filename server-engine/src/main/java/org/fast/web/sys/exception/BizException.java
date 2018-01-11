package org.fast.web.sys.exception;

import org.springframework.http.HttpStatus;

import java.util.HashMap;
import java.util.Map;

/**
 * Description:  BizException
 * Copyright: © 2017 CSNT. All rights reserved.
 * Company: CSNT
 *
 * @author 付尧
 * @version 1.0
 * @timestamp 2017/12/19
 */
public class BizException extends RuntimeException {
    private String apiName;
    private String exceptionMsg;
    private String errorCode;
    private HttpStatus httpStatus;
    private Map contextMap;

    public BizException(String apiName) {
        super(new Exception());
        this.apiName = apiName;
        this.exceptionMsg = "";
        this.contextMap = new HashMap();
    }

    public BizException(String apiName, Map contextMap) {
        super(new Exception());
        this.apiName = apiName;
        this.exceptionMsg = "";
        this.contextMap = contextMap;
    }

    public BizException(String apiName, String exceptionMsg, String errorCode, HttpStatus httpStatus, Map contextMap) {
        super(new Exception());
        this.apiName = apiName;
        this.exceptionMsg = exceptionMsg;
        this.errorCode = errorCode;
        this.httpStatus = httpStatus;
        this.contextMap = contextMap;
    }

    public BizException(String apiName, String errorCode, String exceptionMsg, HttpStatus httpStatus) {
//        super(new Exception());
        this.apiName = apiName;
        this.exceptionMsg = exceptionMsg;
        this.errorCode = errorCode;
        this.httpStatus = httpStatus;
    }

    public BizException(String apiName, Map contextMap, Throwable t) {
        super(t);
        this.apiName = apiName;
        this.exceptionMsg = "";
        this.contextMap = contextMap;
    }

    public HttpStatus getHttpStatus() {
        return httpStatus;
    }

    public void setHttpStatus(HttpStatus httpStatus) {
        this.httpStatus = httpStatus;
    }

    public String getApiName() {
        return apiName;
    }

    public void setApiName(String apiName) {
        this.apiName = apiName;
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

    public String getErrorCode() {
        return this.errorCode;
    }

    public void setErrorCode(String errorCode) {
        this.errorCode = errorCode;
    }
}