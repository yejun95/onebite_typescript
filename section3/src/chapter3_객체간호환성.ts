/**
 * 기본 타입간의 호환성
 */

let num1: number = 10;
let num2: 10 = 10;

/**
 * 객체 타입간의 호환성
 * -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?
 * 프로퍼티를 기준으로 호환성 체크
 */

type Animal = {
  name: string;
  color: string;
}

type Dog = {
  name: string;
  color: string;
  breed: string;
}

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "borwn",
  breed: "진도"
}

animal = dog;

// dog 타입이 더 프로퍼티가 많아서 못넣음
// 타입스크립트의 객체는 프로퍼티를 기준으로 하는 구조적 타입 시스템 사용
// dog = animal;

type Book = {
  name: string;
  price: number;
};

type Programmingbook = {
  name: string;
  price: number;
  skill: string;
}

let book: Book = {
  name: "북",
  price: 10000
}

let pBook: Programmingbook = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "reactjs"
}

book = pBook
// pBook = book



/**
 * 초과 프로퍼티 검사
 */

let book2: Book = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  // skill: "reactjs" 직접 넣는 것은 불가능
}

