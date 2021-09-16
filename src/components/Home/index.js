import React from "react";
import { News } from "../index";
import "./style.scss";

const Home = () => {
  return (
    <div className="container">
      <div className="news_wrapper">
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
      </div>
    </div>
  );
};

export default Home;
