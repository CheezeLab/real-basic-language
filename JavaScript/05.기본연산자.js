// 연산자 operators
// +, -, *, /, %

//% 퍼센트 활용 (홀짝수 구분, 5보다 작은수를 얻고 싶으면 5로나눈 나머지 값으로 얻는다)

//거듭제곱
const aa = 2 ** 3;
console.log(aa);

//우선순위
// *, /  >  +, -

//줄여쓰기
let m = 10;
//m = m + 5;
m += 5; // (+, *, -, % 마찬가지)

//증감연산자
let k = 10;
// k++;
// k--;
let kk = k++; //++을 뒤에 적으면 증가 시키기 전 값을 변수에 할당
console.log(kk);

let kkk = ++k; //증가시킨 값을 변수에 할당
console.log(kkk);
