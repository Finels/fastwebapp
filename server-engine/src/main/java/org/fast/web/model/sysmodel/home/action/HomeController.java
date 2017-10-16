package org.fast.web.model.sysmodel.home.action;

import com.mongodb.util.JSONSerializers;
import org.apache.struts2.json.JSONException;
import org.apache.struts2.json.JSONUtil;
import org.fast.web.domain.ActionBody;
import org.fast.web.model.fswuser.service.intf.UserServiceIntf;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.test.util.JsonExpectationsHelper;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
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
@Controller
public class HomeController {

    @Autowired
    private UserServiceIntf userServiceIntf;
//    @RequestMapping("/")
//    public String home(HttpServletRequest request, HttpServletResponse response) {
//        return "index";
//    }

    @RequestMapping(value = "/home/login.action")
    public void login(HttpServletRequest request, HttpServletResponse response) {
        Map out = new HashMap<>();
        out.put("resultCode", 200);
        response.setCharacterEncoding("utf-8");
        response.setContentType("application/json");
        PrintWriter writer = null;
        try {
            writer = response.getWriter();
            writer.write(JSONUtil.serialize((Object) out, false));
            writer.close();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (JSONException e) {
            e.printStackTrace();
        }

    }
}
