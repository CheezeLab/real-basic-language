// 형변환(Type Conversion)

String();
Number();
Boolean();

// 형변환이 필요한 이유?
// 문자형 + 문자형 = 이어진 문자형
// 숫자형 + 숫자형 = 숫자형
// 문자형 + 숫자형 = 의도치 않은 동작

const mathScore = 100;
//const mathScore = prompt("수학 점수?");   //prompt 로 입력받으면 문자형
const engScore = 55;
const result = (mathScore + engScore) / 2;

console.log(result);

console.log("6" / "2");
// 자동형변환(원인을 찾기 힘든 에러를 발생시킬 수 있으니 명시적 형변환을 이용한다)

//String 문자형 변환
console.log(String(2), String(true), String(null), String(undefined));

//Number 숫자형 변환
console.log(Number("1111"));
console.log(Number("1111AAA")); //NaN
console.log(Number(true)); //true:1, false:0

console.log(Number(null)); //0 (외우는 수 밖에)
console.log(Number(undefined)); //NaN(외우는 수 밖에)
//주의사항
//Number(0) false, Number('0') true
//Number('') false, Number(' ') true

//Boolean (false 조건만 기억하면 됨)
//숫자 0, 빈 문자열"", null, undefined, NaN 이외는 모두 true
