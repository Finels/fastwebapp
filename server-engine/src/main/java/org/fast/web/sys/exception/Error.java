package org.fast.web.sys.exception;

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

    private String errorCode;
    private String errorDescription;
    private String redirectUrl;

    public Error(String errorCode, String errorDescription, String redirectUrl) {
        this.errorCode = errorCode;
        this.errorDescription = errorDescription;
        this.redirectUrl = redirectUrl;
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
