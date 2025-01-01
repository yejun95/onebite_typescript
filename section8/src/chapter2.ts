/**
 * keyof 연산자
 */

interface Person {
  name: string;
  age: number;
}

// key가 유니온 타입으로 추출된다. name | age | etc | .... 
function getPropertyKey(person: Person, key: keyof Person) {
  return person[key];
}

const person: Person = {
  name: "홍길동",
  age: 27,
};

getPropertyKey(person, "name"); // 홍길동

// typeof 를 통한 타입 추론

type Table = typeof table;

const table = {
  name: "테이블",
  price: 10000
};

// typeof를 통해 table 변수의 프로퍼티를 추출하고 이를 keyof로 감싸 타입으로 만들어준다.
function getTableInfo(table: Table, key: keyof typeof table) {
  return table[key];
}
