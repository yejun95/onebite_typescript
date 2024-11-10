// void -> 공허 -> 아무것도 없다. -> 아무것도 없는 타입

function func1(): string {
  return "hello";
}

function func2(): void { // 리턴을 주고 싶지 않을 때
  console.log("hello");
}

let a: void; // undefined 제외하고 넣을 수 없음
// a = 1;
// a = "hello"
a = undefined;


// never -> 존재하지 않는 -> 불가능한 타입
function func3(): never {
  while (true) {

  }
}

function func4(): never {
  throw new Error();
}