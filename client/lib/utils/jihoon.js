


const defaultOptions = {
  method: 'GET',
  mode: 'cors',
  body: null,
  cache: 'no-cache',
  credential: 'same-origin',
  redirect: 'follow',
  referrerPolicy: 'no-referrer',
  headers: {
    'Conten-Type':'application/json; charset=UTF-8'
  }
}



export const jihoon = async (options = {}) => {

  const {url, ...restOptions} = {
    ...defaultOptions, 
    ...options,
    headers: {...defaultOptions.headers, ...options.headers}
    // nullish 병합연산자..?
    // headers: {...(defaultOptions.headers ?? {}), ...(options.headers ?? {})}
  }

  // console.log(restOptions)

  let response = await fetch(url,restOptions)

  if(response.ok){
    response.data = await response.json()
  }

  // response.then((res)=>{console.log(res)})

  return response
  

}

// console.log(await jihoon())


jihoon.get = (url,options) => {
  return jihoon({
    url,
    ...options
  })
}

jihoon.post = (url,body,options) => {
  return jihoon({
    method:'POST',
    url,
    body:JSON.stringify(body),
    ...options
  })
}

jihoon.put = (url,body,options) => {
  return jihoon({
    method:'PUT',
    url,
    body:JSON.stringify(body),
    ...options
  })
}

jihoon.delete = (url,options) => {
  return jihoon({
    method:'DELETE',
    url,
    ...options
  })
}


