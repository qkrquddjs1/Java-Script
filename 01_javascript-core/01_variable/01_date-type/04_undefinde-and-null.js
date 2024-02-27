// var undef = undefined; -> 개발자가 의도적으로 변수에 할당하는 것은 지양 별로추천하지않음
var undef; // 자바스크립트 엔진이 변수 초기화 시 undefined 사용
console.log(undef);

// null은 변수에 값이 없다는 것을 의도적으로 명시할때 사용
var nullval='something';
nullval = null;
console.log(nullval);