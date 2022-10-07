import { Link, useHistory } from "react-router-dom";
import firebase from "firebase/compat/app";
import { useState } from "react";
import { changeIsAuth } from "../Chat/ChatSlice";
import { useDispatch } from "react-redux";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import "./Auth.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handlePassChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      dispatch(changeIsAuth(true));
      history.push("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="root">
      <Paper elevation={3} className="loginWrapper">
        <div className="loginHeading">
          <h1 className="brandTitle">Вход</h1>
        </div>

        <form onSubmit={handleSubmit} className="loginForm">
          <div className="inputWrapper">
            <input
              placeholder="E-mail"
              name="email"
              type="email"
              onChange={handleEmailChange}
              value={email}
              className="input"
            />
          </div>
          <div className="inputWrapper">
            <input
              placeholder="Пароль"
              name="password"
              onChange={handlePassChange}
              value={password}
              type="password"
              className="input"
            />
          </div>
          <div className="buttonWrapper">
            {error && <p className="error">Пользователь не зарегистрирован!</p>}
            <Button type="submit" variant="contained">
              Войти
            </Button>
          </div>
          <p className="signUp">
            <Link to="/signup" className="signUpLink">
              Создать аккаунт
            </Link>
          </p>
        </form>
      </Paper>
    </div>
  );
};

export default Login;
