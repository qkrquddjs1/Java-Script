// 클래스 필드 정의 제안

class Book{
    // 클래스 정의 시 '프로퍼티 이름 = 값' 을 써주면 클래스 필드를 만들수 있다.
    // 최신 브라우저(Chrome 72 이상) 또는 최신 Node,js(버전 12 이상)에서만 실행 가능하다.
    name = '모던JavaScript';
    // this.은 constructor 내부 또는 메소드 내부에서 작성 해야 한다.
    // this.price = 35000;

    // 프로토타입 메소드

    intriduce() {
        console.log(`${this.name}(이)가 그렇게 재밋죠~`);
    }
}

const book = new Book();
console.log(Book.prototype.name);       //Book.prototype이 아닌 개별 객체에서만 클래스 필드가 설정
console.log(Book.prototype.intriduce);  // Book.protoye에 메소드가 설정
console.log(book.name)
