import React, { useEffect, useRef, useState } from "react";
import { Task, AddTask } from "../../components";
import "./style.scss";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 20;

  const parentRef = useRef();
  const childRef = useRef();

  const fetchTodos = (page, limit) => {
    fetch(
      `https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`
    )
      .then((response) => response.json())
      .then((json) => setTodos(json));
  };

  useEffect(() => {
    fetchTodos(page, limit);
  }, []);

  return (
    <div className="container">
      <div ref={parentRef} className="task__list">
        <AddTask />

        {todos.map((todo) => (
          <Task key={todo.id} color="red" title={todo.title} />
        ))}
        <div ref={childRef} className="childRef"></div>
      </div>
    </div>
  );
};

export default Home;
