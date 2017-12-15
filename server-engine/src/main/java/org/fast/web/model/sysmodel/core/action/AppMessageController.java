package org.fast.web.model.sysmodel.core.action;

import org.fast.web.domain.FastUser;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.stereotype.Controller;

/**
 * Description:  AppMessageController
 * Copyright: © 2017 CSNT. All rights reserved.
 * Company: CSNT
 *
 * @author 付尧
 * @version 1.0
 * @timestamp 2017/11/30
 */
@Controller
public class AppMessageController {

    private static final Logger logger = LoggerFactory.getLogger(AppMessageController.class);

    @MessageMapping("/marco")
    public void handleShout(FastUser user) {
        System.out.println("Received message:" + user.getUsername());
    }

}
