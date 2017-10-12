package org.fast.web.sys.config;

import bitronix.tm.BitronixTransactionManager;
import bitronix.tm.TransactionManagerServices;
import bitronix.tm.resource.jdbc.PoolingDataSource;
import org.fast.web.model.ModelScanTag;
import org.fast.web.sys.SystemScanTag;
import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.BeanFactoryUtils;
import org.springframework.beans.factory.FactoryBean;
import org.springframework.beans.factory.annotation.Autowire;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.config.BeanPostProcessor;
import org.springframework.beans.factory.config.PropertiesFactoryBean;
import org.springframework.beans.factory.config.PropertyPlaceholderConfigurer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.support.PropertySourcesPlaceholderConfigurer;
import org.springframework.core.env.Environment;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.dao.annotation.PersistenceExceptionTranslationPostProcessor;
import org.springframework.orm.hibernate4.LocalSessionFactoryBean;
import org.springframework.orm.jpa.JpaVendorAdapter;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.Database;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.jta.JtaTransactionManager;

import javax.sql.DataSource;
import java.io.FileReader;
import java.io.IOException;
import java.io.Reader;
import java.util.*;

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
@PropertySource({"WEB-INF/classes/database.properties", "WEB-INF/classes/mongo.properties"})
public class ApplicationContextConfig {

    /**
     * 配置properties
     */
    @Bean
    public PropertySourcesPlaceholderConfigurer setProperties(SpringContextUtil contextUtil) throws IOException {
        PropertySourcesPlaceholderConfigurer placeholderConfigurer = new PropertySourcesPlaceholderConfigurer();
        Resource r = contextUtil.getApplicationContext().getResource("WEB-INF/classes/database.properties");
        Resource mongoConfig = contextUtil.getApplicationContext().getResource("WEB-INF/classes/mongo.properties");
        placeholderConfigurer.setLocations(new Resource[]{r, mongoConfig});
        return placeholderConfigurer;
    }

    /**
     * mysql主数据源
     *
     * @param env
     * @return
     */
    @Bean
    public DataSource setDataSource(Environment env) {
        PoolingDataSource dataSource = new PoolingDataSource();
        dataSource.setClassName("bitronix.tm.resource.jdbc.lrc.LrcXADataSource");
        dataSource.setUniqueName("dataSourceProd");
        dataSource.setMinPoolSize(Integer.parseInt(env.getProperty("minPoolSize")));
        dataSource.setMaxPoolSize(Integer.parseInt(env.getProperty("maxPoolSize")));
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
        database.put("driverClassName", env.getProperty("driverClassName"));
        database.put("url", env.getProperty("url"));
        database.put("user", env.getProperty("user"));
        database.put("password", env.getProperty("password"));
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

//    @Bean
//    public LocalSessionFactoryBean sessionFactory(DataSource dataSource) {
//        LocalSessionFactoryBean sfb = new LocalSessionFactoryBean();
//        sfb.setDataSource(dataSource);
//        sfb.setPackagesToScan(new String[]{"org.fast.web.domain"});
//        Properties properties = new Properties();
//        properties.setProperty("dialect", "org.hibernate.dialect.MySQLDialect");
//        sfb.setHibernateProperties(properties);
//        return sfb;
//    }


    /**
     * spring-data-jpa相关配置实现类
     *
     * @param dataSource
     * @param jpaVendorAdapter
     * @return
     */
    @Bean
    public LocalContainerEntityManagerFactoryBean entityManagerFactory(DataSource dataSource, JpaVendorAdapter jpaVendorAdapter) {
        LocalContainerEntityManagerFactoryBean emf = new LocalContainerEntityManagerFactoryBean();
        emf.setPackagesToScan("org.fast.web.domain");
        emf.setDataSource(dataSource);
        emf.setJpaVendorAdapter(jpaVendorAdapter);
        return emf;
    }

    @Bean
    public BeanPostProcessor persistenceTranslation() {
        return new PersistenceExceptionTranslationPostProcessor();
    }

    /**
     * 配置事务管理，
     * 当前使用的是jta事务管理器，支持多数据源即分布式事务管理
     *
     * @return
     */
    @Bean(name = "transactionManager")
    public JtaTransactionManager setTransactionManager(BitronixTransactionManager btm) {
        JtaTransactionManager transactionManager = new JtaTransactionManager();
        transactionManager.setTransactionManager(btm);
        transactionManager.setUserTransaction(btm);
        return transactionManager;
    }

    /**
     * 配置关系型数据源的事务管理器，采用bitronix
     */
    @Bean(destroyMethod = "shutdown")
    public BitronixTransactionManager setBitronixTransactionManager() {
        return TransactionManagerServices.getTransactionManager();
    }

}
