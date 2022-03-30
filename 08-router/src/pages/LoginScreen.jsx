import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const LoginScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = () => {
    navigate("/mens" + location.search);
  };

  return (
    <div className="container mt-5 text-center">
      <img src="/assets/animate.gif" alt="login img" />
      <h1 className="my-3">Login Screen</h1>
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default LoginScreen;
