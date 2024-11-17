/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은타입에서 좁은타임으로
 * 타입을 상황에 따라 좁히는 방법
 */

type Person = {
  name :string;
  age: number;
};

// value => number : toFixed
// value => string : toUpperCase
// value => Date : getTime
// value => Person : name은 age살 입니다.
function func(value: number | string | Date | null | Person) {
  if (typeof value === 'number') { // 타입 가드
    console.log(value.toFixed());
  } else if (typeof value === 'string') { // 타입 가드
    console.log(value.toUpperCase());
  } else if (value instanceof Date) { // null은 이 조건을 만족할 수 없음
    console.log(value.getTime())
  } else if (value && "age" in value) { // 
    console.log(`${value.name}은 ${value.age}살 입니다.`)
  }
}