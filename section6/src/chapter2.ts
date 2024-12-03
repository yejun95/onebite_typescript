/**
 * 접근제어자
 * access modifier
 * => public private protected
 */

class Employee {
  //필드
  private name: string;
  protected age: number;
  position: string;

  //생성자
  constructor(name:string, age:number, position:string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  //메서드
  work() {
    console.log("일함");
  }
}

//객체 상속
class ExecutiveOfficer extends Employee {
  officeNumber: number;

  constructor(name:string, age:number, position:string, officeNumber: number) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }

  func() {
    // this.name; private 이기 때문에 파생클래스에서도 접근 불가능
    this.age; // protected는 파생 클래스에서 접근 가능
  }
}

const employee = new Employee("홍길동", 27, "developer");
//객체 필드 값 수정 가능 = 객체의 필드 기본 값이 public 이기 때문
// employee.age = 25; protected로 선언 시 외부 에서는 접근 불가
// employee.name = "김김"; private로 선언 시 Employee 클래스 내에서만 접근 가능
employee.position = "디자이너";


// 클래스 간단하게 작성
class Test {
  // name: string;
  // age: number

  // 생성자에 접근제어자를 입력하면 필드 및 초기화를 전부 해준다.
  constructor(
    public name: string,
    public age: number
  ) {
    // this.name = name;
    // this.age = age;
  }
}

const test:Test = new Test("홍길", 11);

console.log(test);

