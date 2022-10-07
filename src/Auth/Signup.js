import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeIsAuth } from "../Chat/ChatSlice";
import firebase from "firebase/compat/app";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import "./Auth.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const firebaseApp = firebase.apps[0];

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
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      dispatch(changeIsAuth(true));
      history.push("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="root">
      <Paper elevation={3} className="signupWrapper">
        <div className="signUpHeading">
          <h1 className="brandTitle">Регистрация</h1>
        </div>

        <form onSubmit={handleSubmit} className="signUpForm">
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
            {error && <p className="error">Что-то пошло не так!</p>}
            <Button type="submit" variant="contained">
              Регистрация
            </Button>
          </div>
          <p className="logIn">
            <Link to="/login" className="logInLink">
              Уже зарегистрированы?
            </Link>
          </p>
        </form>
        <code>
          <pre>{JSON.stringify(firebaseApp.options, null, 2)}</pre>
        </code>
      </Paper>
    </div>
  );
};

export default Signup;
