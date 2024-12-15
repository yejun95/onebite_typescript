/**
 * map 메서드 만들기
 */

import { it } from "node:test";

const arr = [1, 2, 3];
const newArr = arr.map((it) => it * 2);
// [2, 4, 6]

// 반환값을 parseInt로 받기위해 U의 타입을 추가로 선언
// 만약 arr을 string으로 받고 callback의 리턴 타입도 string이라면 T 하나로도 충분하다.
function map<T, U>(arr: T[], callback: (item: T) => U) {
  let result = [];
  for(let i=0; i<arr.length; i++) {
    result.push(callback(arr[i]));
  }

  return result;
}

map(arr, (it) => it * 2);
map(['hi', 'hello'], (it) => parseInt(it));



/**
 * forEach 메서드 만들기
 */

const arr2 = [1, 2, 3];
arr2.forEach((it) => console.log(it * 2));

function forEach<T>(arr: T[], callback: (item: T) => void) {  
  for(let i=0; i<arr.length; i++) {
    callback(arr[i]);
  }
}

forEach(arr2, (it) => {
  console.log(it.toFixed);
})

forEach(['123', '456'], (it) => {
  console.log(it)
})