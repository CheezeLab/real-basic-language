// 배열 Array
// 순서가 있는 리스트

// 1 철수, 2 영희 .... 30 영수
// 인덱스는 0부터
let students = ["철수", "영희", "영수"];

console.log(students[0]); //철수

students[0] = "민정";
console.log(students); //민정, 영희, 영수

// 특징
// 배열은 문자 뿐만 아니라 숫자, 객체, 함수 등도 포함할 수 있음
let a = [
  "민수",
  3,
  false,
  { name: "Mike", age: 30 },
  function () {
    console.log("test");
  },
];

// length: 배열의 길이
students.length; //3

// push(): 배열끝에 추가
let days = ["월", "화", "수"];
days.push("목");
console.log(days);

// pop(): 배열 끝 요소 제거
days.pop();
console.log(days);

// shift, unshift: 배열 앞에 제거/추가
days.unshift("일");
console.log(days); //일, 월, 화, 수

days.shift();
console.log(days); //월, 화, 수

// 참고로 shift, unshift는 여러 요소를 한번에 제거/추가 가능
days.unshift("금", "토", "일");
console.log(days); //금, 토, 일, 월, 화, 수

days.shift();
console.log(days); //토, 일, 월, 화, 수

// 반복문 for
for (let index = 0; index < days.length; index++) {
  console.log(days[index]);
}

// 반복문 for...of (객체를 순회하는 for..in과 주의, 물론 배열도 객체이기 때문에 for..in을 쓸 수 있지만 장점보다 단점이 많아 권장하지 않음)
// for 문 보다는 간단하지만 index를 못 얻는 단점
for (let day of days) {
  console.log(day);
}

// 위 몇가지 메소드 이외에도 다양한 메소드 존재함 더 알아둘 것
