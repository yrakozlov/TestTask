import { React, useState } from "react";
import "./style.scss";

const AddTask = () => {
  const [visiblePopup, setVisiblePopup] = useState(false);
  return (
    <div className="addTask">
      <button
        className="addTask__button"
        onClick={() => setVisiblePopup(!visiblePopup)}
      >
        Добавить задачу
      </button>
      {visiblePopup ? <div className="addTask__popup">text</div> : null}
    </div>
  );
};

export default AddTask;
