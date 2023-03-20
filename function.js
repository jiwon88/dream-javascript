//  Function                    
//  -fundamental building block in the program
//  -subprogram can be used multiple times
//  -performs a task or calculates a value

//  Function
// -프로그램의 기본 빌딩 블록
// -subprogram은 여러 번 재사용할 수 있습니다.
// -작업을 수행하거나 값을 계산합니다.

// 자바스크립트에서 function 정의하는 방법
//  1. Function declaration
//  function name(param1, param2) { body... return; }           function이라는 키워드 이용해서 name(함수의 이름 지정) param을 나열한 다음 {body(함수의 기본적인 비즈니즈 로직을 작성) 다음에 return을 해준다}
//  one function === one thing                                  하나의 function(함수)는 하나의 일만 하도록 만들어야한다.
//  naming: doSomething, command, verb                          함수의 이름은 무언가를 동작하는 형태로 doSomething, command, verb 같은 동사의 형태로 지정해야함
//  e.g. createCardAndPoint -> createCard, createPoint          이름을 지정할때 (createCardAndPoint) 두가지가 있다면 이것을 세분화해서 나눠서 지정해야한다(createCard, createPoint)
// function is object in JS                                     자바스크립트에서 함수는 물체(object)이다
function printHello() {
    console.log('Hello');       //  console.log()->   출력
}
printHello();

function log(message) {                                         //  위에는 hello밖에 출력이 안됨 유용한 함수 예시
    console.log(message);                                       //  파라미터로 메세지를 전달하면 전달된 메세지를 화면에 출력되게 만든것
}                                                               //  log()에 원하는 메세지 입력
log('Hello@');                                                  //  '파라미터는 매개변수' 서브루틴의 인풋으로 제공되는 여러 데이터 중 하나를 가리키기 위해 사용 
log(1234);

//  2. Parameters                                               매개변수
//  premitive parameters: passed by value                       기본 매개변수: (메모리에 value(값)가 그대로 저장되어 있기에)값으로 전달
//  object parameters: passed by reference                      객체 매개변수: (메모리에 reference(참조)가 저장되어 지니까)참조로 전달
function changeName(obj) {                                      //  ex) changeName이라는 함수는 전달돤 obj에 이름을 coder로 무조건 
    obj.name= 'coder';                                          //  변경하는 함수
}                                           
const ellie = { name: 'ellie'};                                  
changeName(ellie);                                              
console.log(ellie);
//  const에 '엘리'라는 오브젝트를 만들어서 할당해주면 메모리에는 오브젝트가 
//  만들어진 reference가 메모리에 들어감 이 reference는 메모리 어딘가에                                 
//  가리키고 있다. 이처럼 changeName 엘리를 전달하게 되면 이 전달 된 
//  엘리가 가리키고 있는 곳의 이름을 'coder'로 이름을 변경하게 된다.
//  그래서 출력하게 되면 엘리 이름이 아닌 'coder'로 뜬다.    


// 3. Default parameters (added in ES6)
//  ES6에 추가된 것 
function showMessage(message, from) {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');
//  함수에 메세지와 from 두가지 파라미터를 받아옴 그래서 메세지가 누구로 부터
//  왔는지 출력이 되는데 여기서 보시면 쉬운 메세지를 호출할때 하나의 메세지만 전달 된 것으로
//  볼수 있다. 
function showMessage(message, from) {
    if (from === undefined) {
        from = 'unknown';
    }
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

//  그렇기 때문에 여기서 메세지는 출력이 잘 되지만 from은 정의되어 있지 않아서
//  undefined로 나옴 그래서 이처럼 파라미터의 값이 전달되지 않을 경우를 대비해서 from이 
//  undefined면 가장 기본적인 'unknown' 이라는 스트링을 추가하라고 해서 'unknown'이 
//  출력되는 걸 볼 수가 있다.

function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');
//  하지만 일일히 안적어도 파라미터 옆에다가 원하는 디폴 값을 지정해 놓으면 사용자가 파라미터를
//  전달하지 않을 때 이 값이 대체 되어서 사용되어 진다.

//  4. Rest parameters (added inn ES6)
//  ES6에 추가가 됨
function printAll(...args) {                //...닷을 세개를 작성하게 되면 배열 혀앨로 전달되게 됩니다.
    for ( let i = 0; i < args.length; i++){
        console.log(args[i]);
    }
}
printAll('dream', 'coding', 'ellie');
//  printAll이라는 함수로 호출할때 인자를 총 3개 전달했는데 args는 세 개의 값이 담겨져 있는 배열입니다.
//  그래서 배열 형태로 전달이 된다. 그래서 for 루프를 이용해서 처음부터 args 갯수만큼 돌면서 처음의 값을 출력하고
//  두번째 출력, 세번째 출력을 하게 되는거다. 그래서 dream, coding, ellie가 출력됨
function printAll(...args) {                
    for ( let i = 0; i < args.length; i++){
        console.log(args[i]);
    }
    for (const arg of args) {
        console.log(arg);
    }
}
printAll('dream', 'coding', 'ellie');
//  추가로 배열을 출력을 할때는 간단하게 for(of)의 문법을 이용해서 간단하게 출력할 수도 있다.
//  arg에 있는 모든 값들이 차례 차례대로 하나씩 지정되어 출력하게 된다.
function printAll(...args) {                //...닷을 세개를 작성하게 되면 배열 혀앨로 전달되게 됩니다.
    for ( let i = 0; i < args.length; i++){
        console.log(args[i]);
    }
    for (const arg of args) {
        console.log(arg);
    }
    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');
//  더 간단하게 하고 싶다면 배열에 forEach 함수형 언어를 이용해서 출력해도 괜찮다. 

//  5. Local scope
let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello';
    ; console.log(message)// local variable 지역 변수이기 때문에 안에서만 접근이 가능하다.
    console.log(globalMessage);
}
printMessage();
//  {} 안에서는 밖이 보이고 밖에서는 안이 보이지 않는다.
//  console.log(message)를 밖에서 출력하면 에러가 발생한다.
function printMessage() {
    let message = 'hello';
    ; console.log(message)
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
    // console.log(childMessage); // error
}
printMessage();

//  함수안에 또 다른 함수를 선언할 수 있다. 'printMessage'함수 안에
//  'printAnother'이라는 함수가 들어있는데 똑같은 원칙에 따라서 자식(printAnother)은
//  부모(printMessage)에게서 정의된 메세지(hello)들을 확인할 수 있다. 하지만
//  자식안에 정의된 메세지를 부모 상위 위에서 볼수 없다.(에러가 발생한다)

//  6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

//  함수는 ()안에 값들을 전달 받아서 계산된 값을 return할 수 있다.
//  그래서 sum이라는 함수를 호출하면 (1, 2)괄호안에 있는 1 + 2를 더해서
//  3이 return이 되는걸 확인할 수 있다.
//  return 타입이 함수가 없는 것은 'return undefined;' 가 들어가 있는거랑 똑같다.
//  'return undefined;'은 생략이 가능하다.

//  7. Early return, early exit
//  bad
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic...
    }
}

