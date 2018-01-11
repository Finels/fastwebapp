package org.fast.web.model.sysmodel.core.action;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.tomcat.util.codec.binary.Base64;
import org.fast.web.dao.UserDao;
import org.fast.web.domain.ActionBody;
import org.fast.web.domain.ResultBody;
import org.fast.web.domain.User;
import org.fast.web.sys.config.SpringContextUtil;
import org.fast.web.sys.exception.BizException;
import org.fast.web.sys.exception.SysException;
import org.fast.web.util.BeanUtil;
import org.fast.web.util.StringUtil;
import org.fast.web.util.VerifyCodeUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.Caching;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.transaction.Transactional;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


/**
 * Description:  HomeController
 * Copyright: © 2017 CSNT. All rights reserved.
 * Company: CSNT
 *
 * @author 付尧
 * @version 1.0
 * @timestamp 2017/10/3
 */
@RestController
@Transactional
@RequestMapping("/home")
public class HomeController {

    @Autowired
    private UserDao userDao;

    @Autowired
    private SpringContextUtil contextUtil;

    private Logger logeger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private SqlSessionFactory sessionFactory;

    /**
     * 注册用户信息
     *
     * @param actionBody
     * @param request
     * @param response
     * @return
     */
    @RequestMapping(value = "/user.action", method = RequestMethod.POST)
    public ResponseEntity<ResultBody> register(@RequestBody ActionBody actionBody, HttpServletRequest request, HttpServletResponse response) {
        Map resultMap = new HashMap<>();
        Map params = actionBody.getDataBody();
        //验证验证码是否正确
        Object verifyCode = params.get("verCode");
        Object currentCode = request.getSession().getAttribute("verCode");
        if (!StringUtil.isNotEmpty(currentCode) && currentCode.equals(verifyCode)) {
            throw new BizException("verify", "fail", "验证码错误，请重试", HttpStatus.UNAUTHORIZED);
        }
        try {
            User currentUser = (User) BeanUtil.mapToObject(params, User.class);
            userDao.save(currentUser);
            //注册成功后，删除session中保存的验证码
            request.getSession().removeAttribute("verCode");
        } catch (Exception e) {
            e.printStackTrace();
            throw new SysException("get verifyCode", "fail", "注册失败，请重试", "BeanUtil:map to Object failed,check the stackTrace prints!");
        }
        return new ResponseEntity<ResultBody>(new ResultBody("register", "success", resultMap, null), HttpStatus.OK);
    }


    /**
     * 获取验证码图片流，验证码字符串缓存在HttpSession中
     *
     * @param request
     * @param response
     * @return
     */
    @RequestMapping(value = "/very.action", method = RequestMethod.GET)
    public ResponseEntity<ResultBody> generateVerifyImg(HttpServletRequest request, HttpServletResponse response) {
        Map resultMap = new HashMap<>();
        //生成随机字串
        String verifyCode = VerifyCodeUtils.generateVerifyCode(4);
        //生成图片
        int w = 100, h = 30;
        ByteArrayOutputStream os = new ByteArrayOutputStream();
        String verifyImgString;
        try {
            VerifyCodeUtils.outputImage(w, h, os, verifyCode);
            byte[] a = os.toByteArray();
            verifyImgString = Base64.encodeBase64String(a);
        } catch (IOException e) {
            e.printStackTrace();
            throw new SysException("get verifyCode", "fail", "系统错误，请联系管理员", "verify code:generate the verifyCodeImage failed,check the stackTrace prints!");
        }
        if (StringUtil.isNotEmpty(verifyImgString)) {
            //将验证码存入会话session
            HttpSession session = request.getSession();
            session.removeAttribute("verCode");
            session.setAttribute("verCode", verifyCode.toLowerCase());
            //将图片流放入接口返回列表中
            resultMap.put("verCodeImg", verifyImgString);
        } else {
            throw new BizException("get verifyCode", "fail", "验证码生成失败，请重试", HttpStatus.BAD_GATEWAY);
        }
        return new ResponseEntity<ResultBody>(new ResultBody("verify", "success", resultMap, null), HttpStatus.OK);
        //data:image/png;base64,


    }

}
