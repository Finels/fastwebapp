package org.fast.web.dao;

import org.aspectj.lang.annotation.Aspect;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

import javax.persistence.Entity;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;

/**
 * Description:  BillcardinoutManager
 * Copyright: © 2017 CSNT. All rights reserved.
 * Company: CSNT
 *
 * @author 付尧
 * @version 1.0
 * @timestamp 2017/10/16
 */
public class DaoSC implements InvocationHandler {

    /**
     * 用于获取指定的代理类
     *
     * @param loader     被代理对象所指定的类加载器
     * @param interfaces 基于接口的类对象
     * @return
     */
    public static Class<?> getProxyClass(ClassLoader loader, Class<?>... interfaces) {
        return null;
    }

    /**
     * 用于生成动态代理类实例
     *
     * @param loader     被代理对象所指定的类加载器
     * @param interfaces 基于接口的类对象
     * @param h          动态代理的调用处理器（控制代理访问的关键）
     * @return
     */
    public static Object newProxyInstance(ClassLoader loader, Class<?>[] interfaces, InvocationHandler h) {
        return null;
    }

    /**
     * 获得指定代理类的调用处理器
     *
     * @param proxy 指定代理类
     * @return
     */
    public static InvocationHandler getInvocationHandler(Object proxy) {
        return null;
    }

    /**
     * 调用处理器的主要方法，用于预处理或发送消息到被代理类实例执行相关操作
     *
     * @param proxy  代理类示例
     * @param method 被调用的方法对象（通过反射获取）
     * @param args   被调用的方法对应的参数
     * @return
     * @throws Throwable
     */
    @Override
    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
        return null;
    }
}
