/**
 * 인터페이스의 확장
 */

interface Animal {
  name: string;
  age: string;
}

interface Dog extends Animal {
  // name: "hello"; // 재정의가 가능하지만 원본 타입이 문자 리터럴의 슈퍼 타입인 string이기 때문에 가능한 것
  isBark: boolean;
}
const dog: Dog = {
  name: "",
  age: "",
  isBark: true
}

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chickne extends Animal {
  isFly: boolean;
}

interface DogCat extends Dog, Cat {} // 다중 확장
const dogCat: DogCat = {
  name: "",
  age: "",
  isBark: true,
  isScratch: true
}