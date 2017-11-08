package org.fast.web.sys.exception;

/**
 * Description:  Bizexception
 * Copyright: © 2017 CSNT. All rights reserved.
 * Company: CSNT
 *
 * @author 付尧
 * @version 1.0
 * @timestamp 2017/11/8
 */
public class Bizexception extends RuntimeException {
    private String errorCode;
    private String errorDescription;

    public Bizexception(String errorCode) {
        super(new Exception());
        this.errorCode = errorCode;
        this.errorDescription = "未知错误。";
    }

    public Bizexception(String errorCode, String errorDescription) {
        this.errorCode = errorCode;
        this.errorDescription = errorDescription;
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
