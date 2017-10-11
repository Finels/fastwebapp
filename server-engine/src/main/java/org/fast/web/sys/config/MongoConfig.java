package org.fast.web.sys.config;

import com.mongodb.Mongo;
import com.mongodb.MongoCredential;
import org.fast.web.dao.DaoScanTag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.data.mongodb.config.MongoCredentialPropertyEditor;
import org.springframework.data.mongodb.core.MongoClientFactoryBean;
import org.springframework.data.mongodb.core.MongoFactoryBean;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

/**
 * Created by Administrator on 2017/10/10.
 */
@Configuration
@EnableMongoRepositories(basePackageClasses = DaoScanTag.class)
public class MongoConfig {
    @Autowired
    private Environment env;

    /**
     * 设置mongoDB的访问地址，并返回一个MongoClient
     * 之所以使用factorybean的方式生成MongoClient是因为，可以将mongoDB产生的异常由factorybean自动转换，就不再需要手动处理了
     *
     * @return
     */
    @Bean
    public MongoClientFactoryBean mongo() {
        MongoClientFactoryBean mongo = new MongoClientFactoryBean();
        mongo.setHost(env.getProperty("mongo.host"));
        mongo.setPort(Integer.parseInt(env.getProperty("mongo.port")));
        //设置mongo连接凭证数据
        MongoCredential credential = MongoCredential.createCredential(env.getProperty("mongo.username"), env.getProperty("mongo.db"), env.getProperty("mongo.password").toCharArray());
        mongo.setCredentials(new MongoCredential[]{credential});
        return mongo;
    }

    /**
     * 此处需要设置数据库名
     * 虽然我们使用自动化Repository，但是其本质依然会调用template，所以在这里需要声明一个mongoTemplate
     *
     * @param mongo
     * @return
     */
    @Bean
    public MongoOperations mongoTemplate(Mongo mongo) {
        return new MongoTemplate(mongo, env.getProperty("mongo.db"));
    }
}
