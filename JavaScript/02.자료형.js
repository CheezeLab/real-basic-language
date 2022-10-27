const name = "mike"; //문자형 string

const name1 = "mike";
const name2 = 'mike';
const name3 = `mike`;

const message1 = "I'm a boy.";
const message2 = 'I\'m a boy.';

const message3 = `My name is ${name}`;

const message4 = `나는 ${30 + 1}살 입니다.`;

console.log(message1);
console.log(message2);
console.log(message3);
console.log(message4);

const age = 39; //숫자형 Number
const PI = 3.14;

console.log(1+2);   //더하기
console.log(10-3);  //빼기
console.log(3*5);   //곱하기
console.log(5/2);   //나누기
console.log(8%3);   //나머지

const x = 1/0;
console.log(x); //Infinity

const y = name/2;
console.log(y); //NaN = Not a Number (숫자와 관련된 작업을 할 때는 NaN을 염두할 것)


//Boolean
const v1 = true;
const v2 = false;
console.log(name == "mike");
console.log(age > 40);

//null, undefined
//null 존재 하지 않는 값
//undefined 값이 할당되지 않음

let p;
console.log(p);
let pp = null;  //pp는 존재하지 않는다

//객체형, 심볼형
//별도 챕터

//typeof 연산자(변수의 자료형을 알아낼 수 있음)
console.log(typeof 3);
console.log(typeof name);
console.log(typeof true);
console.log(typeof "abcd");
console.log(typeof null);       //object는 객체형을 의미하고 null != 객체이지만 자바스크립트 초기버전의 오류이지만 하위버전 호환성을 위해 수정하지 않음
console.log(typeof undefined);


