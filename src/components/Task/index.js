import React from "react";
import classNames from "classnames";
import "./style.scss";

const Task = ({color, title}) => {

  return (
      <div className="news_container">
        <span className={classNames("circle", {[`circle--${color}`]:color})}></span>
        <p className="title">{title}</p>
      </div>
  );
};

export default Task;