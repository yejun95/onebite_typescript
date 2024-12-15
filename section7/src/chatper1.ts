/**
 * 타입 변수 응용
 * 첫번째 사레
 */

function swap<T, U>(a: T, b: U) {
  return [b, a];
}

// 타입 변수를 T, U 2개를 주었기 때문에 string과 number 둘 다 넘길 수 있음
// 만약 T로만 한다면 "1"을 넘겼을 때 b에도 string 타입이 할당되므로 number를 넘길 수 없다.
const [a, b] = swap("1", 2);


/**
 * 두번째 사례
 */

// 타입 변수 조건부 할당
function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let num = returnFirstValue([0, 1, 2]);
// 0

let str = returnFirstValue([1, "hello", "mynameis"]);
// "hello"


/**
 * 세번째 사례
 */

// 타입 변수 제한하기
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let va1 = getLength([1, 2, 3]); // 3

let var2 = getLength(["12345"]); // 5

let var3 = getLength({ length: 10}); // 10

let var4 = getLength(10);