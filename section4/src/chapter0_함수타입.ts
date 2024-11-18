/**
 * 함수 타입 정의
 */

// 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 이야기
function func(a:number, b:number) {
  return a + b;
}

/**
 * 화살표 함수의 타입을 정의하는 방법
 */

const add = (a:number, b:number) => a + b;

/**
 * 함수의 매개변수
 */

function introduce(name = "이정환", age: number, tall?:number) { // 선택적 매개변수는 제일 뒤로 와야함, 앞에는 필수 매개변수로만 구성
  console.log(`name : ${name}`);
  if (typeof tall === 'number') { //타입 가드를 해두면 선택적 매개변수에서 나오는 undefined를 피할 수 있다.
    console.log(`tall : ${tall}`) 
  }
}

introduce("이정환", 10, 186)
introduce("이정환", 27); // tall이 선택적 매개변수이기 때문에 값이 없어도 된다 

function getSum(...rest: number[]) { //rest 파라미터는 가변적인 값을 받아 배열로 만들어준다.
  let sum = 0;
  rest.forEach((it) => (sum += it));

  return sum;
}

getSum(1, 2, 3) // 6
getSum(1, 2, 3, 4, 5) // 15