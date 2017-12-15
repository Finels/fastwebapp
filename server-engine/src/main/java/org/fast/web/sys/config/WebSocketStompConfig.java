package org.fast.web.sys.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.config.annotation.AbstractWebSocketMessageBrokerConfigurer;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;

/**
 * Description:  stomp配置文件
 * Copyright: © 2017 CSNT. All rights reserved.
 * Company: CSNT
 *
 * @author 付尧
 * @version 1.0
 * @timestamp 2017/11/30
 */
@Configuration
@EnableWebSocketMessageBroker
public class WebSocketStompConfig extends AbstractWebSocketMessageBrokerConfigurer {
    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        //为路径点/marcopolo 启用sockJS功能
        registry.addEndpoint("/marcopolo").withSockJS();
    }

    @Override
    public void configureMessageBroker(org.springframework.messaging.simp.config.MessageBrokerRegistry registry) {
        registry.enableSimpleBroker("/queue", "/topic");
        registry.setApplicationDestinationPrefixes("/app");
    }
}
