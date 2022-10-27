// alert 알려줌
// prompt 입력받음
// confirm 확인받음

const a = prompt("이름 입력."); //입력 안하고 취소하면 null
const b = prompt("이름 입력.", "abcd"); //두번째 값: 입력받을 기본값

//alert("환영합니다, " + a + "님");
alert(`환영합니다, ${a}님`);

const isAdult = confirm("성인입니까?"); //확인 true, 취소 false
console.log(isAdult);

// 단점
// 1. 스트립트 일시 정지(창 닫기 전에 이후 동작 제한)
// 2. 스타일링 불가(위치, 모양 등 그래서 html, css를 이용하여 만든 모달창을 사용하기도 함)

// 그러나 단점을 생각하더라도 기본 대화상자는 빠르고 간편하게 적용가능하므로 많이 사용
