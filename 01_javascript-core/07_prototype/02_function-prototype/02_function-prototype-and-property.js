// 함수의 디폴트 프로퍼티 프로토타입과 constructor 프로퍼티
// 개발자가 특별히 할당하지 않아도 모든 향수는 기봊넉으로 "prototype"프로퍼티를 갖는다.
// 디폴트 프로퍼티 " prototype"은constrctor 프로퍼티 하나만 있는 객체를 가리키는데,
// 여기서 constructor 프로퍼티는 함수 자신을 가리킨다.

function Student() {} // Student,prototype = { constructor : Student }; 내부적으로 동작

console.log(Student.prototype.constructor);
console.log(Student.prototype.constructor == Student);

let student = new Student() // { constructor : Student  } 상속 받음
console.log(student.constructor)
console.log(student.constructor == Student)
