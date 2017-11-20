import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.*;
import javax.transaction.Transactional;

/**
 * Description:  分布式事务配置，多数据源测试类
 * Copyright: © 2017 CSNT. All rights reserved.
 * Company: CSNT
 *
 * @author 付尧
 * @version 1.0
 * @timestamp 2017/10/16
 */

@Transactional
public class MultiDataSourceTmTest {
    @PersistenceContext(unitName = "EntityManagerSC")
    private EntityManager em1;

    @PersistenceContext(unitName = "EntityManagerALI")
    private EntityManager em2;


    @Test
    public void testMulitSourceTransaction() {
        Query query1 = em1.createNativeQuery("update test_cj set a=?,b=?");
        query1.setParameter(1, "yyyaaa");
        query1.setParameter(2, "bbbbbnn");
        query1.executeUpdate();
        Query query2 = em2.createNativeQuery("update fsw_user set uuid=?,username=?");
        query2.setParameter(1, "asdghjzxc");
        query2.setParameter(2, "王令");
        query2.executeUpdate();
    }

}
