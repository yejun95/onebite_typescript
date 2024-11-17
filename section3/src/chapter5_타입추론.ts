/**
 * 타입 추론 
 */

// 변수의 초기값으로 자동 타입 추론
let a = 10; 
let b = "hello";
let c = {
  id: 1,
  name: "이정한",
  profile: {
    nickname :"winterlood"
  }
}
let {id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

function func(message="hello") {
  return "hello";
}

// 초기값 생략 : any -> 아무 타입이나 넣을 수 있음 -> any 타입의 진화
let d;
d = 10; // number
d.toFixed();

d = "hello"; // string
d.toUpperCase();

// const
const num = 10; // 넘버 리터럴 타입으로 추론됨 -> const는 상수이기 때문
const str = "hello";

// 유니온 추론
let arr = [1, "string"]


