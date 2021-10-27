const fetchTodos = (setTodos) => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => setTodos(json))
  
}