//  Objects
//  one of the JavaScript's date types.
//  a collection of related date and/or functionality.
//  Nearly all objects in JavaScript are instances of Object
//  object = { key : value};

//  Objects
//  JavaScript의 날짜 유형 중 하나입니다.
//  관련 날짜 및/또는 기능의 모음입니다.
//  JavaScript의 거의 모든 객체는 Object의 인스턴스입니다.
//  오브젝트는 key와 value의 집합체
//  오브젝트는 키 우리가 접근할 수 있는 변수 프로폴티와 프로퍼티가 가지고 있는 값 두가지로 나눠어짐

//  1. Literals and properties

//  1. 리터럴 및 속성
const name = 'ellie';
const age = 4;
print(name, age);   // ()안의 'name', 'age'는 파라미터 , key는 (name, age), value는 (ellie, 4)
function print(name, age) {
    console.log(name);
    console.log(age);
}

//  이렇게 작성하면 보기도 힘들고 개선하기도 관리하기도 힘들다

const obj1 = {};                // 'object literal' syntax
const obj2 = new Object();      // 'object constructor' syntax

//  오브젝트 만드는 법인 '{}' 을 이용하는 방법, 'class'를 이용해서 'new'
//  라는 키워드 중에서 'class' 템플릿을 이용해서 오브젝트를 만드는 방법
function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ellie = {name: 'ellie', age: 4 };     // 자바스크립트에서는 'class'가 없어도 괄호를 이용해서 오브젝트 생성 가능
print(ellie);

//  이렇게 쓰면 관리하기 훨씬 수월하다.
//  자바스크립트는 동적으로 런 타입일때 결정되는 언어

//  with JavaScript magic (dynamically typed language)
//  can add properties later
ellie.hasJob = true;    // 이처럼 우리가 네임과 오브젝트를 정의하였으면에 불구하고 그 뒤로 추가도 가능하다.
console.log(ellie.hasJob);  // 하지만 가능하면 피해서 코딩하는 것이 좋다.

//  can delete properties later
delete ellie.hasJob;    // 그리고 자바스크립트는 삭제도 가능합니다.
console.log(ellie.hanJob);

//  2. Computed properties
//  key should be always string

//  2. 계산된 속성
//  키는 항상 문자열이어야 합니다.
console.log(ellie.name);
console.log(ellie['name']);  // ['']스트링 형태 위랑 아래 동일함
ellie['hasJob'] = true;
console.log(ellie.hasJob);

//  코딩할때는 '.'맞고 출력할 경우에도 '.'을 씀 실시간으로 원하는 'key'의 값을 받아오고 싶다면 
//  프로퍼티를 쓰는게 맞다

// function printValue(obj, key) {
//    console.log(obj.key);
// }
// printValue(ellie, 'name');
// undefined

//  이 함수는 'object'와 'key'를 받아서 ''object에 있는 'key'의 상응하는 ''value를 출력하는 함수
//  그래서 언제 어떤 'key'를 받을지 모르는 상황 원하는 'key'를 사용자에게 받아서 출력해야 되는 함수라면
//  'key'는 어떤걸 출력할 지 코딩하는 시점에서는 모른다. 그래서 여기서 'obj.key'라 하면
//  'printValue(ellie, 'name')'는 항상 스트링 타입으로 전달해야 한다  


function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');

//  3. Property value shorthand
//  3. 속성 값 속기
const person1 = { name: 'bob', age: 2};
const person2 = { name: 'steve', age: 3};
const person3 = { name: 'dave', age: 4};
//  여기서 4번째 사람을 만들고 싶다면 이름과 나이를 일일이 작성해야하는 번거로움이 있는데 편하게 작성하는 법
const person4 = makePerson('ellie', 30);
console.log(person4);
function makePerson(name, age) {
    return {
        name,       // name: name,
        age,        // age: age,    줄어쓴 것 
    };
}
//  함수를 이용해서 작성해서 대입한 것 
//  const person4 = new Person('ellie', 30);

//  4. Constructor Function
//  4. 생성자 함수
function Person(name, age) {
    //  this = {};  생략된것
    this.name = name;
    this.age = age;
    //  return this;    생략된것
}
//  다른 계산을 하지 않고 순수하게 오브젝트를 생성하는 함수들은 보통 대문자로 시작하도록 함수들을 만들고 
//  'return'이라는 값을 하지 않고 'this.name'이런 식으로 'class'처럼 작성하게 됩니다.
//  이렇게 작성하면 자바스크립트 엔진이 오브젝트를 생성해 줍니다.

//  5. in operator: property existence check (key in obj)
//  5. in 연산자: 속성 존재 확인(obj의 키)
console.log('name' in ellie);   //  'true'로 나오면 있는 것
console.log('age' in ellie);
console.log('random' in ellie); //  정의하지 않는 다른 키를 사용하면 'false'
console.log(ellie.random);  // 정의하지 않는 접근하게 되면 'undefined'

//  6. for..in vs for..of
//  for(key in obj)
console.cleat();    // 이전에 있는 로그를 지울때 쓰임
for (key in ellie) {
    console.log(key)
}

//  for (value of iterable)
const array =[1, 2, 4, 5];
// for(let i = 0; i < array.length; i++) {
//    console.log(array[i]);
// }   -> 이렇게 작성하면 보기 불편하다
for(value of array) {   // array의 모든 값들이 'value'에 할당되면서 블럭안에서 순차적으로 출력하거나 값 계산할 수 있다.
    console.log(value);
}

//  7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20'};
const user2 = user;
//  유저라는 오브젝트를 만들고 유저2가 유저를 가르키게 만들었음
user2.name = 'coder';   // 엘리는 코더로 할당 변경함
console.log(user);

//  old way 예전 복제방법
const user3 = {}; // 비어있는 오ㅗ브젝트를 만들고
for (key in user) {
    user3[key] = user[key];
}
console.clear();
console.log(user3);
//  이 코드는 유저 안에 있는 이 'key'들은 빙글빙글 돌면서 첫번째 'key'는 이름이 되고 두번째 'key'는 'age'가 된다.
//  첫번째 이름일 때는 유저3에 새로운 프로퍼티 'name'을 추가 할 건데 값은 우리가 기존에 있는 유저의 'key'이름의 'value'
//  엘리가 할당이 되고 유저3에 프로퍼티가 추가가 되고 값은 유저에 있는 'age'가 할당이 됨 이런식으로 메뉴얼하게 복수 할 수 있음.

//  new way
const user4 = {};   // 비워져있는 것을 정리한 다음에
Object.assign(user4, user);  // user4를 전달해서 복사하고자 하는 오브젝트에 전달하면 된다.
// const user4 = Object.assign({}, user);   // 로 작성해도 된다.
console.log(user4);

//  another example
//  다른 예시
const fruit1 = { color: 'red'};
const fruit2 = { color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
//  blue와 big이 콘솔에 출력이 됨, 그 이유는 밑으로 갈수록 덮어씌워지기 때문이다