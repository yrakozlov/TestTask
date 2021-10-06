import React from "react";
import classNames from "classnames";
import "./style.scss";

const Task = ({color}) => {

  return (
      <div className="news_container">
        <span className={classNames("circle", {[`circle--${color}`]:color})}></span>
        <p className="title">На южные части Гватемалы обрушились сильные ливни</p>
      </div>
  );
};

export default Task;