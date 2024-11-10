// any : 특정 변수의 타입을 우리가 확실히 모를 때 사용
let anyVar: any = 10;

anyVar = "hello";
anyVar = true
anyVar = {};
anyVar = () => {};
anyVar.toUpperCase();
anyVar.toFixed();

let num: number = 10;
num = anyVar; // 다른 타입에 다 넣을 수 있다.

// 그러나 마지막 타입이 불일치하면 런타임시에 에러가 남
// 고로 최대한 사용하지 말아야한다.



// unknown : any와 마찬가지로 어떤 타입이든 넣을 수 있음
let unknowsVar: unknown;
unknowsVar = "";
unknowsVar = 1;
unknowsVar = () => {};

// num = unknowsVar 그러나 any와 다르게 다른 타입에 넣기 불가능