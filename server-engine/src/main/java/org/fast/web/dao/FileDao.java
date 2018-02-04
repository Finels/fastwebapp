package org.fast.web.dao;

import org.fast.web.domain.ApsidFile;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * Description:  org.fast.web.dao
 * Copyright: © 2017 FanLei. All rights reserved.
 * Company: NULL
 *
 * @author FL
 * @version 1.0
 * @timestamp 2018/2/4
 */
public interface FileDao extends JpaRepository<ApsidFile, String> {
    public List findByFiletype(String filetype);

    public List findByCacode(String cacode);

    public List findByUserid(String userId);

}
