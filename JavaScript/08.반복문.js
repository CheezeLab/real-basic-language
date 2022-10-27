// 반복문
// for, while, do while
// 동일한 작업을 여러번 반복

// for (초기값, 조건, 코드 실행 후 작업)
for (let i = 1; i <= 10; i++) {
  //반복할 코드
  console.log(i);
}

// while
let a = 0;
while (a < 10) {
  console.log(a);
  a++;
}

// do.. while
// 일단 코드 실행 후 조건 체크, 적어도 1번은 실행 되는 것이 while 과의 차이
let b = 0;
do {
  b++;
} while (b < 10);

// break, continue
// break: 멈추고 빠져나옴
// continue: 멈추고 다음 반복으로 진행
while (true) {
  let m1 = false; //confirm("계속??");

  if (!m1) {
    console.log("break");
    break;
  }
}

for (let i = 0; i < 10; i++) {
  if (i % 2) {
    continue;
  }
  console.log(i);
}

// 참고) 명확한 횟수가 정해져 있을 경우 for, 아니면 while, do..while은 거의 사용빈도가 없는 듯
// 개발자는 항상 좀 더 쉽게 일하고, 코드를 줄이기 위해 노력해야 한다고 생각, 그래야 성능도 좋아짐
// 반복문은 코드를 줄이기 위한 좋은 방법 중 하나임
