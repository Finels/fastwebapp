package org.fast.web.sys.config;

import bitronix.tm.resource.jdbc.PoolingDataSource;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.core.env.Environment;
import org.springframework.orm.jpa.JpaVendorAdapter;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.Database;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;

import javax.sql.DataSource;
import java.util.Properties;

/**
 * Description:  启用spring-data-jpa作为orm
 * Copyright: © 2017 CSNT. All rights reserved.
 * Company: CSNT
 *
 * @author 付尧
 * @version 1.0
 * @timestamp 2017/11/3
 */
@Configuration
public class OrmJpaConfig {

    /**
     * mysql次数据源
     *
     * @param env
     * @return
     */
    @Bean
    public DataSource dataSourceJpa(Environment env) {
        PoolingDataSource dataSource = new PoolingDataSource();
        dataSource.setClassName("bitronix.tm.resource.jdbc.lrc.LrcXADataSource");
        dataSource.setUniqueName("datasource#1");
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
    public JpaVendorAdapter jpaVendorAdapter() {
        HibernateJpaVendorAdapter adapter = new HibernateJpaVendorAdapter();
        adapter.setDatabase(Database.MYSQL);
        adapter.setShowSql(true);
        adapter.setGenerateDdl(false);
        adapter.setDatabasePlatform("org.hibernate.dialect.MySQLDialect");
        return adapter;
    }

    /**
     * spring-data-jpa相关配置实现类
     * <p>
     * 如果声明bean时不指定name，那么方法名会默认映射为bean-name，而EntityManagerFactory类默认的bean-name刚好为entityManagerFactory
     */
    @Bean(name = "entityManagerFactory")
    public LocalContainerEntityManagerFactoryBean setEntityManagerFactory(@Qualifier("dataSourceJpa") DataSource datasource, JpaVendorAdapter jpaVendorAdapter) {
        LocalContainerEntityManagerFactoryBean entityManagerFactoryBean = new LocalContainerEntityManagerFactoryBean();
        entityManagerFactoryBean.setPackagesToScan(new String[]{"org.fast.web.domain", "org.fast.web.dao"});
        entityManagerFactoryBean.setDataSource(datasource);
        entityManagerFactoryBean.setJpaVendorAdapter(jpaVendorAdapter);
        return entityManagerFactoryBean;
    }
}
