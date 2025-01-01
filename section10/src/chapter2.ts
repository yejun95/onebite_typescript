/**
 * Pick<T, K>
 * -> 뽑다, 고르다
 * -> 객체 타입으로부터 특정 프로퍼티만 골라내는 타입
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

type Pick<T, K extends keyof T> = {
  [key in K]: T[key];
}

const legacyPost: Pick<Post, "title" | "content"> = {
  title: "옛날 글",
  content: "옛날 컨텐츠",
}

/**
 * Omit<T, K>
 * -> 생략하다, 빼다
 * -> 객체 타입으로 부터 특정 타입을 제거하는 타입
 */

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

const noTItlePost: Omit<Post, "title"> = {
  content: "",
  tags: [],
  thumbnailURL: "",
}

/**
 * Record<K, V>
 */

type ThumbnailLegacy = {
  large: {
    url: string
  },
  medium: {
    url: string
  },
  small: {
    url: string
  },
}

type Record<K extends keyof any, V> = {
  [key in K]: V
}

// ThumbnailLegacy와 동일한 코드 -> 인덱스 시그니처와 비슷하지만 덜 유연하다.
type Thumbnail = Record<"large" | "medium" | "small", { url: string }>;