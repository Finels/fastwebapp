package org.fast.web.model.fswuser.service.impl;

import org.fast.web.dao.FswUserRepository;
import org.fast.web.domain.FswUser;
import org.fast.web.model.fswuser.service.intf.UserServiceIntf;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Description:  BillcardinoutManager
 * Copyright: © 2017 CSNT. All rights reserved.
 * Company: CSNT
 *
 * @author 付尧
 * @version 1.0
 * @timestamp 2017/9/22
 */
@Service("fast-web-user-service")
public class UserServiceImpl implements UserServiceIntf {
    @Autowired
    private FswUserRepository fswUserDao;

    @Override
    public void addUser(FswUser user) {

    }
}
