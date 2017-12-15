package org.fast.web.dao;

import org.fast.web.domain.FastUser;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.context.annotation.Profile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

/**
 * Description:  FswUser DAO
 * Copyright: © 2017 CSNT. All rights reserved.
 * Company: CSNT
 *
 * @author 付尧
 * @version 1.0
 * @timestamp 2017/9/22
 */

/**
 * 接口方法命名规则:动词(find)+可选主题+关键词(By)+断言，连接处字母需大写
 * <p>
 * 可使用的动词包含：get,find,read,count，其中前三者会返回对象,而count会返回数量
 * 主题词一般会被忽略，仅作为一个标识，除非主题词为Distinct
 * 断言的命名则非常灵活，可以包含查询条件以及排序字段和分组字段，但是方法参数的顺序一定要与断言关键词的位置一致
 */
public interface FastUserRepository extends JpaRepository<FastUser, String> {


    public FastUser findByUsername(String username);

    FastUser findByPhone(String Phone);

    List<FastUser> findByNickname(String nickname);

    List<FastUser> findByNicknameNotNull();

    List<FastUser> findByNicknameLike(String nickname);//传入的nickname需要加上%才能做like比较

    List<FastUser> findByNicknameOrUsername(String nickname, String username);

//    List<FswUser> findByNicknameOrUsernameIgnoresCase(String nickname, String username);//只忽略了username的大小写

//    List<FswUser> findByNicknameOrUsernameAllIgnoresCaseOrderBySeqDesc(String nickname, String username);

    @Query(value = "select * from fast_user", nativeQuery = true)
    List<FastUser> findFswUserByNativeSql();

}
