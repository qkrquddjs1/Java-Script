// 스프레드 문법 (전개 문법)
// 하나로 뭉쳐져 있는 여러 값들의 집합을 전개해서 개별적인 값들의 목록으로 만든다.

let arr = [10, 20, 30];
console.log(`가장 큰 값 : ${Math.max(10,20,30) }`);
// 배열이 아닌 숫자 목록을 인수로 받기 떄문에 원하는대로 동작하지 않는다.
console.log(`가장 큰 값 : ${Math.max(arr) }`);
// 스프레드 문법을 사용하면 arr이 인수 목록으로 확장 된다.
console.log(`가장 큰 값 : ${ Math.max(...arr) }`);

let arr1 = [10, 30, 20];
let arr2 =[100, 300, 200];

console.log(`가장 작은 값 : ${ Math.min(...arr1, ...arr2)}`);    //배열 객체 여러개 전달가능
console.log(`가장 작은 값 : ${ Math.min(1, ...arr1, 2, ...arr2, 3)}`);    //배열 객체 여러개 전달가능

// concat 메소드보다 간결하게 배열 병합에 사용 가능
let merged = [0, ...arr, 2, ...arr2];
console.log(merged);

// 문자열을 배열로 변환
let str = 'JavaScript';
console.log([...str]);




