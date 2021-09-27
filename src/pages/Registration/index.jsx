import { Formik } from "formik";
import { React } from "react";
import { reg } from "../../actions/user";
import { initialValues, validateSchemaReg } from "../variables";
import "./style.scss";

const Registration = () => {
  return (
    <div className="wrapper">
      <Formik
        initialValues={initialValues}
        validateOnBlur
        validationSchema={validateSchemaReg}
        onSubmit={(values) => {
          reg(values);
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
          <form className="register-form" onSubmit={(e) => e.preventDefault()}>
            <h1 className="form-title">Регистрация</h1>
            <div className="form-fields">
              <div className="form-field">
                <input
                  id="name"
                  name="name"
                  className={errors.name && touched.name ? "invalid" : ""}
                  type="text"
                  placeholder="Введите Имя"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.name}
                />
                {errors.name && touched.name && <span>{errors.name}</span>}
              </div>

              <div className="form-field">
                <input
                  id="email"
                  name="email"
                  className={errors.email && touched.email ? "invalid" : ""}
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
                    errors.password && touched.password ? "invalid" : ""
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
              <div className="form-field">
                <input
                  id="rapeatPassword"
                  name="rapeatPassword"
                  className={
                    errors.rapeatPassword && touched.rapeatPassword
                      ? "invalid"
                      : ""
                  }
                  value={values.rapeatPassword}
                  type="password"
                  placeholder="Введите Пароль"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {errors.rapeatPassword && touched.rapeatPassword && (
                  <span>{errors.rapeatPassword}</span>
                )}
              </div>
            </div>
            <div className="form-buttons">
              <button
                type="submit"
                className={isValid ? "button" : "button--disabled"}
                onClick={handleSubmit}
              >
                Зарегистрироваться
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Registration;
