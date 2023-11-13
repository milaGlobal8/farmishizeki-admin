import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginProps } from "../pages/Login/Login.types";
import { firebaseApp } from "./../firebase/firebaseConfig";

// firebase
const fireauth = firebaseApp.fireauth;

// ログイン
export const useLogin = () => {
  const navigate = useNavigate();

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = (props: LoginProps) => {
    const { email, password } = props;

    setError(null);
    setIsLoading(true);
    signInWithEmailAndPassword(fireauth, email, password)
      .then(() => {
        setSuccess(true);
        setIsLoading(false);
        // ホームページへ移動
        setTimeout(() => {
          navigate("/");
        }, 1000);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err.message);
        setError(err.message);
      });
  };

  return { success, error, isLoading, login };
};

// ログアウト
export const useLogout = () => {
  const navigate = useNavigate();

  const logout = () => {
    signOut(fireauth)
      .then(() => {
        // ログインページへ移動
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return { logout };
};
