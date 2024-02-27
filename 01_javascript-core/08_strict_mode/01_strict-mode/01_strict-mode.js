// 엄격모드

function test() {
    // 암묵적으로 전역 변수가 된다.
    x = 10;
}

test();

// 개발자의 의도와 상관 없이 발생한 암묵적 전역은 오류 발생의 원인이 될 수 있다.
// => 잠재적 오류 발생을 근본적으로 막기 위해 ES5부터 엄격 모드가 추가 되었다.
console.log(x)