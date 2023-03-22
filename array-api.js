// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  const result = fruits.join('^'); 
  console.log(result);
  // join은 배열에 있는 모두 더해서 스트링으로 나타내는 것 하지만 그냥 스트링이 아니고
  //  전달해준 'separated'라는 문자열을 통해서 각각 구분자('^', '₩')를 넣어서 스트링으로 만들어 줌
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const result = fruits.split(',');
  // 필수적으로 전달해야하는 구분자를 전달하지 않으면 문자열이 전체가 배열 한 곳에 들어가게 됨으로써
  // 'split'는 구분자를 꼭 전달해줘야 한다.
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
  console.log(array);
  // 'reverse'는 배열 안에 들어 있는 아이템의 순서를 거꾸로 만들어줌
  //  사실은 이 함수를 호출한 'array'도 순서가 바뀌어 있음
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2, 5)
  console.log(result);
  console.log(array);
  // 'splice'는 배열자체를 수정해줌
  
  // 'slice'는 배열에 특정한 부분을 'return'함 특정한 부분은 'start', 'end'로 지정할 수 있다.
  // 'start'는 배열에 시작하는 인덱스 'end'는 어디까지 할 건지 배열에서 인덱스를 지정해주면 되는데 
  // 'end'는 0, 2까지 지정하게 되면 2는 배제되고 0하고 1만 전달됩니다.
  //  'slice'는 배열에서 원하는 부분만 'return'에서 받아오고 싶을때 쓰면 된다.
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  const result = students.find((student) => student.score === 90);
    console.log(result);
  // 'find' 함수는 사용할때 콜백 함수를 사용해야 하고 맞으면 'true'를 'return', 아니면 'false'를 'return'
}

// Q6. make an array of enrolled students
{
  const result = students.filter((students) => students.enrolled);
  console.log(result);
  // 'filter'는 콜백 함수를 전달해서 콜백함수가 'true'인 것들만 모아서 새로운 배열을 전달해주는 것
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map((students) => students.score);
  console.log(result);
  // map은 배열안에 들어있는 요소 한가지 한가지를 다른 것으로 변환해주는 것
  // 배열에 있는 요소들을 우리가 원하는 함수를 이용해서 다른 방식으로 데이터를 만들고 싶을때 'map'을 이용
  // 콜백함수는 이해하기 쉬운걸로 쓰는게 좋다.
}

// Q8. check if there is a student with the score lower than 50
{
  console.clear();
  const result = students.some((students) => students.score < 50);
  console.log(result);

  const result2 = students.every((students) => students.score >= 50);
  console.log(result2);
  // 'some'은 배열 요소중에서 콜백함수중에 'return'이 있는지 없는지 확인해주는 것 배열중에 한개라도 있으면 'true'가 뜸
  // 'every'는 모든 요소들이 이 조건을 충족해야지만 'true'로 'return'이 된다. 안되면 'false'
  // const result2 = !students.every 여기서 '!'는 'false'라면 'true', 'true'라면 'false'
}
console.clear();
// Q9. compute students' average score
{
  const result = students.reduce((prev, curr) =>  prev + curr.score, 0);
    console.log('-----------');
    console.log(prev);
    console.log(curr);
  console.log(result / students.length);
  // 'reduce'는 배열에 있는 모든 요소들의 값을 누적하고 함께 모아놓을 때 쓰임 
  // 'reduceRight'은 순서가 거꾸로 누적되서 호출됨
  // console.log(result / students.length); -> 나누는 것
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students
  .map(students => students.score)
  .filter((score) => score >= 50)
  .join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
    .map((students) => students.score)
    .sort((a, b) => a - b)
    .join();
  console.log(result);
  //  'sort'는 콜백함수에 이전 값과 현재 값이 전달되는데 정렬할때 쓰임
  //  점수가 낮은게 위로 나열할려면 a - b
  //  점수가 높은걸 위로 나열할려면 b - a
}
