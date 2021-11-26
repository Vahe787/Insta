import React from "react";

import { saveData } from "../helpers/localStorage";

import "../App.css";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleEmailValue = (e) => {
    this.setState({ email: e.target.value });
  };

  handlePasswordValue = (e) => {
    this.setState({ password: e.target.value });
  };

  handleUserData = () => {
    if (this.state.email === "" || this.state.password === "") {
      return (
        this.handleEmailValue(this.state.email),
        this.handlePasswordValue(this.state.password)
      );
    }
    let jsonData = {
      email: this.state.email,
      password: this.state.password,
    };
    JSON.stringify(jsonData);
    saveData("data", jsonData);
  };

  render() {
    return (
      <div className="login-form">
        <div className="container">
          <h1>Instagram</h1>
          <input
            onChange={this.handleEmailValue}
            className="inpValid"
            type="email"
            name="email"
            defaultValue={this.state.email}
            placeholder="Номер телефона, адрес электронной почты или имя пользователя"
          />

          <input
            onChange={this.handlePasswordValue}
            className="inpValid"
            type="password"
            name="password"
            defaultValue={this.state.password}
            placeholder="Пароль"
          />

          <button onClick={this.handleUserData} className="registerbtn">
            Вход
          </button>
          <div className="text-container">
            <p className="text">Забыли свои учетные данные?</p>
            <p className="text1">Получить помощь со входом в систему.</p>
          </div>
        </div>
        <div className="gic"></div>
        <div className="text1-container">
          <p className="text2">У вас еще нет аккаунта?</p>
          <p className="text3">Зарегистрируйтесь.</p>
        </div>
      </div>
    );
  }
}

export default Login;
