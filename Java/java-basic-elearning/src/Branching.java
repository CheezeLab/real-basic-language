import java.util.Scanner;

public class Branching {

    public static void main(String[] args) {
        //if, if-else, 비교연산자, 논리연산자, switch

        //int age = 15;
        Scanner fromUser = new Scanner(System.in);
        System.out.print("나이입력:");
        String theAge = fromUser.next();
        int age = Integer.parseInt(theAge);

//        if (age >= 20) {
//            System.out.println("adult");
//
//        } else {
//            System.out.println("not adult");
//        }

        if (age >= 20 && age < 40) {
            System.out.println("청년");
        } else if (age >= 40 && age < 60) {
            System.out.println("장년");
        } else {
            System.out.println("노년");
        }

        Scanner in = new Scanner(System.in);
        System.out.print("좋아하는 색깔?");
        String color = in.next();

        switch (color) {
            case "red":
                System.out.println("열정적");
                break;
            case "blue":
                System.out.println("감성적");
                break;
            case "green":
            case "yellow":
                System.out.println("몰라");
                break;
            default:
                System.out.println("알 수 없음");
                break;
        }
    }
}
