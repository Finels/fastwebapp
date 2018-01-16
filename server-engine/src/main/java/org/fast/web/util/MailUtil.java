package org.fast.web.util;

import com.sun.mail.util.MailSSLSocketFactory;
import org.fast.web.sys.config.SpringContextUtil;
import org.fast.web.sys.exception.BizException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;
import java.io.*;
import java.nio.Buffer;
import java.util.Properties;
import java.util.concurrent.Executor;
import java.util.concurrent.Executors;

/**
 * Description:  邮件发送帮助类
 * Copyright: © 2017 CSNT. All rights reserved.
 * Company: CSNT
 *
 * @author 付尧
 * @version 1.0
 * @timestamp 2018/1/16
 */
@Component
public class MailUtil {

    private static SpringContextUtil contextUtil;

    private static Executor executor = Executors.newFixedThreadPool(30);

    @Autowired
    public void setContextUtil(SpringContextUtil contextUtil) {
        MailUtil.contextUtil = contextUtil;
    }

    public static void sendMail(String to, String code) {

        Runnable task = new Runnable() {
            @Override
            public void run() {
                Properties props = new Properties();
                // 发送服务器需要身份验证
                props.setProperty("mail.smtp.auth", "true");
                // 设置邮件服务器主机名
                props.setProperty("mail.host", "smtp.163.com");
                // 发送邮件协议名称
                props.setProperty("mail.transport.protocol", "smtp");

                Multipart mainpart = new MimeMultipart();
                BodyPart html = new MimeBodyPart();
                MailSSLSocketFactory sf = null;

                try {
                    //开启ssl访问协议
                    sf = new MailSSLSocketFactory();
                    sf.setTrustAllHosts(true);
                    props.put("mail.smtp.ssl.enable", "true");
                    props.put("mail.smtp.ssl.socketFactory", sf);

                    Session session = Session.getInstance(props);
                    Message msg = new MimeMessage(session);

                    html.setContent(getMailHtml(code), "text/html; charset=utf-8");
                    mainpart.addBodyPart(html);

                    msg.setSubject("Asia-Pacific Society for Immunodeficiencies");
                    msg.setContent(mainpart);
                    msg.setFrom(new InternetAddress("anyunfei3@163.com"));

                    Transport transport = session.getTransport();
                    transport.connect("smtp.163.com", 465, "anyunfei3@163.com", "fjywokao4");
                    transport.sendMessage(msg, new Address[]{new InternetAddress(to)});
                    transport.close();
                } catch (Exception e) {
                    e.printStackTrace();
                    throw new BizException("send mail", "fail", "注册邮件发送失败，请重试", HttpStatus.BAD_GATEWAY);
                }
            }
        };
        executor.execute(task);
    }

    /**
     * 读取模板文件mail.html中的html代码
     *
     * @return
     */
    public static String getMailHtml(String code) {
        StringBuilder result = new StringBuilder();
        try {
            BufferedReader br = new BufferedReader(new InputStreamReader(SpringContextUtil.getApplicationContext().getResource("/WEB-INF/template/mail.html").getInputStream(), "UTF-8"));
            String s = null;
            while ((s = br.readLine()) != null) {//使用readLine方法，一次读一行
                result.append(System.lineSeparator() + s);
            }
            br.close();
        } catch (Exception e) {
            e.printStackTrace();
            throw new BizException("get mail html", "fail", "找不到邮件模板文件，请重试", HttpStatus.BAD_GATEWAY);
        }
        //替换指定字符串
        return result.toString().replace("${code}", code);
    }
}
