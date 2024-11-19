/**
 * 인터페이스의 선언 합침
 */

type Person = {
  name: string;
}

// 타입 별칭은 동일한 변수로 선언할 수 없음
// type Person = {
//   name: string
// }


// 인터페이스는 동일한 이름으로 선언시 선언 합침이 됨

interface Dog {
  name: string;
}

interface Dog {
  age: number;
}

const animal: Dog = {
  name: "",
  age: 1
}

/**
 * 주로 모듈 보강 시 사용
 */

interface Lib {
  a: number;
  b: number;
}

interface Lib { // 위에가 코드가 정해진 모듈이라면 선언 합침을 통해 커스텀한다.
  c: string;
}
const lib: Lib = {
  a: 1,
  b: 2,
  c: "hello"
}