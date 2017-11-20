package org.fast.web.dao;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;
import org.fast.web.domain.FastUser;

/**
 * Description:  BillcardinoutManager
 * Copyright: © 2017 CSNT. All rights reserved.
 * Company: CSNT
 *
 * @author 付尧
 * @version 1.0
 * @timestamp 2017/11/17
 */
public interface FastUserDao {

    @Insert("insert into fast_user values(replace(#{uuid},#{username},#{password},#{nickname},#{seq},#{phone})")
    public void insertUser(FastUser user);

    @Select("select * from fast_user where username = #{username}")
    public FastUser getUser(String username);

}
