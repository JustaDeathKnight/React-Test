import React from "react";
import { useDispatch } from "react-redux";

import GoogleButton from "react-google-button";
import { Link } from "react-router-dom";

import { googleLogin } from "../actions/auth";

const LoginScreen = () => {
  const dispatch = useDispatch();

  const handleGoogleLogin = () => {
    dispatch(googleLogin());
  };

  return (
    <div className="container">
      <h3>Login</h3>
      <hr />

      <div className="row container">
        <form className="col s12">
          <div className="row">
            {/* Correo */}
            <div className="input-field col s12">
              <i className="material-icons prefix">email</i>
              <input
                id="icon_prefix1"
                className="materialize-textarea"
                type="text"
              />
              <label htmlFor="icon_prefix1">Email</label>
            </div>
            {/* Contraseña */}
            <div className="input-field col s12">
              <i className="material-icons prefix">vpn_key</i>
              <input
                id="icon_prefix2"
                className="materialize-textarea"
                type="password"
              />
              <label htmlFor="icon_prefix2">Contraseña</label>
            </div>
          </div>
          <button
            className="btn waves-effect waves-light cyan darken-4"
            type="submit"
          >
            <i className="material-icons right">send</i>
            Enviar
          </button>
          <hr />
          <GoogleButton onClick={handleGoogleLogin} />
          <Link to="/register">Register with email...</Link>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
