/**
 * 함수 오버로딩
 * 타입스크립트에서만 지원 (자바스크립트 X)
 */

// 버전들 -> 오버로드 시그니처
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 실제 구현부 => 구현 시그니처
function func(a: number, b?: number, c?: number) { // 매개변수가 1개인 오버로드 시그니처를 보장하기 위해 b와 c는 옵셔널 적용
  if(typeof b === 'number' && typeof c === 'number') {
    console.log( a + b + c) ;
  } else {
    console.log(a * 20)
  }
}

// func(); error
func(1);
// func(1, 2); error
func(1, 2, 3);

