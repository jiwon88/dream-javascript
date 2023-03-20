// 1: String concatenation
// 1: 문자열 연결

console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2.Numeric operators
// 2. 숫자 연산자

console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder            나누고 나머지 값
console.log(2 ** 3); // exponentiation      2의 3승

// 3. Increment and decrement operators
// 3. 증가 및 감소 연산자

let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;           counter에 일을 더해서 counter에 할당한 다음에 preIncrement에 
// preIncrement = counter;          변수에 counter 변수를 할당하는 것

const PostIncrement = counter++;
//  postIncrement = counter;        먼저 counter(변수의 값)을 postIncrement에 할당한 다음에 counter
//  counter = counter + 1;          의 값을 1 증가 시키는 것

// 4.Assignment operators
// 4.할당 연산자

let x = 3;
let y = 6;
x += y;     //  x = x + y; 를 줄인 것
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
// 5. 비교 연산자

console.log(10 < 6); // less than                   미만
console.log(10 <= 6);// less than or equal          작거나 같음
console.log(10 > 6); // greater than                보다 큰
console.log(10 >= 6); // greater than ar equal      ar 보다 큼 같음

// 6. Logical operators: || (or), && (and), ! (not)
// 6. 논리 연산자: || (또는), && (및), ! (아니다)

const value1 = false;
const value2 = 4 < 2;

// || (or), finds the first truthy value
// || (또는) 첫 번째 truthy 값을 찾습니다. 첫번째가 트루면 트루임
console.log(`and: ${value1 && value2 && check()}`);

// && (and), finds the first falsy value
// && (and), 첫 번째 거짓 값을 찾습니다. 첫번째가 거짓이면 거짓임
console.log(`and:  ${value1 && value2 && check ()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.something
// 긴 if 문을 압축하는 데 자주 사용됨

function check() {
    for (let i = 0; i < 10; 1++) {
        //wasting time
        console.log('');
    }
    
    return true;
}

// ! (not)
console.log(!value1);

// 7. Equality
// 7. 평등
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
// == 느슨한 평등, 유형 변환 포함
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
// === 완전 같음, 유형 변환 없음
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
// 참조에 의한 객체 동등성
const ellie1 = { name: 'ellie'};
const ellie2 = { name: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

// equality - puzzler
// 평등 - 수수께끼
console.log(0 == false);            //true      0은 false
console.log(0 === false);           //false     0은 불리언 타입이 아님
console.log('' == false);           //true      ''은 문자열
console.log('' === false);          //false     ''은 불리언 타입이 아님
console.log(null == undefined);     //true      null, undefined은 같은 것으로 간주됨
console.log(null === undefined);    //false     하지만 null, undefined는 다른 타입

//  8. Conditional operators: if
//  if, else if, else
const name = 'ellie';
if ( name === 'ellie') {
    console.log('Welcome, Ellie');
}   else if ( name === 'coder') {
    console.log('You are amazing coder');
}   else {
    console.log('unkwnon');
}

//  if  ( name === 'ellie')가 트루면 그 안에 있는 {} 가 실행함 
//  if  ( name === 'ellie')가 아니고 'coder'면 coder {}가 실행
//  coder, ellie 둘다 틀리면 'unkwnon'이 실행됨 

//  9. Ternary operator: ?
//  condition ? value1 : value2;
console.log( name === 'ellie' ? 'yes' : 'no');
// 값을 할당하거나 간단하게 쓸 경우 활용됨 

//  10. Switch statement
//  use for multiple if checks
//  use for enum-like value check
//  use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
        console.log('love you!');
        break;
    case 'Firefox':
        console.log('love you!');
        break;
    // Chrome하고 Firefox가 같은 구문일땐 반복해서 쓰지말고
    // case Chrome
    // case Firefox 
    //  console.log('love you!');
    //  break;
    //  로 써도 된다.
    default:
        console.log('same all!');
        break;
} 
// ()안에 값이 맞으면 출력하고 아니면 멈춤


//  11. Loops    반복문
//  while loop, while the condition is truthy,  while은 (i > 0)가 나올때까지 무한대로 반복함
//  body code is executed.
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

//  do while loop, body code is executed first,  do, while은 먼저 실행한 다음에 조건이 맞는지 아닌지
//  then check the condition.                   검사함.
do {
    console.log(`do while: ${i}`);
    i--;
}   while (i > 0);

//  for loop, for(begin; condition; step)       시작하는 문장(begin) > condition > step
for ( i =3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for( let i = 3; i > 0; i = i - 2) {
    // inline variable declaration
    console.log(` inline variable for: ${1}`);
}

//  nested loops   왠만해서 피하는게 좋음
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j:${j}`);
    }
}

//  break, continue
//  Q1. iterate from 0 to 10 and print only even numbers
//  (use continue) 
for (let i =o; i < 11; i++) {
    if ( i % 2 === 0) {
        console.log(`g1. ${i}`);
    }
}

//  Q2. iterate from 0 to 10 and print numbers until
// reaching 8 (use break)
for ( let i = 0; i < 11; i++) {
    if( i > 8 ) {
        break;
    }
    console.log(` q2. ${i}`);
}