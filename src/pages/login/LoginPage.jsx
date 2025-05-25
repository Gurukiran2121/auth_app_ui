import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import style from "./login.module.css";
import illustration from "../../../public/loginScreen.png";

const LoginPage = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className={style.LoginPage}>
      <div className={style.LoginContainer}>
        <div className={style.Illustration}>
          <img src={illustration} alt="Login Illustration" />
        </div>
        <div className={style.authContainer}>
          <h1 className={style.authTitle}>Welcome to SynChat</h1>
          <p className={style.authDescription}>Please log in to continue</p>
          <button
            className={style.loginButton}
            onClick={() => loginWithRedirect()}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
