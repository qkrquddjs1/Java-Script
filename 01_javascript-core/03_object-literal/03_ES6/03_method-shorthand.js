// 메서드 단축

// ES5 에서 메서드를 정의하려면 프로퍼티의 값으로 함수를 할당한다.

var dog = {
    name : '뽀삐',
    eat : function (food) {
        console.log(`${this.name}(은)는 ${food}를 맛잇게 먹어요`);
    }
};

dog.eat('고구마');

// ES6에서 메서들 정의할때 function 키워드를 생략한 축약 표현을 사용할 수 있다.

var dog2 = {
    name : '뽀삐',
    eat  (food) {
        console.log(`${this.name}(은)는 ${food}를 맛잇게 먹어요`);
    }
};

dog2.eat('고구마');