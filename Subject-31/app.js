async function test(data) {
  return new Promise((resolve, reject) => {
    resolve(data)
  })
}

// test("Hello").then(response =>{
//     console.log(response)
// })

async function exapmle(data) {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('it is a value')
    }, 5000)
  })
  let response = await promise // it will work after 5 seconds
  return response
}

//exapmle("hello").then(response =>{ console.log(response)})

async function testdata(data) {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof data == 'string') {
        resolve(data)
      } else {
        reject(new Error('Plesa , string date enter value'))
      }
    }, 5000)
  })
  const response = await promise
  return response
}

//testdata("Hello , my name is Ayhan").then(response => response + " how are you.")
//.then(data => console.log(data)).catch(err => console.log(err))

async function getCurren(url) {
  const response = await fetch(url) // response  object
  const data = await response.json() // Json object
  return data
}

//getCurren('https://jsonplaceholder.typicode.com/posts')
//.then(response => console.log(response))
//.catch(err => console.log(new Error(err)))

class Request {
  // get request

  async get(url) {
    const response = await fetch(url)
    const data = await response.json()
    return data
  }
  //post request

  async post(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    const date = await response.json()
    return date
  }
  // put request

  async put(url, data) {
    const response = await fetch(url, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    const date = await response.json()
    return date
  }
  //delete request

  async delete(url) {
    const response = await fetch(url, {
      method: 'DELETE',
    })

    return 'delete sucesss'
  }
}

const request = new Request()
request
  .get('https://jsonplaceholder.typicode.com/albums/')
  .then((albums) => {
    console.log(albums)
  })
  .catch((err) => console.log(err))

request
  .post('https://jsonplaceholder.typicode.com/posts', {
    userID: 1,
    title: 'hello',
  })
  .then((newAlbum) => {
    console.log(newAlbum)
  })
  .catch((err) => {
    console.log(err)
  })

request
  .put('https://jsonplaceholder.typicode.com/posts/1', {
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,
  })
  .then((putAlbum) => {
    console.log(putAlbum, 'başarılı şekilde tamamlandı')
  })
  .catch((err) => {
    console.log(err)
  })

request
  .delete('https://jsonplaceholder.typicode.com/posts/1')
  .then((putAlbum) => {
    console.log(putAlbum)
  })
  .catch((err) => {
    console.log(err)
  })
