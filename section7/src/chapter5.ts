/**
 * 프로미스
 */

const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    // resolve(20);
    // resolve("20"); Promise<number>로 선언했기 때문에 오류 발생

    // 실패 코드
    reject("~~때문에 실패");
  }, 3000);
})

promise.then((response) => {
  console.log(response * 10);
})

promise.catch((err) => {
  // 에러 매개변수는 확실히 지정해줄 수 없기 때문에 타입 좁히기를 사용
  if(typeof err === 'string') {
    console.log(err);
  }
});



/**
 * 프로미스를 반환하는 함수의 타입을 정의
 */

interface Post {
  id: number;
  title: string;
  content: string;
}

// 함수에 대한 반환값 타입을 지정해줘서 리턴값을 코드 내에서 찾지 않아도 쉽게 볼 수 있게 한다.
function fetchPost(): Promise<Post>{
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글 제목",
        content: "게시글 컨텐츠"
      })
    }, 3000);
  })
};

const postRequest = fetchPost();

postRequest.then((post) => {
  // 타입을 지정해줬기 때문에 unknown -> 지정 타입으로 추론되어 점표기법 사용이 가능하다
  // unknown 타입은 객체로 취급되지 않아 점표기법 사용 불가
  post.id
});