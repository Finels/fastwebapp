package org.fast.web.util;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.fast.web.sys.config.SpringContextUtil;
import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.BeanFactoryUtils;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * Description:  SqlSessionCurdManager
 * Copyright: © 2017 CSNT. All rights reserved.
 * Company: CSNT
 *
 * @author 付尧
 * @version 1.0
 * @timestamp 2017/11/17
 */
public class SqlSessionCurdManager {
    @Autowired
    private SpringContextUtil contextUtil;

    public SqlSession getInstance() {
        return ((SqlSessionFactory) contextUtil.getApplicationContext().getBean("sqlSessionFactory")).openSession();
    }
}
