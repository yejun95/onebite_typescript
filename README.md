# 인프런 한입 크기로 잘라 먹는 타입스크립트 강의 정리
## ✔️ section1 directory
- `npm i @types/node` : node.js의 내장 기능들을 위한 타입 정보를 제공

- `npm i typescript -g` : typesciprt 컴파일러
  - `tsc --init` : 타입스크립트 컴파일러 옵션 -> tsconfig.json 생성됨
<br>

- tsconfig.json 설정
<br>
<hr>
<br>

## ✔️ section2 directory
### 원시 타입
- 하나의 값만 저장하는 타입
  - 타입 어노테이션 : ex) `let a: number = 1;` 이라고 하였을 때, :(콜론)뒤에 붙는 타입을 타입 주석 또는 타입 어노테이션이라고 한다.

- number

- string

- boolean

- null

- undefined

- 리터럴 타입
<br>
<br>

### 배열과 튜플
- 배열 타입

- 튜플 타입 : 길이와 타입이 고정된 배열
<br>
<br>

### 객체
- Optional

- readonly
<br>
<br>

### 타입 별칭과 인덱스 시그니처
- 타입 별칭 : 객체 선언 시 변수 객체를 통해 할당하는 것

- 인덱스 시그니처 : 동일한 형식의 `key : value`로 값이 계속 추가 된다면 사용하기 용이함
<br>
<br>

### enum
- enum 타입 등록을 통해 열거된 변수를 프로퍼티나 변수에 할당 가능
<br>
<br>

### any, unknown
- any : 특정 변수의 타입을 우리가 확실히 모를 때 사용
  - 다른 타입에 다 넣을 수 있다.
  - 그러나 마지막 타입이 불일치하면 런타임시에 에러가 남
  - 고로 최대한 사용하지 말아야한다.
<br>

- unknown : any와 마찬가지로 어떤 타입이든 넣을 수 있음
  - 그러나 any와 다르게 다른 타입에 넣기 불가능 => 컴파일 시점에 에러를 잡을 수 있음
  - 만약 타입을 모른다면 any말고 unknown을 쓰도록 하자.
<br>
<br>

### void, Never
- void : 공허 -> 아무것도 없다. -> 아무것도 없는 타입
  - 함수에 리턴문이 없을 경우 사용 -> ex) console.log만 찍는 경우
  - undefined를 제외 하고는 모든 타입 매핑이 불가능
  - `tsconfig`에서 `strictNullChecks = false` 인 경우 null 값 매핑 가능
<br>

- never : 존재하지 않는 -> 불가능한 타입
  - `while(true)` 처럼 무한루프일 경우에 사용
  - 또는 함수가 `throw new Error` 처럼 예외 처리를 리턴하는 경우 사용
  - void와 다르게 모든 타입에 대해서 매핑이 불가능하다.
<br>
<hr>
<br>

## ✔️ section3 directory
### 타입 계층도

