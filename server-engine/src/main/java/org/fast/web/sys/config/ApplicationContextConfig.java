package org.fast.web.sys.config;

import bitronix.tm.resource.jdbc.PoolingDataSource;
import org.fast.web.model.ModelScanTag;
import org.fast.web.sys.SystemScanTag;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.orm.hibernate4.LocalSessionFactoryBean;

import javax.sql.DataSource;
import java.util.Properties;

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
@ComponentScan(basePackageClasses = {ModelScanTag.class, SystemScanTag.class})
public class ApplicationContextConfig {

    private Properties properties = new PropertiesHelper("database").getProperties();

    @Bean
    public DataSource setDataSource() {
        PoolingDataSource dataSource = new PoolingDataSource();
        dataSource.setClassName("bitronix.tm.resource.jdbc.lrc.LrcXADataSource");
        dataSource.setUniqueName("dataSourceProd");
        dataSource.setMinPoolSize(Integer.parseInt(properties.getProperty("minPoolSize")));
        dataSource.setMaxPoolSize(Integer.parseInt(properties.getProperty("maxPoolSize")));
        dataSource.setIsolationLevel("READ_COMMITTED");
        dataSource.setMaxIdleTime(300);
        dataSource.setAcquireIncrement(2);
        dataSource.setAcquisitionInterval(1);
        dataSource.setAcquisitionTimeout(2);
        dataSource.setDeferConnectionRelease(true);
        dataSource.setAllowLocalTransactions(true);
        dataSource.setApplyTransactionTimeout(true);
        dataSource.setShareTransactionConnections(true);
        dataSource.setDriverProperties(properties);
        return dataSource;
    }

    @Bean
    public LocalSessionFactoryBean sessionFactory(DataSource dataSource) {
        LocalSessionFactoryBean sfb = new LocalSessionFactoryBean();
        sfb.setDataSource(dataSource);
        sfb.setPackagesToScan(new String[]{"org.fast.web.domain"});
        Properties properties = new Properties();
        properties.setProperty("dialect", "org.hibernate.dialect.H2Dialect");
        sfb.setHibernateProperties(properties);
        return sfb;
    }


}
