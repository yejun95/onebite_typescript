/**
 * 분산적인 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let c: StringNumberSwitch<number | string>;
// StringNumberSwitch<number>
// StringNumberSwitch<string>
// 위 순서대로 분리되면서 들어감 -> 즉 변수 c의 타입은 string | number가 됨

/**
 * 제네릭을 활용한 실용적인 예제
 */

type Exclude<T, U> = T extends U ? never : T;

// never는 사라진다.
// string 타입이 제외됨
type A = Exclude<number | string | boolean, string>;
// 이를 통해 특정 타입만 뽑아내기가 가능 -> 원하는 타입의 데이터만 추출 가능 


type Extract<T, U> = T extends U ? T : never;
type B = Extract<number | string | boolean, string>;
// string 타입만 추출
