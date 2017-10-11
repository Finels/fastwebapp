package org.fast.web.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

/**
 * Description:  用户附属信息
 * Copyright: © 2017 CSNT. All rights reserved.
 * Company: CSNT
 *
 * @author 付尧
 * @version 1.0
 * @timestamp 2017/10/11
 */
@Document
public class UserDocument {
    @Id
    private String id;
    private String realname;
    private String sexy;
    private String idcard;
    private String address;
    private String qqnumber;
    private String weixin;
    @Field
    private String headimg;

}
