/**
 * 함수 타입의 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는 것
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 */

// 기준1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b; // 업캐스팅이라 가능
// b = a; 불가능 -> number 타입을 number 리터럴 타입으로 넣으면 다운 캐스팅이기 때문에 불가능


// 기준2. 매개변수가 호환되는가
// 2-1. 매개변수의 개수가 같을 때

type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; 매개변수 타입으로 호환성 판단 시 업캐스팅일 때 안됨
d = c; // 다운캐스팅이라 가능

type Animal = {
  name :string;
}

type Dog = {
  name :string;
  color: string;
}

let animalFunc = (animal: Animal) => {
  console.log(animal.name)
};
let dogFunc = (dog: Dog) => {
  console.log(dog.name)
  console.log(dog.color)
};

// animalFunc = dogFunc; 업캐스팅 불가
dogFunc = animalFunc; // 다운 캐스팅 가능

let testFunc = (animal: Animal) => {
  console.log(animal.name)
  // console.log(animal.color) Dog에 있는 타입을 사용할 수 없기에 업캐스팅이 불가
}

let testFunc2 = (dog: Dog) => {
  console.log(dog.name) // animal의 프로퍼티를 모두 사용 가능하므로 업캐스팅 가능
}


// 2-2. 매개변수의 개수가 다를 때

type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b)  => {};
let func2: Func2 = (a) => {};

func1 = func2 // 매개 변수가 많으면 적은 쪽을 받을 수 있음
// func2 = func1 매개변수가 적은 쪽이 많은 쪽을 받을 수 없음