// 객체
let user: {
  id?: number; //있어도 되고 없어도 된다. Optional
  name: string;
} = {
  id: 1,
  name: "이정환",
}
user.id; // 타입이 정의되어있어야 점 표기법으로 접근 가능

let config: {
  readonly apiKey: string // 객체 값을 바꾸지 못함 
} = {
  apiKey : "MY API KEY",
}