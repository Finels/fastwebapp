package org.fast.web.model.sysmodel.core.action;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.tomcat.util.codec.binary.Base64;
import org.fast.web.attribute.CommonAttribute;
import org.fast.web.dao.FileDao;
import org.fast.web.dao.UserDao;
import org.fast.web.domain.ActionBody;
import org.fast.web.domain.ApsidFile;
import org.fast.web.domain.ResultBody;
import org.fast.web.domain.User;
import org.fast.web.sys.config.SpringContextUtil;
import org.fast.web.sys.exception.BizException;
import org.fast.web.sys.exception.SysException;
import org.fast.web.util.BeanUtil;
import org.fast.web.util.MailUtil;
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
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.mail.Multipart;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.util.*;


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
    private FileDao fileDao;

    private Logger logeger = LoggerFactory.getLogger(this.getClass());

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
        if (StringUtil.isEmpty(currentCode) || StringUtil.isEmpty(verifyCode) || !currentCode.toString().equalsIgnoreCase(verifyCode.toString())) {
            throw new BizException("verify", "fail", "验证码错误，请重试", HttpStatus.UNAUTHORIZED);
        }
        //生成注册码
        int inviteCode = 0;
        boolean b = true;
        while (b) {
            inviteCode = (int) ((Math.random() * 9 + 1) * 10000);
            List a = userDao.findByCode(inviteCode + "");
            if (a.size() == 0) {
                b = false;
            }
        }

        try {
            User currentUser = (User) BeanUtil.mapToObject(params, User.class);
            currentUser.setCreattime(new Date());
            currentUser.setCode(inviteCode + "");
            userDao.save(currentUser);
            //注册成功后，删除session中保存的验证码
            request.getSession().removeAttribute("verCode");
            //发送注册邮件
            MailUtil.sendMail(currentUser.getEmail(), inviteCode + "", CommonAttribute.REGISTER_MAIL_TEMPLATE);
        } catch (Exception e) {
            e.printStackTrace();
            throw new SysException("get verifyCode", "fail", "注册失败，请重试", "BeanUtil:map to Object failed,check the stackTrace prints!");
        }
        return new ResponseEntity<ResultBody>(new ResultBody("register", "success", resultMap, null), HttpStatus.OK);
    }


    /**
     * 获取验证码图片流，验证码字符串缓存在HttpSession中，验证码暂无超时操作
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
        int w = 110, h = 35;
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

    @RequestMapping("/upload.action")
    public ResponseEntity<ResultBody> uploadFile(HttpServletRequest request, HttpServletResponse response) {
        final String fileHomePath = "apsid2018";
        Map params = request.getParameterMap();
        String RNcode = ((String[]) params.get("regCode"))[0];//前台传入的用户RN码
        String verifyCode = ((String[]) params.get("verCode"))[0];//前台传入的验证码
        String fileType = ((String[]) params.get("forum"))[0];//前台传入的文件类型
        //验证验证码是否正确
        Object currentCode = request.getSession().getAttribute("verCode");
        if (StringUtil.isEmpty(currentCode) || StringUtil.isEmpty(verifyCode) || !currentCode.toString().equalsIgnoreCase(verifyCode.toString())) {
            throw new BizException("verify", "fail", "Validation code is incorrect,please check it and try again.", HttpStatus.UNAUTHORIZED);
        }
        //验证用户RN码是否正确，并绑定文件
        List a = userDao.findByCode(RNcode);
        if (a.size() == 0) {
            throw new BizException("RNcode verify", "fail", "The RNCode is not found, please check out and try again.", HttpStatus.NOT_FOUND);
        }
        User currentUser = (User) (a.get(0));
        String userId = currentUser.getUuid();
        //生成CA码
        int CACode = 0;
        boolean tag = true;
        while (tag) {
            CACode = (int) ((Math.random() * 9 + 1) * 10000);
            if (fileDao.findByCacode(CACode + "").size() == 0) {
                tag = false;
            }
        }
        //保存数据库记录

        //==================================保存文件，同时记录到数据库中======================================
        //构造文件路径，为fileHomePath+fileName
        String basePath = request.getSession().getServletContext().getRealPath("/");
        basePath = basePath.replace("ROOT", "files");
        File fileDir = new File(basePath + File.separator + fileHomePath + File.separator + userId);
        if (!fileDir.exists()) {
            fileDir.mkdirs();
        }
        //==================================解析前端传入的文件====================================
        MultipartFile file = null;
        String fileName = null;
        Map<String, MultipartFile> fileMap = ((MultipartHttpServletRequest) request).getFileMap();
        for (Map.Entry<String, MultipartFile> mfile : fileMap.entrySet()) {
            //取得前端上传的文件
            file = mfile.getValue();
            if (file != null) {
                fileName = file.getOriginalFilename();
            }
        }
        //====================================保存到数据库======================================
        ApsidFile apsidFile;
        //查询数据库中是否已经存在该用户上传的记录了
        List temp = fileDao.findByUserid(userId);
        if (temp.size() > 0) {
            apsidFile = (ApsidFile) temp.get(0);
        } else {
            apsidFile = new ApsidFile();
        }
        apsidFile.setRncode(RNcode);
        apsidFile.setCacode(CACode + "");
        apsidFile.setUserid(userId);
        apsidFile.setFiletype(fileType);
        apsidFile.setFilename(fileName);
        apsidFile.setCreatetime(new Date());
        apsidFile.setFilepath(fileHomePath + File.separator + userId + File.separator + fileName);
        fileDao.saveAndFlush(apsidFile);
        //================================保存文件到服务器=======================================
        File currentFile = new File(fileDir.getAbsoluteFile() + File.separator + fileName);
        try {
            
            file.transferTo(currentFile);
        } catch (IOException e) {
            e.printStackTrace();
            throw new SysException("File Upload", "fail", "the file can not upload,please contact system manager.", "file upload failed.An IO exception has been occurred,check the console prints and the disk space remain");
        }

        //===================================文件上传成功，发送邮件====================================
        //发送注册邮件
        MailUtil.sendMail(currentUser.getEmail(), CACode + "", CommonAttribute.ARTICLE_MAIL_TEMPLATE);


        return new ResponseEntity<ResultBody>(new ResultBody("File Upload", "success", null, null), HttpStatus.OK);

    }

}
