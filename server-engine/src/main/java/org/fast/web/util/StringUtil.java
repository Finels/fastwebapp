package org.fast.web.util;

/**
 * Description:  BillcardinoutManager
 * Copyright: © 2017 CSNT. All rights reserved.
 * Company: CSNT
 *
 * @author 付尧
 * @version 1.0
 * @timestamp 2017/10/13
 */
//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by Fernflower decompiler)
//

import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.util.Assert;

import java.io.UnsupportedEncodingException;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class StringUtil {
    private static final String fullWidthSpace = "　";

    public StringUtil() {
    }

    public static boolean isEmpty(Object... objs) {
        if(objs == null) {
            return true;
        } else {
            Object[] var1 = objs;
            int var2 = objs.length;

            for(int var3 = 0; var3 < var2; ++var3) {
                Object obj = var1[var3];
                if(obj != null && !"".equals(obj)) {
                    return false;
                }
            }

            return true;
        }
    }

    public static boolean isNotEmpty(Object... objs) {
        if(objs == null) {
            return false;
        } else {
            Object[] var1 = objs;
            int var2 = objs.length;

            for(int var3 = 0; var3 < var2; ++var3) {
                Object obj = var1[var3];
                if(obj == null || "".equals(obj)) {
                    return false;
                }
            }

            return true;
        }
    }

    public static String replaceNull(Object obj) {
        return isEmpty(new Object[]{obj})?"":obj.toString();
    }

    public static String replaceNull(Object obj, String strDefault) {
        return isEmpty(new Object[]{obj})?strDefault:obj.toString();
    }

    public static String replaceAll(String src, String match, String as) {
        return !isEmpty(new Object[]{src}) && !isEmpty(new Object[]{match})?src.replace(match, as):src;
    }

    public static String replaceFirst(String src, String match, String as) {
        if(!isEmpty(new Object[]{src}) && !isEmpty(new Object[]{match})) {
            int start = src.indexOf(match);
            return start != -1?(new StringBuilder(src)).replace(start, start + match.length(), replaceNull(as)).toString():src;
        } else {
            return src;
        }
    }

    public static String reverse(String src) {
        return isEmpty(new Object[]{src})?src:(new StringBuilder(src)).reverse().toString();
    }

    public static String replaceLast(String src, String match, String as) {
        if(!isEmpty(new Object[]{src}) && !isEmpty(new Object[]{match})) {
            src = reverse(src);
            match = reverse(match);
            as = reverse(as);
            return reverse(replaceFirst(src, match, as));
        } else {
            return src;
        }
    }

    public static String join(String delim, String... objs) {
        return objs == null?"":String.join(delim, objs);
    }


    public static String joinList(List lstInput, String delim) {
        if(lstInput != null && lstInput.size() != 0) {
            StringBuilder sb = new StringBuilder();
            Iterator it = lstInput.iterator();

            while(it.hasNext()) {
                sb.append(replaceNull(it.next()));
                if(it.hasNext()) {
                    sb.append(delim);
                }
            }

            return sb.toString();
        } else {
            return "";
        }
    }

    public static String joinForSqlIn(List lstInput, String delim) {
        if(lstInput != null && lstInput.size() != 0) {
            StringBuilder sb = new StringBuilder();
            Iterator it = lstInput.iterator();

            while(it.hasNext()) {
                sb.append("\'").append(replaceNull(it.next())).append("\'");
                if(it.hasNext()) {
                    sb.append(delim);
                }
            }

            return sb.toString();
        } else {
            return "";
        }
    }

    public static int trueLength(String src) {
        return trueLength(src, "UTF-8");
    }

    public static int trueLength(String src, String encode) {
        int length = 0;
        if(isNotEmpty(new Object[]{src})) {
            try {
                byte[] e = src.getBytes(encode);
                length = e.length;
            } catch (UnsupportedEncodingException var4) {
                length = -1;
            }
        }

        return length;
    }

    public static List<String> getMatches(String strInput, String regex) {
        ArrayList lstResult = new ArrayList();
        if(isNotEmpty(new Object[]{strInput})) {
            Pattern p = Pattern.compile(regex);
            Matcher m = p.matcher(strInput);

            while(m.find()) {
                lstResult.add(m.group());
            }
        }

        return lstResult;
    }

    public static String capFirst(String str) {
        return capFirst(str, true);
    }

    public static String capFirst(String str, boolean isUpperCase) {
        return isEmpty(new Object[]{str})?str:(isUpperCase?str.substring(0, 1).toUpperCase() + str.substring(1):str.substring(0, 1).toLowerCase() + str.substring(1));
    }

    public static String camelAndRemoveUnderline(String str) {
        if(isEmpty(new Object[]{str})) {
            return str;
        } else {
            String strRet = str.toLowerCase();
            int underlineLoc = str.indexOf("_");

            while(underlineLoc >= 0 && underlineLoc <= strRet.length() - 1) {
                if(underlineLoc == strRet.length() - 1) {
                    strRet = strRet.substring(0, underlineLoc);
                } else {
                    strRet = strRet.substring(0, underlineLoc) + strRet.substring(underlineLoc + 1, underlineLoc + 2).toUpperCase() + strRet.substring(underlineLoc + 2);
                    underlineLoc = strRet.indexOf("_");
                }
            }

            return strRet;
        }
    }

    public static String underlineAndRemoveCamel(String str) {
        if(isEmpty(new Object[]{str})) {
            return str;
        } else {
            String retStr = "";
            char[] var2 = str.toCharArray();
            int var3 = var2.length;

            for(int var4 = 0; var4 < var3; ++var4) {
                char c = var2[var4];
                if(Character.isUpperCase(c)) {
                    retStr = retStr + "_" + (c + "").toLowerCase();
                } else {
                    retStr = retStr + c;
                }
            }

            return retStr;
        }
    }


    public static String bytesToHexString(byte[] bArray, boolean upperCase) {
        StringBuilder sb = new StringBuilder(bArray.length * 2);
        byte[] var4 = bArray;
        int var5 = bArray.length;

        for(int var6 = 0; var6 < var5; ++var6) {
            byte i = var4[var6];
            String sTemp = Integer.toHexString(255 & i);
            if(sTemp.length() < 2) {
                sb.append(0);
            }

            sb.append(sTemp.toUpperCase());
        }

        return upperCase?sb.toString():sb.toString().toLowerCase();
    }

    public static String bytesToHexString(byte[] bArray) {
        return bytesToHexString(bArray, true);
    }

    public static byte[] hexStringToBytes(String hexStr) {
        byte[] byteArr = new byte[hexStr.length() / 2];
        char[] charArr = hexStr.toCharArray();

        for(int i = 0; i < byteArr.length; ++i) {
            String item = Character.toString(charArr[i * 2]) + Character.toString(charArr[i * 2 + 1]);
            byteArr[i] = Integer.valueOf(item, 16).byteValue();
        }

        return byteArr;
    }

    public static String makeClassName(String strInput, String delimRegex) {
        if(isEmpty(new Object[]{strInput})) {
            return strInput;
        } else {
            String[] oriStrList = strInput.split(delimRegex);
            String finalStr = "";
            String[] var4 = oriStrList;
            int var5 = oriStrList.length;

            for(int var6 = 0; var6 < var5; ++var6) {
                String word = var4[var6];
                finalStr = finalStr + capFirst(word.toLowerCase());
            }

            return finalStr;
        }
    }

    public static String getAttachmentContentDisposition(String filename) throws UnsupportedEncodingException {
        StringBuilder builder = new StringBuilder("attachment");
        if(filename != null) {
            builder.append("; filename=\"");
            builder.append(new String(filename.getBytes("utf-8"), "iso8859-1")).append('\"');
            builder.append("; filename*=");
            builder.append(encodeHeaderFieldParam(filename, StandardCharsets.UTF_8));
        }

        return builder.toString();
    }

    public static String encodeHeaderFieldParam(String input, Charset charset) {
        Assert.notNull(input, "Input String should not be null");
        Assert.notNull(charset, "Charset should not be null");
        if(StandardCharsets.US_ASCII.equals(charset)) {
            return input;
        } else {
            Assert.isTrue(StandardCharsets.UTF_8.equals(charset) || StandardCharsets.ISO_8859_1.equals(charset), "Charset should be UTF-8 or ISO-8859-1");
            byte[] source = input.getBytes(charset);
            int len = source.length;
            StringBuilder sb = new StringBuilder(len << 1);
            sb.append(charset.name());
            sb.append("\'\'");
            byte[] var5 = source;
            int var6 = source.length;

            for(int var7 = 0; var7 < var6; ++var7) {
                byte b = var5[var7];
                if(isRFC5987AttrChar(b)) {
                    sb.append((char)b);
                } else {
                    sb.append('%');
                    char hex1 = Character.toUpperCase(Character.forDigit(b >> 4 & 15, 16));
                    char hex2 = Character.toUpperCase(Character.forDigit(b & 15, 16));
                    sb.append(hex1);
                    sb.append(hex2);
                }
            }

            return sb.toString();
        }
    }

    private static boolean isRFC5987AttrChar(byte c) {
        return c >= 48 && c <= 57 || c >= 97 && c <= 122 || c >= 65 && c <= 90 || c == 33 || c == 35 || c == 36 || c == 38 || c == 43 || c == 45 || c == 46 || c == 94 || c == 95 || c == 96 || c == 124 || c == 126;
    }

    public static String getRandomStr(int count) {
        return RandomStringUtils.random(count);
    }

    public static String getRandomNumStr(int count) {
        return RandomStringUtils.randomAlphanumeric(count);
    }

    public static String getRandomNum(int count) {
        return RandomStringUtils.randomNumeric(count);
    }

    public static String getRandomAscii(int count) {
        return RandomStringUtils.randomAscii(count);
    }


    public static String replacefullWidthSpace(String str, String... toStrs) {
        String toStr = toStrs.length == 1 && isNotEmpty(new Object[]{toStrs[0]})?toStrs[0]:" ";
        return replaceAll(str, "　", toStr);
    }

    private static String escapeOracleSpecialChars(String content) {
        String afterDecode = content.replaceAll("\'", "\'\'");
        afterDecode = afterDecode.replaceAll("/", "//");
        afterDecode = afterDecode.replaceAll("%", "/%");
        afterDecode = afterDecode.replaceAll("_", "/_");
        return afterDecode;
    }

    private static String escapeMySqlSpecialChars(String content) {
        String afterDecode = content.replaceAll("\'", "\'\'");
        afterDecode = content.replaceAll("\"", "\\\"");
        afterDecode = afterDecode.replaceAll("/", "\\/");
        afterDecode = afterDecode.replaceAll("%", "\\%");
        afterDecode = afterDecode.replaceAll("_", "\\_");
        return afterDecode;
    }
}

