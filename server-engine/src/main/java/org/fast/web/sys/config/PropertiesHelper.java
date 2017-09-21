package org.fast.web.sys.config;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

/**
 * Description:  BillcardinoutManager
 * Copyright: © 2017 CSNT. All rights reserved.
 * Company: CSNT
 *
 * @author 付尧
 * @version 1.0
 * @timestamp 2017/9/21
 */
public class PropertiesHelper {
    private String propertiesName;

    public PropertiesHelper(String propertiesName) {
        this.propertiesName = propertiesName;
    }

    public Properties getProperties() {
        Properties pro = new Properties();
        try {
            FileInputStream in = new FileInputStream("../properties/" + propertiesName + ".properties");
            pro.load(in);
            in.close();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return pro;
    }
}
