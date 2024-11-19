/**
 * 인터페이스
 */

interface Person {
  name: string;
  age?: number;
  sayHi(): void;
  sayHi(a: number, b: number): void; // 메서드 오버로딩
}

// 유니온이나 인터섹션 타입은 타입 별칭 처럼 만들 수 없음
// interface Dog | Cat
// interface Dog & Cat

const person: Person = {
  name: "이정한",
  sayHi: function () {
    console.log("hi");
  }
};