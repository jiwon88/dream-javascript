//  JSON
//  JavaScript Object Notation
//  JSON
//  자바스크립트 객체 표기법

//  1. Object to JSON
//  stringify(obj)
//  1. 객체를 JSON으로
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    //  Symbol: Symbol("id"), 자바스크립트에만 있는 특별한 데이터는 json에 포함되지 않습니다.
    jump: () => {
        console.log(`${name} can jump!`);
    },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color']);  // 함수형태아님 배열로도 가능함
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.loy(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'ellie' : value;    // 'key'가 이름이라는 것이 들어오게 되면 'ellie'로 설정하고 'key'가 아닌 경우에는 오리지널의 'value'로 설정
});  
// 세밀하게 통제할거면 이렇게 한다.
console.log(json);
//  json으로 변환


//  2. JSON to Object
//  parse(json)
//  2. JSON에서 객체로
console.clear();
json = JSON.stringify(rabbit); // Json이라는 stringify를 이용해서 웹 오브젝트를 Json으로 변환
const obj = JSON.parse(json);  // Json으로부터 오브젝트를 만듦
console.log(obj);
rabbit.jump();
// obj.jump(); -> 토끼라는 오브젝트는 json으로 변환할 때는 함수가 포함이 x, 데이터 들만 json으로 갔다가 다시 json 다른 오브젝트로
// 변환했으니까 jump라는 메소드는 포함이 x, 오브젝트에는 jump라는 기능이x

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());   // 오류남 이유는 birthDate는 스트링이기 때문이다. 