//  good
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
        // long upgrade logic...
    }
}

//  'upgradeUser'이라는 함수 안에서 유저의 포인트가 10이상일
//  경우에만 업그레이드를 진행하는 로직으로 블럭안에 작성 가독성이 떨어진다.
//  이런 경우에는 'false'와 번갈아 쓰는것보다 조건이 맞지 않을 빨리 'return'해서 
//  함수를 종료하고 조건이 맞을때만 필요한 로직들을 실행하는 것이 좋습니다.
//  나중에 코드를 작성할 때 조건이 맞지 않는 경우 값이 'undefined'인 경우
//  값이 -1인 경우 빨리 'return'을 하고 필요한 로직들은 그 뒤에 작성해야 한다

//  First-class function
//  functions are treated like any other variable
//  can be assiqned as a value to variable
//  can be passed as an argument to other functions
//  can be returned by another function

// 일급 함수
// 함수는 다른 변수처럼 취급됩니다.
// 변수에 값으로 할당 가능
// 다른 함수에 인수로 전달할 수 있습니다.
// 다른 함수에 의해 반환될 수 있습니다.

//  1. Function expression
//  a function declaration can be called earlier than it is defiend. (hoisted)
//  a function expression is created when the execution reaches it.

// 1. 함수 표현식
// 함수 선언은 정의되기 전에 호출될 수 있습니다. (hoisted)
// 실행이 도달하면 함수 표현식이 생성됩니다.

const print = function () { //  anonymous function
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

//  함수를 선언함과 동시에 'print'라는 변수에 할당하는 것을 볼 수 있다. 
//  이렇게 'function'에 아무 이름이 없고 'function'에 키워드를 이용해서
//  파라미터와 블럭을 이용함 이렇게 함수에 이름이 없는것을 'anonymous function'
//  이라고 부릅니다.

//  'function declaration'와 'function expression'의 가장 큰 차이점은
//  'function expression'은 할당된 다음부터 호출이 가능합니다.
//  'function declaration'은 'hoisted'가 된다. 함수가 선언되기 이전에 호출해도 호출이 가능하다.
//  이것은 자바스크립트 엔진이 선언된 것을 제일 위로 올려주기 때문이다. 

//  print(); <- expression은 오류나고 declaration은 가능하다.
//   ex) const print = function() {
    //    console.log('print');
//       }

//  2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    }else {
        printNo();
    }
}
//  정답하고 정답이 맞을때 호출하는 함수하고 정답이 틀리면 호출하게 될 함수2개를 전달해 준다.
//  anonymous function
const printYes = function () {
    console.log('yes!');
};

//  named function
//  better debugging in debugger's stack traces
//  recursions
const printNo = function print () {
    console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

//  Arrow function
//  always anonymous
//  화살표 함수
const simplePrint = function () {
    console.log('simplePrint!');
};

// const simplePrint = () => console.log('simplePrint!');
//  위에 함수를 아래로 함축시켜서 쓸 수 있다.

const add = (a , b) => a + b;   // 파라미터 함수를 함축시킨것
//  const add = function (a , b) { 
//    return a + b;
//  };
//  위가 함축 아래가 함축 x
const simpleMultiply = (a , b) => {
    // do something more
    return a * b;
};

//  IIFE: Immediately Invoked function Expression
//  즉시 호출되는 함수 표현식
function hello () {
    console.log('IIFE');
})();
//  선언함과 동시에 호출이 되게 할려면 '{})();' 하면 바로 호출이 된다.
//  최근에는 잘 안쓰임 