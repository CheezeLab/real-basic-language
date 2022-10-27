// 비교 연산자

// < > <= >= == !=
//a=3   //할당
//a==3, a!=3  //비교
//true, false 만 반환

console.log(10 > 5);
console.log(10 == 5); //동등 연산자
console.log(10 != 5);

//동등 연산자
const a = 1;
const b = "1";

console.log(a == b); //true (버그 유발 가능성이 있음)
console.log(a === b); //일치 연산자(타입까지 비교, 가급적 동등 보다는 일치 연산자를 쓰는 것이 좋다)

//조건문
if (a > 19) {
  console.log("안녕하세요");
}

const abc = 30;
if (abc > 19) {
  console.log("성인입니다");
} else if (abc === 19) {
  console.log("수능 잘쳐!");
} else {
  console.log("나가세요");
}
