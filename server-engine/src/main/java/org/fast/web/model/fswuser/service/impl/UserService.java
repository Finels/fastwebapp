package org.fast.web.model.fswuser.service.impl;

import org.fast.web.dao.FswUserRepository;
import org.fast.web.domain.FswUser;
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
@Service
public class UserService {
    @Autowired
    private FswUserRepository fswUserDao;

    public void addUser(FswUser user) {
        fswUserDao.save(user);
    }
}
