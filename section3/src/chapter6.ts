/**
 * 타입 단언 == type assertion
 */

type Person = {
  name: string;
  age: number;
}

// 타입에 맞는 값을 초기화 하지 않아도 as 문법으로 매핑 가능
let person = {} as Person;

// 이후 점 표기법을 통해 값 할당 가능
person.name = "홍길동";
person.age = 11;

type Dog = {
  name : string;
  color: string;
};

let dog = {
  name: "돌돌이",
  color: "brown",
  breed: '진도' // 초과 프로퍼티 검사에 걸리지만 타입 단언을 통해 에러를 없앨 수 있음
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */

// number는 never의 슈퍼 타입
// never는 모든 타입의 서브 타입
let num1 = 10 as never;

let num2 = 10 as unknown;

let num3 = 10 as unknown as string; // 다중 단언 시 단언이 안되는 타입으로도 가능하기는 함 -> 어쩔 수 없지 않는 이상 이런거 하면 안됨

/**
 * const 단언
 */

let num4 = 10 as const; // number 리터럴 타입처럼 변함

let cat = {
  name: "야옹이",
  color : "yellow"
} as const;

// cat.name = 10 프로퍼티 값 수정 불가능

/**
 * Non Null 단언
 */

type Post = {
  title: string;
  author?: string; // 값이 없을 수도 있음
};

let post: Post = {
  title: "게시글1",
  author: "홍길동"
};

 // !를 붙여서 Null이나 Undefined이 무조건 아니라고 단언 -> Post 타입에 author 프로퍼티가 아예 없어도 타입스크립트는 믿기 때문에 조심
 // ?를 붙이면 undefined가 나올 수 있다라고 추론되기 때문에 undefined 타입이 포함되어야 함
const len: number = post.author!.length;
