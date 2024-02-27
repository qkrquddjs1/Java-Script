// Function, String, Number 를 비롯한 내장 객체들 역시 프로토 타입에 메소스를 저장한다.
// 모든 내장 프로토타입 상속 트리 꼬대기에는 Object.prototype이 있어야 한다고 규정한다.

const num = new Number(100);

// num 은 Number.prototype을 상속 받았는가?
console.log(num.__proto__ === Number.prototype)

// num은 Object,prototype을 상속 받았는가 ?
console.log(num.__proto__.__proto__ === Object.prototype)

// 프로토타입 체인 맨 위에는 null이 있다.
console.log(num.__proto__.__proto__.__proto__)

// Object.prototype에도 toString이 있지만 Number.prototype에도 toString이 있기 때문에
// 체인에서 가까운 메소드가 사용된다.
console.log(num.toString());

// 내장 프로토타입을 수정할 수 있지만 되도록 이면 변경하지 않는다.
// 명세서에 새로 등록된 기능을 쓰고 싶지만 자바스크립트 엔진에 구현되어 있지않은경우 정도에만 변형한다.
String.prototype.hello = function () {
    console.log(`hello, ${this}`);
};

"JavaScript".hello();

