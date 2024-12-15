/**
 * 제네릭 클래스
 */

class List<T> {
  constructor(private list: T[]) {};

  push(data: T) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

// 제네릭 클래스는 제네릭 인터페이스와 다르게 매개 변수 값에 맞춰서 타입을 맞춰준다.
// 때문에 new List<number> 이런식으로 제네릭의 타입을 따로 선언해주지 않아도 된다.
const numberList = new List([1, 2, 3]);
numberList.pop();
numberList.push(4);
numberList.print();
// [1, 2, 4];

const stringList = new List(['1', '2', '3']);
stringList.pop();
stringList.push('5');
stringList.print();
// ['1', '2', '5']
