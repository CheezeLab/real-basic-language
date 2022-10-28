// 객체 Object

// 객체는 중괄호로 작성하고 key, value 프로퍼티가 있음, 각 프로퍼티는 쉼표(,)로 구분
const superman = {
  name: "clark",
  age: 33,
};

// 접근
superman.name;
superman["age"];

// 추가
superman.gender = "male";
superman["hairColor"] = "black";

// 삭제
delete superman.hairColor;

// 단축 프로퍼티 활용하면 보다 간단하게 객체 작성 가능
const name = "clark";
const age = 33;

const superman2 = {
  name, //name:name
  age, //age:age
  gender: "male",
};

// 프로퍼티 존재 여부 확인(in 연산자)
superman.birthDay; //undefined

"birthDay" in superman; //false
"age" in superman; //true

// 확인시 .이나 대괄호를 이용하지 않고 in을 사용하는 이유, 언제 in을 사용하면 될까?
// 어떤 값이 넘어올지 확신할 수 없을 때(함수의 인자로 받거나 api 통신을 통해 데이터를 받아올 때 등)

// for...in 반복문
console.log("----------------------------------------");
for (let key in superman) {
  console.log(key);
  console.log(superman[key]);
}

// 객체 반환 함수
console.log("----------------------------------------");
function makeObject(name, age) {
  return {
    name, //name: name,
    age, //age: age,
    hobby: "football",
  };
}

const kim = makeObject("kim", 30);
console.log(kim);

// in
console.log("age" in kim);
console.log("birthday" in kim);

// 예제
function isAdult(user) {
  //if (user.age < 20) {
  //undefined 이면 false 이기 때문에 age가 없어도 true 반환
  if (!("age" in user) || user.age < 20) {
    return false;
  }
  return true;
}

const park1 = {
  name: "mike",
  age: 30,
};

const park2 = {
  name: "Jane",
};

console.log(isAdult(park1));
console.log(isAdult(park2));

const Tom = {
  name: "Tom",
  age: 30,
};

for (x in Tom) {
  console.log(x);
  console.log(Tom[x]);
}
