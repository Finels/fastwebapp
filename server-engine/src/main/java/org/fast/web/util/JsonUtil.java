package org.fast.web.util;

import org.apache.struts2.json.JSONException;
import org.apache.struts2.json.JSONUtil;
import org.fast.web.sys.exception.SysException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;
import java.util.List;
import java.util.Map;

/**
 * Description:  BillcardinoutManager
 * Copyright: © 2017 CSNT. All rights reserved.
 * Company: CSNT
 *
 * @author 付尧
 * @version 1.0
 * @timestamp 2017/12/19
 */
public class JsonUtil {
    private static Logger tracer = LoggerFactory.getLogger(JsonUtil.class);
    private static final ScriptEngine engine = engineFatory();

    public JsonUtil() {
    }

    public static String serialize(Object jsonObj) {
        String ret = null;
        if (StringUtil.isNotEmpty(new Object[]{jsonObj})) {
            try {
                ret = JSONUtil.serialize(jsonObj, false);
            } catch (JSONException var3) {
                throw new SysException(var3);
            }
        }

        return ret;
    }

    public static Object deserialize(String jsonStr) {
        Object jsonObj = new Object();
        if (StringUtil.isNotEmpty(new Object[]{jsonStr})) {
            try {
                jsonObj = JSONUtil.deserialize(jsonStr);
            } catch (JSONException var3) {
                throw new SysException(var3);
            }
        }

        return jsonObj;
    }

    public static ScriptEngine engineFatory() {
        return (new ScriptEngineManager()).getEngineByName(System.getProperty("java.version").contains("1.8.") ? "nashorn" : "rhino");
    }

    public static Map<String, Object> getMap(String js, String key) {
        return (Map) accessMember(js, key, Map.class);
    }

    public static Map<String, Object> getMap(String js) {
        return getMap(js, (String) null);
    }

    public static <T> T accessMember(String js, String key, Class<T> clazz) {
        Object result = null;

        try {
            engine.eval("var obj = " + js);
            Object e;
            if (key == null) {
                e = engine.eval("obj;");
            } else if (key.contains(".")) {
                e = engine.eval("obj." + key + ";");
            } else {
                e = engine.eval("obj[\'" + key + "\'];");
            }

            result = e;
        } catch (ScriptException var5) {
            tracer.error("脚本eval()运算发生异常！eval 代码：" + js, var5);
        }

        return (T) result;
    }

    public static List<Map<String, Object>> getList(String js, String key) {
        return (List) accessMember(js, key, List.class);
    }

    public static List<Map<String, Object>> getList(String js) {
        return getList(js, (String) null);
    }

    public static List<String> getStringList(String js, String key) {
        return (List) accessMember(js, key, List.class);
    }

    public static List<String> getStringList(String js) {
        return getStringList(js, (String) null);
    }

    public static int double2int(Double d) {
        if (d.doubleValue() <= 2.147483647E9D && d.doubleValue() >= -2.147483648E9D) {
            return d.intValue();
        } else {
            tracer.error("Value [{}] is beyond the edge of Int.", new Object[]{d.toString()});
            return 0;
        }
    }
}
