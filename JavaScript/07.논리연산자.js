// 논리 연산자

// || (OR)
// 여러개 중 하나나도 true 면 true 반환, 즉 모든 값이 false 일 때만 false 반환

// && (AND)
// 모든 값이 true 면 true 반환, 즉 하나라도 false 면 false 반환

// ! (NOT)
// true 면 false, false 면 true

// 스티브 잡스는 한국인 이거나(OR) 남자이다 => true
// 스티브 잡스는 한국인 이고(AND) 남자이다 => false

// 평가
// OR는 첫번째 true를 발견하는 즉시 평가를 멈춤
// 스티브 잡스는 남자이거나 or, 한국인 이거나, 군인 이거나..... (남자 true 이므로 뒤 상관 없음)
// AND는 첫번째 false를 발견하는 즉시 평가를 멈춤
// 스티브 잡스는 남자이고 and, 한국인 이며, 군인인 동시에..... (한국인 false 이므로 이후 무시)

// 코드에서 어떤 순서로 평가를 배치하는지가 중요
// 간단한 평가로 true, false를 판단할 수 있다면 복잡한 작업전에 해주는게 좋음
// ex) 운전면허(80%)가 있고 시력(60%)이 좋은 여군(7%)
// => 여군인데 시력이 좋고 운전면허가 있는 사람 순이 최적(첫 평가에서 93%를 걸러낼 수 있음)

const nn = "Mike";
const age = 10;

if (nn === "Tom" || age > 19) {
  console.log("통과");
}

if (nn === "Mike" && age > 19) {
  console.log("통과");
} else {
  console.log("돌아가");
}
//------------------------------
const age2 = 10; //prompt("나이?");
const isAge = age2 > 19;

if (!isAge) {
  console.log("돌아가.....");
}
//------------------------------
// 우선순위 연습
// 남자이고, 이름이 Mike 이거나 성인이면 통과
const gender = "F";
const nnnnn = "Jane";
const isAdult = true;

// if ((gender === "M" && nnnnn === "Mike") || isAdult) {
// }
// 기본은 위 코드와 같이 && 가 || 보다 우선임, 아래와 같이 괄호를 통해 조건 조정
if (gender === "M" && (nnnnn === "Mike" || isAdult)) {
  console.log("통과");
} else {
  console.log("돌아가시오");
}
