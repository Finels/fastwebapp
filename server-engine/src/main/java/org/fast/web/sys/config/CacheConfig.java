package org.fast.web.sys.config;

import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.cache.concurrent.ConcurrentMapCacheManager;
import org.springframework.cache.ehcache.EhCacheCacheManager;
import org.springframework.cache.ehcache.EhCacheManagerFactoryBean;
import org.springframework.cache.support.CompositeCacheManager;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.core.io.ClassPathResource;
import org.springframework.data.redis.cache.RedisCacheManager;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.connection.jedis.JedisConnectionFactory;
import org.springframework.data.redis.core.RedisTemplate;
import redis.clients.jedis.JedisPoolConfig;

import java.util.ArrayList;
import java.util.List;

/**
 * Description:  缓存管理器，包含redis和ehcache管理器
 * Copyright: © 2017 CSNT. All rights reserved.
 * Company: CSNT
 *
 * @author 付尧
 * @version 1.0
 * @timestamp 2017/9/25
 */
@Configuration
@EnableCaching
@Profile("ehcache")
public class CacheConfig {

    /**
     * 配置缓存管理器集合协调器，协调器可以集成多种缓存管理器，但是spring ioc容器中只能有一个cacheManager的实现bean
     * 协调器查找或存取缓存的顺序是根据集合内的先后顺序决定的
     *
     * @param cm
     * @param redisTemplate
     * @return
     */
    @Bean
    public CacheManager cacheManager(net.sf.ehcache.CacheManager cm, RedisTemplate redisTemplate) {
        CompositeCacheManager cacheManager = new CompositeCacheManager();

        List caches = new ArrayList<Object>() {
            {
                add(new EhCacheCacheManager(cm));
                add(new RedisCacheManager(redisTemplate));
            }
        };
        cacheManager.setCacheManagers(caches);
        return cacheManager;
    }




    @Bean
    public EhCacheManagerFactoryBean ehcache() {
        EhCacheManagerFactoryBean ehCacheManagerFactoryBean = new EhCacheManagerFactoryBean();
        ehCacheManagerFactoryBean.setConfigLocation(new ClassPathResource("org/fast/web/sys/cache/ehcache.xml"));
        return ehCacheManagerFactoryBean;
    }

//    @Bean
//    public EhCacheCacheManager ehcacheManager(CacheManager cm) {
//        return new EhCacheCacheManager(cm);
//    }

    @Bean
    public JedisPoolConfig config() {
        JedisPoolConfig config = new JedisPoolConfig();
        config.setMinEvictableIdleTimeMillis(1200000);//20分钟空闲超时断开连接
        config.setMinIdle(1);//保留一个空闲连接
        config.setTestOnBorrow(true);//检查连接有效性
        return config;
    }

    @Bean
    public JedisConnectionFactory redisConnectionFactory(JedisPoolConfig config) {
        JedisConnectionFactory jedisConnectionFactory = new JedisConnectionFactory();
        jedisConnectionFactory.setPoolConfig(config);
        jedisConnectionFactory.afterPropertiesSet();
        return jedisConnectionFactory;
    }

    @Bean
    public RedisTemplate<String, Object> redisTemplate(RedisConnectionFactory redisConnectionFactory) {
        RedisTemplate<String, Object> redisTemplate = new RedisTemplate<>();
        redisTemplate.setConnectionFactory(redisConnectionFactory);
        redisTemplate.afterPropertiesSet();
        return redisTemplate;
    }

}
