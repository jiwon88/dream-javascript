'use strict';

//  Array 🎖️

//  1. Declaration  선언
const arr1 = new Array();
const arr2 = [1, 2];
//  배열만드는법 2번째가 더 잘쓰임

//  2. Index position
const fruits = ['🍎', '🍌']; // ''은 문자열 0부터 시작한다.
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);  // 배열 불러오는 법
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length -1]); // 갯수가 많을때는 마지막을 불러오고 싶을때 씀, 첫번째는 0임

console.clear();
//  3. Looping over an array
//  3. 배열 반복
//  print all fruits   모든 과일 출력
//  a. for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//  b. for of
for(let fruit of fruits) {
    console.log(fruit);
}

//  c. forEach  간단하게 출력하는 방법
fruits.forEach((fruit, index, array) =>  // function은 생략가능
console.log(fruit, index));
// fruits.forEach(function(fruit, index, array) {
//    console.log(fruit, index); );}                             
// 동시에 쓰면 동시에 출력 array는 전체적으로 출력
// fruit만 출력하면 과일만 출력이 되고 index를 출력하면 숫자가 출력됨

//  4. Addition, deletion, copy
//  4. 추가, 삭제, 복사
//  push: add an item to the end
//  push: 뒤에 항목 추가
fruits.push('🍓', '🍇');
console.log(fruits);    // 추가법
//  pop: remove an item from the end
//  팝: 뒤에서 항목 제거
fruits.pop();
fruits.pop();           //한개뺄거면 pop한개 출력, 2개뺄거면 2개 출력
console.log(fruits);    

//  unshift: add an item to the benigging    
//  앞에서 항목 추가
fruits.unshift('🍐', '🫐');
console.log(fruits);

//  shift: remove an item from the benigging
//  앞에서 항목 제거
fruits.shift();
console.log(fruits);

//  🔥note!! shift, unshift are slower than pop, push
//  🔥메모!! shift, unshift는 pop, push보다 느립니다. 
//  느린이유는 뒤에서 추가하는 것은 넣고 빼고 쉽게 할수 있는데 앞에서 추가밑 빼는거는 추가할 배열에 모든 index가 뒤로 빠지기 때문이다.
//  그렇기 때문에 shift, unshift보다는 pop하고 push를 사용하는 것이 낫다.

//  splice: remove an item by index position
//  인덱스 위치(현재 위치)에서 항목 제거
fruits.push('🍓', '🍊', '🍅');  // 추가한 것
console.log(fruits);
//  fruits.splice(1);     원하는 인덱스만 지정하고 어떤 걸 지울지 지정하지 않으면 지정한 인덱스빼고 모두 지움
fruits.splice(1, 1);    // 사과만 지워짐
console.log(fruits);
fruits.splice(1, 1, '🌽', '🍒');   // 바나나 지우고 그 자리에 옥수수랑 체리를 넣는 법
console.log(fruits);

//  combine two arrays
//  두 배열 결합
const fruits2 = ['🥝', '🥭'];
const newFruits = fruits.concat(fruits2); // fruits + fruits2 결합
console.log(newFruits);

//  5. Searching
//  5. 검색
//  find the index
//  인덱스 찾기
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍒'));  // 인덱스가 몇번째인지 콘솔에서 찾아줌
console.log(fruits.indexOf('🍅'));
console.log(fruits.indexOf('🫑'));  // 인덱스가 존재하지 않을때는 -1로 나타낸다.

//  includes  포함
console.log(fruits.includes('🍒')); // 과일이 있는지 없는지 찾아줌 있으면 'true', 없으면 'false'
console.log(fruits.includes('🥒'));

//  lastIndexOf
console.clear();
fruits.push('🍓');
console.log(fruits);
console.log(fruits.indexOf('🍓'));      //  딸기를 하나 더 추가하면 앞에 있는 인덱스로 출력이 되서 3이 나온다.
console.log(fruits.lastIndexOf('🍓'));  //  딸기중에 끝에 있는 딸기 인덱스를 출력한다. 그래서 6이 나온다.
