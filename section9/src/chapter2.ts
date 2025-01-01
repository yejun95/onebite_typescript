/**
 * infer
 * inference -> 추론
 */

type FuncA = () => string;

type FuncB = () => number;

// infer R이 T의 값에 슈퍼타입이 되기 위해 자동으로 추론됨 -> 조건식을 무조건 참으로 만들기 위함
type ReturnType<T> = T extends () => infer R ? R : never;

type A = ReturnType<FuncA>;

type B = ReturnType<FuncB>;

// 함수타입이 아니므로 R이 추론 불가능하여 거짓이 됨
type C = ReturnType<number>;

/**
 * 예제
 */

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
// 1. T는 프로미스 타입이어야 한다.
// 2. 프로미스 타입의 결과값 타입을 반환해야 한다.

type PromiseA = PromiseUnpack<Promise<number>>;
//number

type PromiseB = PromiseUnpack<Promise<string>>;
// string