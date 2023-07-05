const createTodo = async (todo) => {

  let options = {
    method: 'POST',
    body: JSON.stringify(todo),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }
  
  let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
  let response = await p.json()
  return response
}

const getTodo = async(id) => {
  let response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
  let r = await response.json()
  return r 
}

const mainFunc = async () => {
  let todo = {
        title: "abhishek",
        body: "raj",
        userId: 1100,
  }
  let todor = await createTodo(todo);
  console.log(todor);
  console.log(await getTodo(1));
}
mainFunc()