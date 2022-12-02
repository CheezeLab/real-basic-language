public class Variables2 {

    public static void main(String[] args) {
        //수학연산
        int a = 3;
        int b = 5;

        int addResult = a + b;
        System.out.println("addResult = " + addResult);

        int subResult = a - b;
        System.out.println("subResult = " + subResult);

        int mulResult = a * b;

        ///int divResult = a / b;
        double divResult = (double) a / b;
        System.out.println("divResult = " + divResult);

        int modResult = b % a;
        System.out.println("modResult = " + modResult);

        //Math 클래스
        double powResult = Math.pow(3, 4);
        System.out.println("powResult = " + powResult);

        double sqrtResult = Math.sqrt(4);
        System.out.println("sqrtResult = " + sqrtResult);


        //묵시적 캐스팅
        long aLong = 3;
        double aDouble = 3.14F;

        //명시적 캐스팅
        int aInt = (int) 234L;
        float aFloat = (float) 3.14;

        //문자열
        String aStr = "Hello";
        String aStr2 = " Choi";
        String anotherStr = aStr.toUpperCase();
        System.out.println(aStr + aStr2);
        System.out.println(anotherStr);

    }
}
