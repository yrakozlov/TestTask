import React from "react";
import useravatar from "../../assets/liven.png";
import "./style.scss";

const News = ( ) => {
  return (
    <div>
      <div className="news_container">
        <span className="image__inner">
          <img src={useravatar} alt="avatar_svg" />
        </span>
        <p className="description">На южные части Гватемалы обрушились сильные ливни</p>
      </div>
    </div>
  );
};

export default News;