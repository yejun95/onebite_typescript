/**
 * Mapped Type
 * type 별칭에서만 사용 가능
 */

interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = {
  [key in 'id' | 'name' | 'age']?: User[key];
}

// keyof 를 이용해도 동일하다.
type BooleanUser = {
  [key in keyof User]: boolean;
}

// api 호출 후 값 변경이 불가능하게 할 수 있는 버전
type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
}

// 한명의 유저 정보를 불러오는 기능
function fetchuser():User {
  return {
    id: 1,
    name: "홍길동",
    age: 25,
  }
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