package org.fast.web.sys.config;

import org.fast.web.dao.DaoScanTag;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

/**
 * Description:  JpaConfiguration
 * Copyright: © 2017 CSNT. All rights reserved.
 * Company: CSNT
 *
 * @author 付尧
 * @version 1.0
 * @timestamp 2017/9/22
 */
@Configuration
@EnableJpaRepositories(basePackageClasses = {DaoScanTag.class})
public class JpaConfiguration {

}
