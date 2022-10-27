// switch 문은 if else로 표현가능

switch ("평가") {
  case "A":
    //A일때 코드
    break;
  case "B":
    //B일때 코드
    break;
}

if ("평가" == "A") {
  //A일때 코드
} else if ("평가" == "B") {
  //B일때 코드
}

let fruit = "수박"; //prompt("무슨 과일 사고 싶음?");

switch (fruit) {
  case "사과":
    console.log("100원");
    break;
  case "바나나":
    console.log("200원");
    break;
  case "키위":
    console.log("300원");
    break;
  case "멜론":
    console.log("400원");
    break;
  case "수박":
  case "복숭아":
    console.log("500원");
    break;
  default:
    console.log("없음");
    break;
}
