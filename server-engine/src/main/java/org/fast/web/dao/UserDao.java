package org.fast.web.dao;

import org.fast.web.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * Description:  用户dao
 * Copyright: © 2017 CSNT. All rights reserved.
 * Company: CSNT
 *
 * @author 付尧
 * @version 1.0
 * @timestamp 2018/1/8
 */
public interface UserDao extends JpaRepository<User, String> {

    List<User> findByUuidNotNull();

}
