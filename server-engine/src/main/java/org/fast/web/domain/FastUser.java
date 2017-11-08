package org.fast.web.domain;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

/**
 * Description:  User
 * Copyright: © 2017 CSNT. All rights reserved.
 * Company: CSNT
 *
 * @author 付尧
 * @version 1.0
 * @timestamp 2017/9/22
 */
@Entity
@Table(name = "FAST_USER")
public class FastUser {
    private String uuid;
    private String username;
    private String password;
    private String nickname;
    private Integer seq;
    private String phone;

    @Column(name = "UUID", nullable = false, insertable = true, updatable = true, length = 32, precision = 0)
    @Id
    @GeneratedValue(generator = "idGenerator")
    @GenericGenerator(name = "idGenerator", strategy = "uuid")
    public String getUuid() {
        return uuid;
    }

    public void setUuid(String uuid) {
        this.uuid = uuid;
    }

    @Column(name = "USERNAME", nullable = true, insertable = true, updatable = true, length = 32, precision = 0)
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    @Column(name = "PASSWORD", nullable = true, insertable = true, updatable = true, length = 32, precision = 0)
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Column(name = "NICKNAME", nullable = true, insertable = true, updatable = true, length = 255, precision = 0)
    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    @Column(name = "SEQ", nullable = true, insertable = true, updatable = true, length = 255, precision = 0)
    public Integer getSeq() {
        return seq;
    }

    public void setSeq(Integer seq) {
        this.seq = seq;
    }

    @Column(name = "PHONE", nullable = true, insertable = true, updatable = true, length = 255, precision = 0)
    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
}
