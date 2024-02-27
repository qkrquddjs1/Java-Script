// let
// avr 키워드의 단점을 보완하기 위해 ES6에서는 새로운 변수 선언 키워드인 let, const를 도입햇다.

// . 변수 중복 선언 금지
let msg ='안녕하세요';

// SyntaxError: Identifier 'msg' has already been declared
// let msg = "안녕히 가세요";
console.log(msg)

// 2. 블록 레벨 스코프
let i = 0;
for(let i=0; i< 10; i++) {}
console.log(i)

// 3. 변수 호이스팅
// ReferenceError: Cannot access 'x' before initialization
// console.log(x);
let x;

