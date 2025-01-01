/**
 * 조건부 타입
 */

// number는 string의 서브타입이 아니기 때문에 거짓이므로 number로 추론됨
type A = number extends string ? string : number;

type ObjA = {
  a: number
}

type ObjB = {
  a: number;
  b: number;
}

type B = ObjB extends ObjA ? number : string;


/**
 * 제네릭과 조건부 타입
 */
type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>;

let varB: StringNumberSwitch<string>;

// 오버로드 시그니처 사용
function removeSpaces<T>(text: T): T extends string ? string : undefined
function removeSpaces(text: any) {
  if (typeof text === 'string') {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}

let result = removeSpaces("hi im good");
result.toUpperCase();

let result2 = removeSpaces(undefined);