![타입계층도](https://github.com/user-attachments/assets/aaf04645-ac95-47f5-8177-fd173849c6a2)
<br>

- 부모는 자식을 품을 수 있다. (업 캐스팅)

- 자식은 부모를 품을 수 없다. (다운 캐스팅)

- 즉, 더 상위에 있는 타입은 아래 타입을 품을 수 있다.

- 그러나 `never` 타입의 경우 어떠한 것도 캐스팅 불가능

- `any` 타입은 모든 타입의 슈퍼타입이나 서브타입으로도 가능 -> 물론 `never` 타입 제외
<br>
<br>

### 객체간 호환성
- 객체간 캐스팅이 가능

- 그러나 프로퍼티가 적은 객체를 프로퍼티가 많은 객체 쪽으로 넣을 수 없다.
  - 타입스크립트는 프로퍼티를 기준으로 하는 구조적 타입 시스템을 채택
  - 즉, 프로퍼티가 적은 쪽이 슈퍼 타입이 되는 것
<br>

- 초과 프로퍼티 검사
  - 프로퍼티가 많은 객체를 적은 객체쪽으로 넣는 것은 가능
<br>
<br>

### 대수 타입
- 여러개의 타입을 합성해서 새롭게 만들어내는 타입

- 합집합 : `|`

- 교집합 : `&`
<br>
<br>

### 타입 추론
- 타입스크립트는 변수의 초기값을 통해 자동으로 타입을 추론한다.

- string, number, object 등 변수의 초기값만 설정되었다면 타입을 선언하지 않아도 알아서 매핑 되는 것이다.

- const로 선언된 변수는 값이 어차피 변하지 않기 때문에 리터럴 타입이라고 생각하면 된다.

- 초기값 생략 시 any 타입으로 매핑되며, 이 때 초기화 되는 값에 따라 타입이 변경된다. -> any 타입의 진화
<br>
<br>

### 타입 단언
- type assertion

- 타입에 맞는 값을 초기화하지 않아도 as 문법으로 매핑 가능

- 타입 단언의 규칙
  - 값 as 단언 <- 단언식
  - A as B
  - A가 B의 슈퍼타입이거나
  - A가 B의 서브타입이어야 함
<br>

- 객체를 `as const`로 타입 단언 시 리터럴 타입으로 추론되기 때문에 프로퍼티의 값을 변경하거나 추가할 수 없다.

- Non Null 단언
  - 객체 프로퍼티에 `?` 를 붙이면 값이 없을 수도 있다 표시하는 것 -> undefined를 예상함
  - `!`를 붙여서 Null이나 Undefined이 무조건 아니라고 단언
<br>
<br>

### 타입 좁히기
- 조건문을 이용해 넓은타입에서 좁은타입으로
  - `typeof`
  - `instanceof`
  - `"{property}" in 매개변수`
<br>
<br>

### 서로소 유니온 타입
- 교집합이 없는 타입들로만 만든 유니온 타입을 말함

- 타입 별칭에 특정 프로퍼티를 문자열로 지정함으로써 교집합이 없는 타입을 만듬
  - 같은 이름의 프로퍼티가 다른 타입 별칭에 존재하여도 문자열을 직접 입력했기 때문에 서로소임
<br>
<hr>
<br>

## ✔️ section4 directory
### 함수타입
- 함수 타입은 어떤 타입의 매개변수를 갖고, 어떤 타입의 리턴을 내는지를 야기한다.

- 화살표 함수도 타입 선언 가능
<br>
<br>

### 함수타입 표현식과 호출 시그니처
- 함수 타입 표현식을 통한 타입 별칭을 선언 -> 함수에 타입을 붙여서 사용 가능

- 함수 타입 표현식과 동일 하지만 매개 변수에 넣는 형식으로 타입 별칭으로 만들어 함수에 붙여 사용 가능
<br>
<br>

### 함수 타입의 호환성
- 반환 값의 타입 호환

- 매개변수의 타입 호환
  - 매개변수가 같을 때 : 다운캐스팅만 가능
  - 매개변수가 다를 때 : 매개변수가 많은 쪽이 적은 쪽을 받을 수 있음
<br>
<br>

### 함수 오버로딩
- 자바의 오버로딩과 같은 개념으로 하나의 함수에 매개변수를 다르게 주어 사용 가능

- 리턴을 void로 주고 매개변수를 다르게 부여한다.
<br>
<br>

### 사용자 정의 타입 가드
- 타입 별칭으로 타입가드 생성 가능
<br>
<hr>
<br>

## ✔️ section5 directory
### 인터페이스
- `type`이 아닌 `interface` 라는 명칭을 사용한다.

- `type`과 동일하게 타입 선언을 할 수 있지만 `=` 부등호 없이 사용한다.
<br>
<br>

### 인터페이스 확장
- 인터페이스의 경우 `extends`를 통해 타입 확장이 가능하다.

- 자바의 상속과 같이 상속하는 타입이 부모고 상속받는 쪽이 자식이 되어 부모의 타입을 자식이 사용할 수 있게 된다.
  - 상속 선언만 하면 해당 타입을 자식에서 선언하지 않아도 자동으로 매핑됨
<br>

- 상속은 무한대로 가능 `interface a extends b, c, d, f`

- 상속을 받은 후 부모의 타입을 자식에서 재정의를 할 수 있지만 부모 타입에 맞는 서브타입이어야만 가능
  - ex) 부모 타입이 string -> 자식에서 문자 리터럴 타입으로 정의 가능
  - 부모 타입이 문자 리터럴 타입이면 자식에서 string으로 재정의 불가능
<br>

- 타입 별칭의 경우 상속을 받을 수는 없지만 인터페이스에 상속자(부모)로 사용할 수는 있다.
<br>
<br>

### 인터페이스 선언 합침
- 타입의 경우 동일 변수 사용이 불가능하지만 인터페이스의 경우 동일한 이름으로 선언된 경우 자동으로 타입 변수가 합쳐진다.

- 주로 고정되어 있는 라이브러리 타입을 재정의할 때 사용하면 좋다.
<br>
<hr>
<br>

## ✔️ section6 directory
- 자바스크립트의 class 문법

- 타입스크립트의 class 문법

- 접근 제어자

- 인터페이스와 클래스
  - class에 인터페이스를 implements로 구현
<br>
<hr>
<br>

## ✔️ section7
### 제네릭

- 타입변수 응용

- map, forEach 메서드 만들기
<br>

- 제네릭 인터페이스와 제네릭 타입 별칭

- 제네릭 클래스

- 프로미스 객체와 타입 선언
<br>
<hr>
<br>

## ✔️ section8 - 타입 조작하기
### 인덱스드 엑세스 타입
- 선언된 인터페이스 및 타입의 특정 프로퍼티의 타입을 명시 가능

