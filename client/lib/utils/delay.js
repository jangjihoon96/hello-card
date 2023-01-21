
import { getNode } from '../dom/getNode.js';
import { isNumber, isObject } from './typeOf.js';









const first = getNode('.first');


function delay(callback,timeout = 1000){
  setTimeout(callback,timeout);
}

// delay(()=>{
//   first.style.top = '-100px';
//   delay(()=>{
//     first.style.transform = 'rotate(360deg)'
//     delay(()=>{
//       first.style.top = '0px';
//     })
//   })
// });

// delayP()
// .then(()=>{
//   first.style.top = '-100px';
//   return delayP();
// })
// .then(()=>{
//   first.style.transform = 'rotate(360deg)';
//   return delayP();
// })
// .then*(()=>{
//   first.style.top = '0px';
//   return delayP();
// })


const defaultOptions = {
  shouldReject: false,
  timeout: 1000,
  data: '성공했습니다.',
  errorMessage: '알 수 없는 오류가 발생했습니다.'
}

export function delayP(options = {}){

  let config = {...defaultOptions};

  // options에 숫자만 들어갔을경우 timeout 변경
  if(isNumber(options)){
    config.timeout = options;
  }

  // options이 객체가 맞을때 config와 객체 합성 mixin
  if(isObject(options)){
    config = {...config, ...options}  
  }

  let {shouldReject,timeout,data,errorMessage} = config;

  return new Promise((resolve, reject) => {

    setTimeout(() => {
      !shouldReject ? resolve(data) : reject(errorMessage);
    }, timeout);

  })

}

// delayP() // promise

// delayP(3000).then((res)=>{
//   console.log(res)
// })

// delayP({
//   data:'성공입니다~~'
// }).then((res)=>{
//   console.log(res)
// }).catch((err)=>{
//   console.log(err)
// })



// delayP().then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{
//   console.log(err)
// })







/******************* async await {#fff} *******************/

// 범쌤 설명
// async : 일반 함수를 promise를 반환하는 함수로 만든다.
// await : 1. promise가 반환하는 result를 가져오기.
//         2. 코드 실행 흐름 제어

// 내가 이해한 것
// async를 사용하면 : 함수에 new Promise를 만들어서 resolve로 값을 반환할 필요가 없어짐
// await을 사용하면 : promise에서 반환된 값을 .then()으로 가져올 필요가 없어짐



async function delayA(){
  return '완료'  
}


// let result = delayA();
// let result = delayA().then((res)=>{console.log(res)});
let result = await delayA();

// console.log(result);




async function 라면끓이기(){
  
  try{

    await delayP(1500)
    console.log('물넣기')

    await delayP(1500)
    console.log('스프넣기')

    await delayP(1500)
    console.log('면넣기')

    await delayP(1500)
    console.log('계란넣기')

    // throw new Error('계란 껍질이 들어가버렸다!')

    await delayP(1500)
    console.log('그릇에담기')

  } catch(err){

    console.log(err)

  }

}

// 라면끓이기()