import React, { useEffect, useRef } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import style from "./login.module.css";
import illustration from "./loginScreen.png";
import api from "../../components/axiosinstance";

const LoginPage = () => {
  const { loginWithRedirect, user, isAuthenticated, getAccessTokenSilently } =
    useAuth0();
  const hasPosted = useRef(false);

  const postUserData = async () => {
    if (user && isAuthenticated && !hasPosted.current) {
      try {
        hasPosted.current = true; // Prevent multiple posts
        const token = await getAccessTokenSilently();
        await api.post("/me", user, {
          headers: { Authorization: `Bearer ${token}` },
        });
      } catch (error) {
        console.error("Error posting user data:", error);
        hasPosted.current = false;
        throw new Error("Failed to post user data");
      }
    }
  };

  useEffect(() => {
    if (!isAuthenticated) return;
    postUserData();
  }, [isAuthenticated]);

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
