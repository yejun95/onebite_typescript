/**
 * 인덱스드 엑세스 타입
 */

interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}

// "author"는 값이 아니라 프로퍼티의 타입이 명시된 것
function printAuthorInfo(author: Post['author']) {
  console.log(`${author.name}-${author.id}`)
}

const post : Post = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "홍길동",
    age: 25,
  }
}

// 배열타입으로 요소 추출
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

function printAuthorInfoList(author: PostList[number]['author']) {
  console.log(`${author.name}-${author.id}`)
}

// 배열의 인덱스 요소 추출 [0]을 넣어도 가능
const postList : PostList[number] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "홍길동",
    age: 25,
  }
}

// 인덱스를 통해 추출 가능
type Tup = [number, string, boolean];

type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];
type TupNum = Tup[number];