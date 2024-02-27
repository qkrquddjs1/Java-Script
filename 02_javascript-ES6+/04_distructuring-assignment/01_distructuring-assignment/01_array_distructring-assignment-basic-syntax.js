// 배열 구조 분해 할당
// 구조 분해 할당을 사용하면 배열이나 객체를 변수로 '분해' 하여 연결할 수 있다.

let nameArr = ["Gildong", "Hong"];

// let firstName = nameArr[0];
// let lastName = nameArr[1];
let [firstName, lastName] = nameArr;
console.log(firstName);
console.log(lastName);

// 반홥 값이 배열인 split 메소들 활용한 예제
let [firstName2 , lastName2] = "Saimdang Shin".split("")
console.log(firstName2);
console.log(lastName2);

let arr = ['firstName','middleName','LastName'];
// let arr1 = [`firstNam, middleName, LastName`]
let [firstName3, lastName3] = arr; // 쉼표를 사용하여 필요하지 않은 배열 요소를 버릴수 있다.
console.log(firstName3)
console.log(lastName3)

