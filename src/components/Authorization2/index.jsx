import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../../components/actions/user";
import "./style.scss";

const Authorization2 = () => {
  const [email, setEmail] = useState("");
  const [password, SetPasword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("Емейл не может быть пустым");
  const [passwordError, setPasswordError] = useState(
    "Пароль не может быть пустым "
  );
  const dispatch = useDispatch();

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email).toLowerCase())) {
      setEmailError("Некоректный Email");
    } else if (!e.target.value) {
      setEmailError("Емейл не может быть пустым");
    } else {
      setEmailError("");
    }
  };

  const passwordHanler = (e) => {
    SetPasword(e.target.value);
    if (e.target.value.length < 6) {
      setPasswordError("Пароль должен состоять не меньше , чем из 6 символов");
      if (!e.target.value) {
        setPasswordError("Пароль не может быть пустым");
      }
    } else {
      setPasswordError("");
    }
  };

  const blurHandler = (e) => {
    switch (e.target.type) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
      default:
        setPasswordDirty(false);
        setEmailDirty(false);
    }
    console.log(emailDirty);
  };

  // const loginHandler = (event) => {
  //   event.preventDefault();
  //   console.log("jd");
  //   auth(email, password, true);
  // };

  return (
    <div>
      <div className="wrapper">
        <form className="auth-form">
          <h1 className="form-title">Вход</h1>
          <div className="form-fields"></div>
          <div className="form-field">
            <input
              className={emailDirty && emailError ? "invalid" : ""}
              onChange={(e) => emailHandler(e)}
              value={email}
              onBlur={(e) => blurHandler(e)}
              type="email"
              placeholder="Введите Email"
            />
            {emailDirty && emailError && <span>{emailError}</span>}
          </div>
          <div className="form-field">
            <input
              className={passwordDirty && passwordError ? "invalid" : ""}
              onChange={(e) => passwordHanler(e)}
              value={password}
              onBlur={(e) => blurHandler(e)}
              type="password"
              placeholder="Введите Пароль"
            />
            {passwordDirty && passwordError && <span>{passwordError}</span>}
          </div>
          <div className="form-buttons">
            <button
              className="button"
              onClick={(event) => {
                dispatch(auth(event, email, password));
              }}
            >
              Войти
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Authorization2;
