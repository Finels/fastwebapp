package org.fast.web.sys.config;

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
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.dao.annotation.PersistenceExceptionTranslationPostProcessor;
import org.springframework.orm.hibernate4.LocalSessionFactoryBean;
import org.springframework.orm.jpa.JpaVendorAdapter;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.Database;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;

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
public class ApplicationContextConfig {

    /**
     * 配置properties
     */
    @Bean(name = "sysConfig")
    public Properties setProperties(SpringContextUtil contextUtil) throws IOException {
        Properties properties = new Properties();
        Resource r = contextUtil.getApplicationContext().getResource("WEB-INF/classes/database.properties");
        FileReader reader = new FileReader(r.getFile());
        properties.load(reader);
        return properties;
    }

    @Bean
    public DataSource setDataSource(@Qualifier("sysConfig") Properties sysConfig) {
        PoolingDataSource dataSource = new PoolingDataSource();
        dataSource.setClassName("bitronix.tm.resource.jdbc.lrc.LrcXADataSource");
        dataSource.setUniqueName("dataSourceProd");
        dataSource.setMinPoolSize(Integer.parseInt(sysConfig.getProperty("minPoolSize")));
        dataSource.setMaxPoolSize(Integer.parseInt(sysConfig.getProperty("maxPoolSize")));
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
        database.put("driverClassName", sysConfig.getProperty("driverClassName"));
        database.put("url", sysConfig.getProperty("url"));
        database.put("user", sysConfig.getProperty("user"));
        database.put("password", sysConfig.getProperty("password"));
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


}
