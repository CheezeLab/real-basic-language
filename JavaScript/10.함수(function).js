// 함수
// 서비스를 만들다 보면 같거나 비슷한 동작이 생기게 마련
// (팝업, 결재창) 이런 동작을 자주 사용하거나 여러 곳에서 사용하면 하나로 만든다음 재활용이 효율적(중복코드 줄어들고 유지보수 편이)
// 이미 사용해 본 브라우저가 가진 내장 함수 console, alert, confirm

// 함수   함수명    매개변수
// function sayHello(name) {
//   console.log(`Hello, ${name}`);
// }
// 호출
//sayHello("Harry");

// 매개변수 없는 함수
function showError() {
  alert("에러발생");
}
//showError();

// 매개변수 있는 함수
function sayHello(name) {
  const msg = `Hello, ${name}`;
  console.log(msg);
}

sayHello("Harry");
sayHello("Tom");
sayHello("Jane");

function sayHello2(name) {
  //let msg = `Hello`;
  //if (name) {
  //  msg += `, ${name}`;
  //}

  //if 구문 대신 OR 구문으로 표현
  let newName = name || "friend";
  let msg = `Hello, ${newName}`;
  console.log(msg);
}

sayHello2();
sayHello2("Kim");

function sayHello3(name = "friend") {
  //default value
  //default value는 name의 값이 없을 때만 할당
  let msg = `Hello, ${name}`;
  console.log(msg);
}
sayHello3();
sayHello3("Park");

// 전역변수와 지역변수
let abc = "welcome";
console.log(abc);

function varCompare(name) {
  let abc = "Hello";
  console.log(abc + " " + name);
}

varCompare("Mike");
console.log(abc);

// 추가 예제
let a1 = "Mike";

function aFunc(name) {
  console.log(name);
}

aFunc(); // undefined
aFunc("Kim"); //Kim

// 결과 이유는?
// 매개변수로 받은 값은 복사된 후 함수의 지역변수가 됨
// 전체 서비스에서 공통으로 바라봐야 되는 변수를 제외하고는
// 지역변수를 쓰는 습관을 들이는 것이 좋다, 전역변수가 많아지면 관리가 힘들어짐
// 함수에 특화된 지역변수를 가급적 사용하도록!

// return 값 반환
function add(num1, num2) {
  return num1 + num2;
}

const r1 = add(2, 3);
console.log(r1);

function f1() {
  alert("error");
}
const r2 = f1();
console.log(r2); //undefined
// return 문이 없는 함수도 항상 undefined 반환, return; 마찬가지 undefined 반환

// Tip
// 함수는 한번에 한 작업에 집중하는 것이 좋다(하나의 함수가 여러 작업을 진행하면 더 잘게 나눠서 쓰는게 좋음)
// 읽시 쉽고 어떤 동작인지 알 수 있게 네이밍
// showError 에러를 보여줌, getName 이름을 얻어옴, createUserData 유저데이터 생성, checkLogin 로그인 여부 체크
