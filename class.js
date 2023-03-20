'use strict';
//  Object-oriendted programming
//  class: template
//  object: instance of a class
//  Javascript classes
//  - introduced in ES6
//  - syntactical sugar over prototype-based inheritance

// 객체 지향 프로그래밍
// 클래스: 템플릿
// 객체: 클래스의 인스턴스
// 자바스크립트 클래스
// - ES6에 도입됨
// - 프로토타입 기반 상속에 대한 구문 설탕

//  1. Class declarations   클래스 선언
class Person {
    // constructor  생성자
    constructor(name, age) {
        // fields   필드
        this.name = name;
        this.age = age;
    }
    //  methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person('ellie', 20 );
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();
//  새로운 오브젝트를 만들땐 'new' 라는 키워드를 써야한다.
//  console은 맞게 실행이 되었는지 구글 로그볼러고 쓰임

//  2. Getter and setters   게터 및 세터
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    //  'age' 라는 'getter'를 정의하는 순간 'this.age'는 'age'메모리에
    //  올라가 있는 데이터를 읽어오는게 아니라 'getter'를 바로 호출하게 된다.
    //  'setter'정의 하는 순간 값을 할당할 때 메모리의 값을 할당하는 것이 아니라
    //  'setter'를 호출하게 된다. 정확하게는 전달된 'value(값)'를 'this.age'
    //  에 할당할 때 메모리의 값을 업뎃x, 'setter'를 호출하게 되는 것
    //  즉 'setter'를 돌아와서 문장을 또 다시 'setter'를 호출하고 무한정 반복되게됨
    //  무한정 반복을 방지하기 위해서는 'getter'와 'setter' 안에서 쓰여지는 변수의 이름을
    //  다른 걸로 만들어줘야 한다.

    get age() {
        return this._age;
    }
    set age(value) {
        //if (value < 0) {
        //    throw Error('age can not be negative');
        //} -> 이렇게 나타내도 좋고
        this._age = value < 0 ? 0 : value;
        //이렇게 0아래 숫자들을 0으로 나타낼 수 있다.
        }
    }
//  사람이 'age'가 -1살인 경우는 말이되지 않기 때문에 'get'이라는 키워드를 
//  이용해서 값을 'return'하고 'set'이라는 키워드를 이용해서 값을 설정할 수 있다.
//  대신 'set'은 값을 설정하기 때문에 'value(값)'를 받아와야 한다.
const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);


//  3. Fields (public, private)
//  Too soon!
//  https://developer.mozilla.org/ko/docs/Web/JavaScript
class Experiment {
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

//  최근에 추가가 됨 '#' 프라이빗 필드이고 프라이빗 필드는 클래스 내부에서만
//  값이 보여지고 접근이 되고 값이 변경이 가능하지만 클래스 외부에서는 이 값을
//  읽을 수도 변경할 수도 없습니다. 'publicField'는 '2'가 출력이 되지만
//  'privateField'는 'undefined'로 나옴 
//  최신꺼기때문에 사용할거면 바벨을 이용해야한다.

//  4. Static properties and methods    정적 속성 및 메서드
//  Too soon!
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }
    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

//  'Article1, 2'의 오브젝트를 만들게 되면 여기서 'static'를 사용하지 않았다면
//  이렇게 오브젝트를 이용해서 오브젝트에 퍼블리셔를 출력할수 있지만 'undefined' 나옴
//  그 말은 이 오브젝트 안에 퍼블리셔는 값이 지정되지 않은것을 알 수 있는데 그건 바로
//  'static'는 오브젝트 마다 할당되어 지는 것이 아니라 'Article'클래스 자체에 
//  븉어 있기 때문이다. 'console.log(Article.publisher);'를 붙여주는 순간 
//  'Dream Coding'이 나오는 것을 확인 할 수 있다.

//  5. Inheritance      
//  a way for one class to extend another class.
//  계승
//  한 클래스가 다른 클래스를 확장하는 방법.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    
    draw () {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {       
    draw () {
        super.draw();
        console.log('⚠️');
    }          
     // 삼각형을 색다르게 그려보고 싶다면 트라이앵글에서 'draw'라는 메소드를 오버라이딩하면 된다.                       
    getArea() {                         
        return (this.width * this.height) / 2;
    }
}
    // 필요한 함수만 재정비해서 쓸수 있다. 이것을 오버라이딩이라 한다.

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
rectangle.draw();
console.log(triangle.getArea());
//  도형에 같은 속성을 주기위해서 시작함
//  'Shape' 클래스 안에 'width, height, color' 총 3가지의 필드가 있고 
//  'draw' 메소드 하나 'getArea' 메소드 하나 총 2개가 있다. 여기서
//  'class Rectangle' 을 만들고 싶으면 동일하게 계속 반복하는 것보다는 'extends'
//  라는 클래스를 이용해서 'Shape'을 바로 연장합니다. 이렇게 정의만 해도 'Shape'에서
//  정리한 필드와 메소드가 자동적으로 'Rectangle'에 포함이 된다.
//  동일한 것들은 일일히 작성하지 않아도 'extends'를 이용해서 동일한 것들을 재사용이 가능하다.

//  6. Class checking: instanceOf       클래스 검사
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);

// 클래스를 이용해서 만들어진 'instance'인데 왼쪽에 있는 'rectangle'
//  오브젝트가 오른쪽에 있는 클래스의 'instance' 클래스를 이용해서 만들어진
//  건지 아닌지 확인하는 거다. 그래서 'true'와 'false'를 'return'하는 것

//  자바스크립트의 모든 오브젝트는 오브젝트를 상속한 것이다. 