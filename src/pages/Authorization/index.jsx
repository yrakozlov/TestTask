import { React } from "react";
import { Formik } from "formik";
import { auth } from "../../actions/user";
import "./style.scss";
import { initialValues, validateSchemaAuth } from "../variables";

const Authorization = () => {
  return (
    <div>
      <div className="wrapper">
        <Formik
          initialValues={initialValues}
          validateOnBlur
          validationSchema={validateSchemaAuth}
          onSubmit={(values) => {
            auth(values);
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
            <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
              <h1 className="form-title">Вход</h1>
              <div className="form-fields"></div>
              <div className="form-field">
                <input
                  id="email"
                  name={"email"}
                  className={
                    errors.email && touched.email
                      ? "form-field__input-invalid"
                      : "form-field__input"
                  }
                  value={values.email}
                  type="email"
                  placeholder="Введите Email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {errors.email && touched.email && <span>{errors.email}</span>}
              </div>
              <div className="form-field">
                <input
                  id="password"
                  name={"password"}
                  className={
                    errors.password && touched.password
                      ? "form-field__input-invalid"
                      : "form-field__input"
                  }
                  value={values.password}
                  type="password"
                  placeholder="Введите Пароль"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {errors.password && touched.password && (
                  <span>{errors.password}</span>
                )}
              </div>
              <div className="form-buttons">
                <button
                  type="submit"
                  className={isValid ? "button" : "button--disabled"}
                  onClick={handleSubmit}
                >
                  Войти
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Authorization;
