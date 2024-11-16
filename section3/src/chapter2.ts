/**
 * Unknows 타입
 */

function unknowsExam() {
  let a: unknown = 1;
  let b: number = 1;
  let c: string = 'a';
  
  a = b;
  a = c;
}

/**
 * Never 타입
 */

function neverExam() {

  function neverFunc(): never {
    while (true) {}  
  }

  let num: number = neverFunc();
  let str: string = neverFunc();
}

/**
 * Void 타입
 */

function voidExam() {

  function voidFunc(): void {
    console.log("hi")
    return undefined;

    let voidVar: void = undefined;
  }
}

/**
 * any 타입 : 모든 타입의 슈퍼타입이나 서브타입으로도 가능
 * never 타입 제외하고!!
 */

function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let neverVar: never;

  anyVar = unknownVar;

  // never타입에는 그 어떠한 것도 다운캐스팅 불가능
  // neverVar = anyVar;
}