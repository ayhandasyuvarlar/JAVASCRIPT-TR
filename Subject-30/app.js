class Request {
  // get request
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err))
    })
  }
  //post request
  post(url, data){
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err))
    })
  }
  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err))
    })
  }
  delete(url) {
    return new Promise((resolve,reject) => {
      fetch(url, {
        method: 'DELETE',
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err))
    })
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
    console.log(putAlbum, 'başarılı şekilde silindi')
  })
  .catch((err) => {
    console.log(err)
  })
