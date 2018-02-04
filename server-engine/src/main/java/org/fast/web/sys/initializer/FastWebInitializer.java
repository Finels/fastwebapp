package org.fast.web.sys.initializer;

import org.fast.web.sys.config.ApplicationContextConfig;
import org.fast.web.sys.config.WebConfig;
import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;

/**
 * Description:  WebInitializer
 * Copyright: © 2017 CSNT. All rights reserved.
 * Company: CSNT
 *
 * @author 付尧
 * @version 1.0
 * @timestamp 2017/9/30
 */
public class FastWebInitializer extends AbstractAnnotationConfigDispatcherServletInitializer {
    @Override
    protected Class<?>[] getRootConfigClasses() {
        return new Class<?>[]{ApplicationContextConfig.class
        };
    }

    @Override
    protected Class<?>[] getServletConfigClasses() {
        return new Class<?>[]{WebConfig.class};
    }

    @Override
    protected String[] getServletMappings() {
        return new String[]{"*.action"};
    }

//    @Override
//    public void onStartup(ServletContext servletContext) throws ServletException {
//        super.onStartup(servletContext);
//        servletContext.setInitParameter("spring.profiles.active", "mybatis");
//    }
}
