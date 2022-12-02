/* 변수, 데이터 타입 */
public class Variables {

    public static void main(String[] args) {
        int myInt = 1_234_567;
        System.out.println("int: " + myInt);
        //long myLong=2222; //뒤에 L 표시가 없으면 기본 int 타입으로 인식
        long myLong = 222_222_222L;
        System.out.println("long: " + myLong);

        double myDouble = 3.211212231232131231;
        //float myFloat = 3.1212121212;   //소수점이 있는 숫자는 기본이 double 타입
        float myFloat = 3.1212121212F;

        int result = myInt + 3;

        //char myChar = 'AB';   //char 타입은 문자 1개만 표현하는 타입
        char myChar = 'A';

        boolean myBool = true;
        boolean myBool2 = false;

        //숫자타입

        //Math 클래스: 사칙연산 이외의 수학적 연산 지원

        //변수와 리터럴은 같은 타입이 원칙(int a = 3, float f = 3.14F, 타입이 다를 때 변환(타입 캐스팅)이 이루어짐
        //명시적 변환, 묵시적 변환
        //정보의 손실이 없다면 합법적 변환(정수 타입->부동소수점 타입)
        //명시적 int k = (int)3.14;, double b = (double)5; (5 != 5.0)
        //묵시적 long g = 5;

        //문자열
        //문자열은 문자의 시퀀스(연속)이다
        //자바에서 유니코드 문자라면 문자열에 무엇이든 쓸 수 있다
        String welcomeMessage = "안녕하세요";
        char letter = 'A';



//        변수명 짓는 방법(참고)
//        1. 변수의 의미와 목적이 분명히 나타나야 한다.
//        2. 비슷한 이름은 사용하지 않는다.
//        3. 단축어 사용을 지양한다.
//        4. 숫자로 시작할 수 없다.
//        5. 띄어쓰기를 할 수 없다.
//        6. 특수기호를 사용하지 않는다.
//        7. 예약어를 사용하지 않는다.
//        8. Camel Case를 지킨다.
//        9. 대소문자를 구분한다.
    }
}
