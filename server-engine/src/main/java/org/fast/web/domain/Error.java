package org.fast.web.domain;

/**
 * Description:  Error消息体
 * Copyright: © 2017 CSNT. All rights reserved.
 * Company: CSNT
 *
 * @author 付尧
 * @version 1.0
 * @timestamp 2017/11/8
 */
public class Error {

    private String apiName;
    private String errorCode;
    private String errorDescription;
    private String errorStack;
    private String redirectUrl;

    public Error(String apiName, String errorCode, String errorDescription, String errorStack, String redirectUrl) {
        this.errorCode = errorCode;
        this.errorDescription = errorDescription;
        this.redirectUrl = redirectUrl;
        this.apiName = apiName;
        this.errorStack = errorStack;
    }

    public String getErrorStack() {
        return errorStack;
    }

    public void setErrorStack(String errorStack) {
        this.errorStack = errorStack;
    }

    public String getApiName() {
        return apiName;
    }

    public void setApiName(String apiName) {
        this.apiName = apiName;
    }

    public String getRedirectUrl() {
        return redirectUrl;
    }

    public void setRedirectUrl(String redirectUrl) {
        this.redirectUrl = redirectUrl;
    }

    public String getErrorCode() {
        return errorCode;
    }

    public void setErrorCode(String errorCode) {
        this.errorCode = errorCode;
    }

    public String getErrorDescription() {
        return errorDescription;
    }

    public void setErrorDescription(String errorDescription) {
        this.errorDescription = errorDescription;
    }
}
