import { React, useEffect, useState } from "react";
import axios from "axios";
import { Task, AddTask } from "../../components";
import "./style.scss";

const Home = () => {
  // const [tasks, setTasks] = useState(null)

  // useEffect(() => {
  //   axios.get('https://testtask-5d26c-default-rtdb.firebaseio.com/tasks.json').then(({data}) => {
  //     setTasks(data.tasks)

  //    })

  //  }, [])

  return (
    <div className="container">
      <div className="task__list">
        <AddTask />
        <Task color="red" />
      </div>
    </div>
  );
};

export default Home;
