
import { isString } from "./typeOf.js"


const{
  localStorage: storage,
  JSON: {stringify: serialize, parse: deserialize},
} = globalThis


// console.log(localStorage)


export function saveStorage(key, value){
  return new Promise((resolve, reject)=>{
    if(isString(key)){
      storage.setItem(key, serialize(value));
      resolve();
    } else {
      reject({message:'key는 문자 타입이어야 합니다.'});
    }
  })
}


export function loadStorage(key){
  return new Promise((resolve, reject)=>{
    if(isString(key)){
      resolve(deserialize(storage.getItem(key)));
    } else {
      reject({message:'key는 문자 타입이어야 합니다.'});
    }
  })
}


export function deleteStorage(key){
  return new Promise((resolve, reject)=>{
    if(isString){
      !key ? storage.clear() : storage.removeItem(key);
      resolve();
    } else {
      reject({message:'key는 문자 타입이어야 합니다.'});
    }
  })
}


// saveStorage('name','jihoon');
// loadStorage('name').then((res)=>{
//   console.log(res)
// });


// loadStorage('name');
// deleteStorage('name');


// storage.setItem('name','jihoon');
// console.log(storage.getItem('name'));
// storage.removeItem('name')
// storage.clear()

