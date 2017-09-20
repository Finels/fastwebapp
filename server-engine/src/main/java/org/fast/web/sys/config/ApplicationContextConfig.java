package org.fast.web.sys.config;

import org.fast.web.model.SpringScanTag;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

/**
 * Description:  spring上下文配置类
 * Copyright: © 2017 CSNT. All rights reserved.
 * Company: CSNT
 *
 * @author 付尧
 * @version 1.0
 * @timestamp 2017/9/20
 */
@Configuration
@ComponentScan(basePackageClasses = {SpringScanTag.class})
public class ApplicationContextConfig {
}
