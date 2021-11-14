import React, { useEffect, useState } from "react";
import { AddTask, Circle } from "../../components";
import { ButtonMUI, Pagination } from "../../shared";
import "./style.scss";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 10;

  const handleChange = (event) => {
    setPage(event.selected + 1);
  };

  const fetchTodos = (page, limit) => {
    fetch(
      `https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`
    )
      .then((response) => response.json())
      .then((json) => setTodos(json));
  };

  useEffect(() => {
    fetchTodos(page, limit);
  }, [page]);

  const onAddTodosWithIndex = (values) => {
    todos.splice(values.todoId, 0, values);
    setTodos([...todos]);
  };

  const onAddTodos = (values) => {
    const newTodos = [values, ...todos];
    setTodos(newTodos);
  };

  const onDeleteTask = (idex) => {
    todos.splice(idex, 1);
    setTodos([...todos]);
  };

  return (
    <div className="container">
      <AddTask onAdd={onAddTodosWithIndex} />
      <section className="task__list">
        <table className="table">
          <thead>
            <tr>
              <th>Status</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => (
              <tr key={index}>
                <td>
                  <Circle color="red" />
                </td>
                <td>{todo.title}</td>
                <td>
                  <span className="table-inner table-inner--right">
                    <ButtonMUI size="small" color="primary">
                      DONE
                    </ButtonMUI>
                    <ButtonMUI
                      size="small"
                      color="secondary"
                      onClick={() => onDeleteTask(index)}
                    >
                      DELETE
                    </ButtonMUI>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination pageCount={20} onChange={handleChange} />
      </section>
    </div>
  );
};

export default Home;
