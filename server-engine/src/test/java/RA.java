/**
 * Description:  BillcardinoutManager
 * Copyright: © 2017 CSNT. All rights reserved.
 * Company: CSNT
 *
 * @author 付尧
 * @version 1.0
 * @timestamp 2017/11/3
 */
public class RA {
    static class A {
        public void hello(Number i) {
            System.out.println("Number");
        }
        public void hello(Integer i) {
            System.out.println("Integer");
        }
        public void hello(Long i) {
            System.out.println("Long");
        }
    }
    public static void main(String[] args) {
        A a = new A();
        Number i = Integer.valueOf(1);
        Number l = Long.valueOf(1L);
        a.hello(i);
        a.hello(l);
    }
}
