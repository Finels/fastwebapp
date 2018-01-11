package org.fast.web.model.sysmodel.core.action;

import org.fast.web.domain.Warn;
import org.fast.web.domain.Error;
import org.fast.web.sys.exception.BizException;
import org.fast.web.sys.exception.SysException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import javax.servlet.http.HttpServletRequest;

/**
 * Description:  AdviceController
 * Copyright: © 2017 CSNT. All rights reserved.
 * Company: CSNT
 *
 * @author 付尧
 * @version 1.0
 * @timestamp 2018/1/8
 */
@ControllerAdvice
public class AdviceController {

    @ExceptionHandler({BizException.class})
    public ResponseEntity exception(BizException e, HttpServletRequest request) {
        return new ResponseEntity<Warn>(new Warn(e.getApiName(), e.getErrorCode(), e.getExceptionMsg(), request.getContextPath()), e.getHttpStatus());
    }

    @ExceptionHandler({SysException.class})
    public ResponseEntity exception(SysException e, HttpServletRequest request) {
        return new ResponseEntity<Error>(new Error(e.getApiName(), e.getExceptionKey(), e.getExceptionMsg(), e.getStackMsg(), request.getContextPath()), HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
