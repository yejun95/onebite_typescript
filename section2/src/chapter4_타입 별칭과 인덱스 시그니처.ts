// 타입 별칭

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string
}

let user: User = {
  id: 1,
  name: "이정한",
  nickname: "winterlood",
  birth: "1995.12.1",
  bio: "안녕",
  location: "부천시"
}


// 인덱스 시그니처
type CountryCodes = {
  [key : string] : string; //key : value
  Korea: string; // Korea 타입은 반드시 가지도록 설정
}

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
}