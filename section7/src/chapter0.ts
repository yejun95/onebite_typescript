/**
 * 제네릭
 */

// 제네릭 함수
// <T> : 타입 변수
// 함수 호출 시에 타입이 결정된다.
function func<T>(value: T): T {
  return value;
}

let num = func(10);

let bool = func(true);

let str = func("string");

// 명시적인 제네릭 함수
let arr = func<[number, number, number]>([1, 2, 3]);