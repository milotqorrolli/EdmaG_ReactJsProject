import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.scss";
import { NavLink } from "react-router-dom";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showWrapper2, setShowWrapper2] = useState(true);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nameError, setNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [loginError, setLoginError] = useState("");

  const navigate = useNavigate();

  const validateFields = () => {
    let isValid = true;

    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (!name) {
      setNameError("Name is required");
      isValid = false;
    } else {
      setNameError("");
    }

    if (!lastName) {
      setLastNameError("Last Name is required");
      isValid = false;
    } else {
      setLastNameError("");
    }

    return isValid;
  };

  const onButtonClick = () => {
    if (validateFields()) {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find((u) => u.email === email && u.password === password);
  
      if (user) {
        navigate("/home");
      } else {
        setLoginError("Invalid email or password. Please try again.");
      }
    } else {
        setLoginError("Invalid email or password. Please try again.");

    }
  };
  

  const toggleWrapper = () => {
    setShowWrapper2(!showWrapper2);
  };

  const onRegisterClick = () => {
    if (validateFields()) {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = {
        name: name,
        lastName: lastName,
        email: email,
        password: password,
      };
      users.push(user);

      localStorage.setItem("users", JSON.stringify(users));
      toggleWrapper();
    }
  };

  return (
    <div className="login-container">
      <div className="wrapper1">
        <h1>Welcome to EDMA Gmbh</h1>
        <p>
          Please <span>login</span> to continue to our website
        </p>
      </div>
      {showWrapper2 ? (
        <div className="wrapper2">
          <h1>Login</h1>
          <div className="inputContainer">
            <input
              value={email}
              type="email"
              placeholder="Enter your email here"
              onChange={(ev) => setEmail(ev.target.value)}
              className="inputBox"
            />
            <label className="errorLabel">{emailError}</label>
          </div>
          <div className="inputContainer">
            <input
              value={password}
              type="password"
              placeholder="Enter your password here"
              onChange={(ev) => setPassword(ev.target.value)}
              className="inputBox"
            />
            <label className="errorLabel">{passwordError}</label>
          </div>
          <div className="registerContainer">
            <p>
              Don't you have an account? Register{" "}
              <NavLink onClick={toggleWrapper}>here</NavLink>
            </p>
          </div>
          <div className="inputContainer">
            <input
              className="inputButton"
              type="button"
              onClick={onButtonClick}
              value="Log in"
            />
          </div>
          <div className="errorContainer">
            {loginError && <p className="errorText">{loginError}</p>}
          </div>
        </div>
      ) : (
        <div className="wrapper2">
          <h1>Register</h1>
          <div className="inputContainer">
            <input
              value={name}
              placeholder="Enter your name"
              onChange={(ev) => setName(ev.target.value)}
              className="inputBox"
            />
            <label className="errorLabel">{nameError}</label>
          </div>
          <div className="inputContainer">
            <input
              value={lastName}
              placeholder="Enter your last name"
              onChange={(ev) => setLastName(ev.target.value)}
              className="inputBox"
            />
            <label className="errorLabel">{lastNameError}</label>
          </div>
          <div className="inputContainer">
            <input
              value={email}
              type="email"
              placeholder="Enter your email"
              onChange={(ev) => setEmail(ev.target.value)}
              className="inputBox"
            />
            <label className="errorLabel">{emailError}</label>
          </div>
          <div className="inputContainer">
            <input
              value={password}
              placeholder="Enter your password"
              onChange={(ev) => setPassword(ev.target.value)}
              type="password"
              className="inputBox"
            />
            <label className="errorLabel">{passwordError}</label>
          </div>
          <div className="registerContainer">
            <p>
              Already have an account? Login{" "}
              <NavLink onClick={toggleWrapper}>here</NavLink>
            </p>
          </div>
          <div className="inputContainer">
            <input
              className="inputButton"
              type="button"
              onClick={onRegisterClick}
              value="Register"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
