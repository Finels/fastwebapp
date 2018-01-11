package org.fast.web.domain;

/**
 * Description:  Warn
 * Copyright: © 2017 CSNT. All rights reserved.
 * Company: CSNT
 *
 * @author 付尧
 * @version 1.0
 * @timestamp 2017/12/24
 */
public class Warn {
    private String apiName;
    private String errorCode;
    private String errorDescription;
    private String redirectUrl;

    public Warn(String apiName,String errorCode, String errorDescription, String redirectUrl) {
        this.errorCode = errorCode;
        this.errorDescription = errorDescription;
        this.redirectUrl = redirectUrl;
        this.apiName = apiName;
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
