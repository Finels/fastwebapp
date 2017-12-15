package org.fast.web.model.sysmodel.core.service.impl;

import org.fast.web.dao.FastUserRepository;
import org.fast.web.domain.FastUser;
import org.fast.web.model.sysmodel.core.service.intf.UserServiceIntf;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.stereotype.Service;

/**
 * Description:  BillcardinoutManager
 * Copyright: © 2017 CSNT. All rights reserved.
 * Company: CSNT
 *
 * @author 付尧
 * @version 1.0
 * @timestamp 2017/11/28
 */
public class UserServiceImpl implements UserServiceIntf {

    @Autowired
    private FastUserRepository repository;

    @Cacheable(value = "redisCache", key = "#method+'_'+#username")
    public String getUserByUsername(String username) {
        System.out.print("excute jpa @query function!");
        return "hahaxx";
    }
}
