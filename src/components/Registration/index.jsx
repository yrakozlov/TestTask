import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { reg } from "../../components/actions/user";
import "./style.scss";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [repeatPasswordDirty, setRepeatPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("Емейл не может быть пустым");
  const [passwordError, setPasswordError] = useState(
    "Пароль не может быть пустым "
  );
  const [repeatPasswordError, setRepeatPasswordError] = useState(
    "Поле не может быть пустым"
  );

  const dispatch = useDispatch();

  const nameHanler = (e) => {
    setName(e.target.value);
  };

  const emailHanler = (e) => {
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
    setPassword(e.target.value);
    if (e.target.value.length < 6) {
      setPasswordError("Пароль должен состоять не меньше , чем из 6 символов");
      if (!e.target.value) {
        setPasswordError("Пароль не может быть пустым");
      }
    } else {
      setPasswordError("");
    }
  };

  const repeatPasswordHanler = (e, password) => {
    password = document.getElementById("password");
    setRepeatPassword(e.target.value);
    if (e.target.value !== password.value) {
      setRepeatPasswordError("Пароли не совпадают");
      if (!e.target.value) {
        setRepeatPasswordError("Поле не может быть пустым");
      }
    } else {
      setRepeatPasswordError("");
    }
  };

  const blurHandler = (e) => {
    console.log(e.target.id);
    switch (e.target.id) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
      case "repeatPassword":
        setRepeatPasswordDirty(true);
        break;
      default:
        setPasswordDirty(false);
        setEmailDirty(false);
        setRepeatPasswordDirty(false);
    }
  };

  return (
    <div className="wrapper">
      <form className="register-form">
        <h1 className="form-title">Регистрация</h1>
        <div className="form-fields">
          <div className="form-field">
            <input
              className={""}
              type={"text"}
              placeholder="Введите Имя"
              onChange={(e) => nameHanler(e)}
              value={name}
            />
          </div>
          <div className="form-field">
            <input
              className={emailDirty && emailError ? "invalid" : ""}
              id="email"
              type={"email"}
              placeholder="Введите Email"
              onBlur={(e) => blurHandler(e)}
              onChange={(e) => emailHanler(e)}
              value={email}
            />
            {emailDirty && emailError && <span>{emailError}</span>}
          </div>
          <div className="form-field">
            <input
              id="password"
              className={passwordDirty && passwordError ? "invalid" : ""}
              type={"password"}
              placeholder="Введите пароль"
              onBlur={(e) => blurHandler(e)}
              onChange={(e) => passwordHanler(e)}
              value={password}
            />
            {passwordDirty && passwordError && <span>{passwordError}</span>}
          </div>
          <div className="form-field">
            <input
              className={
                repeatPasswordDirty && repeatPasswordError ? "invalid" : ""
              }
              id="repeatPassword"
              type={"password"}
              placeholder="Повторно введите пароль"
              onBlur={(e) => blurHandler(e)}
              onChange={(e) => repeatPasswordHanler(e, password)}
              value={repeatPassword}
            />
            {repeatPasswordDirty && repeatPasswordError && (
              <span>{repeatPasswordError}</span>
            )}
          </div>
        </div>
        <div className="form-buttons">
          <button
            className="button"
            onClick={(event) => {
              dispatch(reg(event, email, password));
            }}
          >
            Зарегистрироваться
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
