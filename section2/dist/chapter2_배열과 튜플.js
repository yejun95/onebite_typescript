// 배열
let numArr = [1, 2, 3];
let strArr = ["hello", "im", "winterlood"];
let boolArr = [true, false, true]; // 제네릭 방식
// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr = [1, "hello"]; // 유니온 타입
// 다차원 배열의 타입을 정의하는 방법
let doubleArr = [
    [1, 2, 3,],
    [4, 5],
];
// 튜플 타입 : 타입스크립트에서만 제공 => 길이와 타입이 고정된 배열
let tup1 = [1, 2];
let tup2 = [1, "2", true];
const users = [
    ["이정환", 1],
    ["홍길동", 2],
    ["홍기영", 3],
    ["김기영", 4]
];
export {};
