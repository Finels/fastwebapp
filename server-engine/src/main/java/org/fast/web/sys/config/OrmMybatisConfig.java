package org.fast.web.sys.config;

import bitronix.tm.resource.jdbc.PoolingDataSource;
import org.apache.struts2.views.util.ContextUtil;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.core.env.Environment;

import javax.sql.DataSource;
import java.util.Properties;

/**
 * Description:  启用mybatis作为orm
 * Copyright: © 2017 CSNT. All rights reserved.
 * Company: CSNT
 *
 * @author 付尧
 * @version 1.0
 * @timestamp 2017/11/3
 */
@SuppressWarnings("Duplicates")
@Configuration
@Profile("mybatis")
public class OrmMybatisConfig {

    @Bean
    public DataSource dataSourceMybatis(Environment env) {
        PoolingDataSource dataSource = new PoolingDataSource();
        dataSource.setClassName("bitronix.tm.resource.jdbc.lrc.LrcXADataSource");
        dataSource.setUniqueName("datasource#2");
        dataSource.setMinPoolSize(Integer.parseInt(env.getProperty("ali.minPoolSize")));
        dataSource.setMaxPoolSize(Integer.parseInt(env.getProperty("ali.maxPoolSize")));
        dataSource.setIsolationLevel("READ_COMMITTED");
        dataSource.setMaxIdleTime(300);
        dataSource.setAcquireIncrement(2);
        dataSource.setAcquisitionInterval(1);
        dataSource.setAcquisitionTimeout(2);
        dataSource.setDeferConnectionRelease(true);
        dataSource.setAllowLocalTransactions(true);
        dataSource.setApplyTransactionTimeout(true);
        dataSource.setShareTransactionConnections(true);
        Properties database = new Properties();
        database.put("driverClassName", env.getProperty("ali.driverClassName"));
        database.put("url", env.getProperty("ali.url"));
        database.put("user", env.getProperty("ali.user"));
        database.put("password", env.getProperty("ali.password"));
        dataSource.setDriverProperties(database);
        return dataSource;
    }

    @Bean
    public SqlSessionFactoryBean sqlSessionFactory(@Qualifier("dataSourceMybatis") DataSource dataSource, SpringContextUtil contextUtil) {
        SqlSessionFactoryBean factoryBean = new SqlSessionFactoryBean();
        factoryBean.setDataSource(dataSource);
        factoryBean.setConfigLocation(contextUtil.getApplicationContext().getResource("WEB-INF/classes/mybatis-config.xml"));
        return factoryBean;
    }
}
