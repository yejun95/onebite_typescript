// enum 타입 : 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}

const user1 = {
  name: "이정환",
  role: Role.ADMIN // 0 : 관리자
}

const user2 = {
  name: "홍길동",
  role: Role.USER // 1 : 일반유저
}

const user3 = {
  name: "아무개",
  role: Role.GUEST // 2 : 게스트
}