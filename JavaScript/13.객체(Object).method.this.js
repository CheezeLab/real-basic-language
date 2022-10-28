// 객체
// method, this

// 객체에 기능 추가
// method: 객체 프로퍼티로 할당 된 함수
const superman = {
  name: "clark",
  age: 33,
  fly: function () {
    //function 키워드 생략하여 단축구문 가능 fly(){}
    console.log("날아갑니다");
  },
};

superman.fly();

//
const user = {
  name: "Mike",
  sayHello: function () {
    console.log(`Hello, I'm ${this.name}`);
  },
};

user.sayHello();

//
let boy = {
  name: "boy",
  sayHello,
};
let girl = {
  name: "girl",
  sayHello,
};

function sayHello() {
  console.log(`Hello, I'm ${this.name}`);
}

boy.sayHello(); //실행하는 시점(런타임)에 this가 결정됨
girl.sayHello();

// 화살표 함수로 선언할 경우 전혀 다른 동작이 일어남
// 화살표 함수는 일반 함수와 달리 자신만의 this를 가지지 않음
// 화살표 함수 내부에서 this를 사용하면, 그 this는 외부에서 값을 가져 옴
// 객체의 메소드를 작성할 때는 화살표 함수로 작성하지 않는 것이 좋다

//
let ex1 = {
  name: "Mike",
  sayHello: () => {
    console.log(this); //전역객체 (브라우저 환경:window, node js:global)
  },
};

ex1.sayHello(); //this != boy

// 자바스크립트에서 this는 상당히 복잡함

// 예제
let m1 = {
  name: "kkk",
  showName: function () {
    //console.log(m1.name);
    console.log(this.name);
  },
};

m1.showName();

let man = m1;
man.name = "ppp";
console.log(m1.name);

man.showName();

m1 = null;
man.showName(); // error m1.name 사라짐, 해결방법은 메소드의 객체접근을 this로 바꿈

//
let m2 = {
  name: "zzz",
  sayThis: () => {
    // 화살표 함수 this는 m2를 가리키는 것이 아니다
    // 메소드 작성시 this를 사용해서 객체 접근해야 한다면 화살표 함수는 이용하지 않는 것이 좋다
    console.log(this);
  },
};

m2.sayThis();
