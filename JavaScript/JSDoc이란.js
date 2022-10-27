/**
 * 이름, 나이 합쳐서 리턴하는 함수
 * @param {string} name 이름
 * @param {number} age 나이
 * @returns 두개 합쳐서 문자로 뱉어줌
 */
function hello(name, age) {
  return name + age;
}

/**
 * @version 1.1.0
 * @see https://naver.com
 */
function ex1() {}

/**
 * @todo 추가 개발메모 등...메모
 */
function ex2() {}

/**
 * @deprecated 이제 이거 그만쓰고 다른거 쓰세요
 */
function ex3() {}

ex3();

/**
 * 함수설명
 * @param {*} a
 * @param {*} b
 */
function ex4(a: string, b: number) {}

/**
 * @readonly
 * @const {number}
 */
const num = 1;

/** @type {string | number} */
var vv1 = "kim";
/** @type {number[]} */
var vv2 = [1, 2, 3];

//TS->JSDoc 이유
//1. TS 너무 엄격함
//2. TS->JS 변환 귀찮음
//3. TS->JS 변환시 코드양 증가 + JS 코드 개판
//(4. 나중에 개발이 마무리 되면 TS로 바꾸는 작업할 생각.....?)
