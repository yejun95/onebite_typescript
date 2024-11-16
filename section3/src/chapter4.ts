/**
 * 대수 타입
 * -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합 타입과 교집합 타입이 존재
 */

/**
 * 1. 합집합 - Union 타입
 */

let a: string | number | boolean;
a = 1;
a = "hello";
a = true;

let arr: (number | string | boolean)[] = [1, "hello", true];

type Dog = {
  name: string;
  color: string;
}

type Person = {
  name: string;
  language: string;
}

type Union1 = Dog | Person

let union1: Union1 = {
  name: "",
  color: "", 
}

let uion2: Union1 = {
  name: "",
  language: "",
}

let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};

// 집합 어디에도 포함되지 않기 떄문에 불가능
// let union4: Union1 = {
//   name: ""
// }


/**
 * 2. 교집합 타입 - Intersection 타입
 */

let variable: number & string;

type Intersection = Dog & Person;

// 프로퍼티가 빠짐없이 전부 포함되어야함
let intersection: Intersection = {
  name: "",
  color: "",
  language: ""
}