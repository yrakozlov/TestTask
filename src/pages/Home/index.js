import React, { useEffect, useState } from "react";
import { AddTask, Circle, Modal } from "../../components";
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

  const onAddTodos = (values) => {
    const newTodos = [values, ...todos];
    setTodos(newTodos);
  };

  const onDeleteTask = (id) => {
    setTodos(todos.filter((todos) => todos.id !== id));
  };

  const [modalActive, setModalActive] = useState(false)

  const [modalValue, setModalValue] = useState('')

  const handleModalChange = (event) => {
    setModalValue(event.target.value)
  }

  const onEdit = (title) => {
    setModalValue(title)
    setModalActive(true)
  }

  const onEditTodos = () => {
    console.log(todos.id)
  }

  return (
    <div className="container">
      <AddTask onAdd={onAddTodos} />
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
              <tr key={todo.id}>
                <td>
                  <Circle color="red" />
                </td>
                <td>{todo.title}</td>
                <td>
                  <span className="table-inner table-inner--right">
                    <ButtonMUI size="small" color="primary" onClick={() => onEdit(todo.title)}>
                      Edit
                    </ButtonMUI>
                    <ButtonMUI
                      size="small"
                      color="secondary"
                      onClick={() => onDeleteTask(todo.id)}
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
      <Modal active={modalActive} setActive={setModalActive}>
        <input type="text" value={modalValue} onChange={handleModalChange}/>
        <ButtonMUI onClick={onEditTodos}>OK</ButtonMUI>
      </Modal>
    </div>
  );
};

export default Home;
