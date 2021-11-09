import { Formik } from "formik";
import { React, useState } from "react";
import { initialValues, validateSchemaAddTask } from "../../pages/variables";
import { useClickOutside } from "../../hooks/useClickOutside";
import "./style.scss";

const AddTask = ({onAdd}) => {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const onClose = () => {
    setVisiblePopup(!visiblePopup);
  };

  const domNode = useClickOutside(() => {
    setVisiblePopup(false);
  });




  return (
    <div ref={domNode} className="addTask">
      <button className="addTask__button" onClick={onClose}>
        Add
      </button>
      {visiblePopup ? (
        <Formik
          initialValues={initialValues}
          validateOnBlur
          validationSchema={validateSchemaAddTask}
          onSubmit={(values) => {
            onAdd({todoId: 1, title: values.nameTask});
            setVisiblePopup(!visiblePopup);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isValid,
          }) => (
            <form className="addTask__popup">
              <div className="addTask__popup-title">Добавить задачу</div>
              <div className="addTask__popup-field">
                <input
                  id="nameTask"
                  name="nameTask"
                  className={
                    errors.nameTask && touched.nameTask
                      ? "addTask__popup-field__input--invalid"
                      : "addTask__popup-field__input"
                  }
                  values={values.nameTask}
                  type="text"
                  placeholder="Введите название задачи"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {errors.nameTask && touched.nameTask && (
                  <span>{errors.nameTask}</span>
                )}
              </div>

              <button
                className={
                  isValid
                    ? "addTask__popup-button"
                    : "addTask__popup-button--disabled"
                }
                type="submit"
                onClick={handleSubmit}
              >
                Добавить
              </button>
            </form>
          )}
        </Formik>
      ) : null}
    </div>
  );
};

export default AddTask;