- ex) 함수 생성 시 매개변수의 타입을 특정 타입의 프로퍼티 명시가 가능한 것
<br>
<br>

### keyof 연산자
- 타입을 유니온으로 명시하는 것

```js
interface Person {
  name: string;
  age: number;
}

// key가 유니온 타입으로 추출된다. name | age | etc | .... 
function getPropertyKey(person: Person, key: keyof Person) {
  return person[key];
}

const person: Person = {
  name: "홍길동",
  age: 27,
};
```
> Person 타입이 keyof 연산자로 인해 유니온 추론이 된다.
<br>

- 이를 통해 타입의 프로퍼티가 증가하여도 추가적인 작업이 불필요하다.
<br>
<br>

### Mapped Type
- type 별칭에서만 사용 가능

- 기존에 선언된 타입에 대한 새로운 추론을 가능하게 함

```js
type PartialUser = {
  [key in 'id' | 'name' | 'age']?: User[key];
}

// 한명의 유저 정보를 수정하는 기능
function updateuser(user: PartialUser) {

}

// 변경되는 값만 프로퍼티로 보내기
updateuser({
  // id: 1,
  // name: "홍길동",
  age: 23
})
```
<br>

- 유니온 부분은 `keyof` 연산자를 사용하면 동일하게 추론 가능

- 해당 타입을 통해 특정 프로퍼티만 수정하기 또는 리턴 값을 readonly로 만들기 등 다양한 방식이 가능
<br>
<br>

### 템플릿 리터럴 타입
- 여러 타입에 대한 값을 sql의 카테시안 곱처럼 모든 경우의 수로 만들어줌

```js
type Color = "red" | "black" | "green";

type Animal = "dog" | "cat" | "chicken";

type ColoredAnimal = `${Color}-${Animal}`
```
<br>

![image](https://github.com/user-attachments/assets/47796891-260f-4096-89c4-bdd1700ef77c)
<br>
<hr>
<br>

## ✔️ section9 - 조건부 타입
### 조건부 타입
- 삼항 연산자를 통해 선언한 타입이 연산 값에 따라 추론된다.

- 제네릭과 함께 사용하면 특정 타입을 받을 때 어떤 값을 리턴해줄지 결정할 수 있다.

```js
type A = number extends string ? string : number;

type ObjA = {
  a: number
}

type ObjB = {
  a: number;
  b: number;
}

type B = ObjB extends ObjA ? number : string;
```
<br>
<br>

### 분산적인 조건부 타입
- 조건부 타입에 제네릭을 함께 사용하여 특정 타입만 추론이 가능

```js
type Exclude<T, U> = T extends U ? never : T;

// never는 사라진다.
// string 타입이 제외됨
type A = Exclude<number | string | boolean, string>;

// 이를 통해 특정 타입만 뽑아내기가 가능 -> 원하는 타입의 데이터만 추출 가능 
```
<br>
<br>

### infer
- 조건부 타입을 항상 참으로 반환하기 위해 자동으로 슈퍼타입이 되는 R을 추론하는 것

- infer 키워드는 extends와 함께 사용

- 항상 조건부 타입에서만 사용 -> 조건부 타입에서도 참일 경우에만 사용이 가능

```js
type FuncA = () => string;

type FuncB = () => number;

// infer R이 T의 값에 슈퍼타입이 되기 위해 자동으로 추론됨 -> 조건식을 무조건 참으로 만들기 위함
type ReturnType<T> = T extends () => infer R ? R : never;

type A = ReturnType<FuncA>;

type B = ReturnType<FuncB>;

// R이 추론 불가능하여 거짓이 됨
type C = ReturnType<number>;
```
<br>
<hr>
<br>

## ✔️ section10 - 유틸리티 타입
![image](https://github.com/user-attachments/assets/34ab3b3d-dd3c-4bf5-bc8e-34344fad3cca)
<br>

### Mapped 타입 기반의 유틸리티 타입 - 1
- Partial<T> : 선택적 프로퍼티로 만들어줌

- Required<T> : 필수 프로퍼티로 만들어줌

- Readonly<T> : 값이 변경 불가능하게 만들어줌
<br>
<br>

### Mapped 타입 기반의 유틸리티 타입 - 2
- Pick<T, K> : 필요한 타입만 선택

- Omit<T, K> : 필요 없는 타입 제외

- Record<K, V> : 인덱스 시그니처와 비슷하게 객체에 대한 중복 값 설정 시 유연
<br>
<br>

### 조건부 타입의 유틸리티 타입
- 기본적으로 `extends`를 통해 서브 타입인지 체크

- Exclude<T, U> : T에서 U를 제거

- Extract<T, U> : T에서 U를 추출

- ReturnType<T> : 함수의 리턴값을 반환
