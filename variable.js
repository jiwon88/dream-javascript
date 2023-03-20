// whole-script strict mode syntax
// Javascript is very flexible
// flexible === dangerous
// added ECMAScript 5

// 1. Use strict
// added in Es 5
// use this for Valina Javascript.

// 전체 스크립트 엄격 모드 구문
// Javascript는 매우 유연합니다.
// 유연함 === 위험함
// ECMAScript 5 추가

// 1. 엄격한 사용
// Es 5에 추가됨
// Valina Javascript에 사용합니다.

'use Strict';

// 2. Variable  rw(read/write)
// let (added in ES6)

// 2. 변수 rw(읽기/쓰기) 읽기 쓰기 가능
// let (ES6에 추가됨)

let globalName = 'global name';
{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

// var(don't ever use this!)
// var hoisting (move declaration from bottom to top)
// has no block scope

// var(절대 사용하지 마세요!)
// var 호이스팅(선언을 아래에서 위로 이동)
// 블록 범위가 없습니다.

{
    age = 4;
    var age;
}

console.log(age);

// 3. Constant, r(read only) 읽기만 가능
// ues const whenever possible.
// only use let if variable needs to change.

// 3. 상수, r(읽기 전용) 읽기만 가능
// 가능할 때마다 const를 사용합니다.
// 변수를 변경해야 하는 경우에만 let을 사용합니다.

const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: primitive types, frozen objects (i,e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes

// 메모!
// 변경할 수 없는 데이터 유형: 기본 유형, 동결된 객체(i,e. object.freeze())     변경 불가능
// 변경 가능한 데이터 유형: 기본적으로 모든 객체는 JS에서 변경 가능합니다.           변경 가능
// 몇 가지 이유로 항상 불변 데이터 유형을 선호합니다.
// - 보안
// - 스레드 안전성
// - 사람의 실수 줄이기

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol     메모리저장
// object, box container
// function, first-class function

// 4. 변수 유형
// 프리미티브, 단일 항목: 숫자, 문자열, 부울, null, 정의되지 않음, 기호
// 객체, 박스 컨테이너
// 함수, 일급 함수

// number
const count = 17; //integer
const size = 17.1; //decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values: infinity, -infinity, NaN
// 숫자 - 특수 숫자 값: 무한대, -무한대, NaN

const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigTnt (fairly new, don't use ot yet)
// bigTnt(상당히 새로운 기능, 아직 ot를 사용하지 않음)

const bigInt =12345678901234456789123456789n;
console.log('value: ${bigInt}, type: ${typeof bigInt}');

// string
const char ='c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: $ {greeting}, type: ${typeof greeting}`);
const helloBob = `h1 ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value

// 부울
// 거짓: 0, null, 정의되지 않음, NaN, ''
// true: 다른 값

const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing =null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
// 기호, 개체에 대한 고유 식별자 생성

const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
// 객체, 실생활 객체, 데이터 구조

const ellie = { name: 'ellie', age: 20 };

// 5. Dynamic typing: dynamically typed language
// 5. 동적 타이핑: 동적 타이핑 언어

let text = 'hello';
console.log(text.charAt(0)); // h
console.log(`value: $ {text}, type: ${typeof text}`);
text = 1
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0));