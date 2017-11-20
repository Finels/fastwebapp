package org.fast.web.model.sysmodel.core.action;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.fast.web.dao.FastUserDao;
import org.fast.web.dao.FastUserRepository;
import org.fast.web.domain.FastUser;
import org.fast.web.domain.ResultBody;
import org.fast.web.sys.exception.Bizexception;
import org.fast.web.sys.exception.Error;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.transaction.Transactional;
import java.util.HashMap;
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
public class HomeController {

    @Autowired
    private FastUserRepository repository;

    @Autowired
    private SqlSessionFactory sessionFactory;
//    @RequestMapping("/")
//    public String home(HttpServletRequest request, HttpServletResponse response) {
//        return "index";
//    }

    @RequestMapping(value = "/home/login.action")
    public ResponseEntity<ResultBody> login(@RequestBody FastUser loginUser, HttpServletRequest request, HttpServletResponse response) {
        SqlSession session = sessionFactory.openSession();
        FastUser currentUser = repository.findByUsername(loginUser.getUsername());
        FastUserDao sessionDao = session.getMapper(FastUserDao.class);
        FastUser currentUser1 = sessionDao.getUser(loginUser.getUsername());

        if (currentUser == null) {
            currentUser = repository.findByPhone(loginUser.getUsername());
            if (currentUser == null) throw new Bizexception("warning", "用户名不存在，请重试");
        }
        if (currentUser.getPassword().equals(loginUser.getPassword())) {
            Map resultMap = new HashMap<>();
            resultMap.put("signature", "test123");
            return new ResponseEntity<ResultBody>(new ResultBody("logined", "success", resultMap, request.getContextPath()), HttpStatus.OK);
        } else {
            throw new Bizexception("warning", "密码错误，请重试");
        }
    }

    @ExceptionHandler({Bizexception.class})
    public ResponseEntity exception(Bizexception e, HttpServletRequest request) {
        return new ResponseEntity<Error>(new Error("warning", "用户校验失败，请重新登录", request.getContextPath()), HttpStatus.NON_AUTHORITATIVE_INFORMATION);
    }
}
