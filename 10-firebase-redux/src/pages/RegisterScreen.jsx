import React, { useState } from "react";
import { Link } from "react-router-dom";

const RegisterScreen = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { username, email, password, confirmPassword } = data;

  const handleChange = (event) => {
    const value = event.target.value;

    setData({
      ...data,
      [event.target.name]: value,
    });
  };

  const handleRegister = (event) => {
    event.preventDefault();

    if (email.trim() === "" || !email.trim().includes('@') ) {
      return
    }
    if (username.trim().length <2) {
      return
    }
    if (password.trim().length <6) {
      return
    }else 
    {
      if (password.trim() !== confirmPassword.trim()){
        return
      }
    
    }


  };

  return (
    <div className="container">
      <h3>Register</h3>
      <hr />

      <div className="row container">
        <form className="col s12" onSubmit={handleRegister}>
          <div className="row">
            {/* Usuario */}
            <div className="input-field col s12">
              <i className="material-icons prefix">account_box</i>
              <input
                onChange={handleChange}
                value={username}
                id="icon_prefix1"
                className="materialize-textarea"
                type="text"
                name="username"
              />
              <label htmlFor="icon_prefix1">User Name</label>
            </div>
            {/* Correo */}
            <div className="input-field col s12">
              <i className="material-icons prefix">email</i>
              <input
                onChange={handleChange}
                value={email}
                id="icon_prefix2"
                className="materialize-textarea"
                type="email"
                name="email"
              />
              <label htmlFor="icon_prefix2">Email</label>
            </div>
            {/* Contraseña */}
            <div className="input-field col s12">
              <i className="material-icons prefix">vpn_key</i>
              <input
                onChange={handleChange}
                value={password}
                id="icon_prefix3"
                className="materialize-textarea"
                type="password"
                name="password"
              />
              <label htmlFor="icon_prefix3">Contraseña</label>
            </div>
            {/* Contraseña Confirmacion*/}
            <div className="input-field col s12">
              <i className="material-icons prefix">vpn_key</i>
              <input
                onChange={handleChange}
                value={confirmPassword}
                id="icon_prefix4"
                className="materialize-textarea"
                type="password"
                name="confirmPassword"
              />
              <label htmlFor="icon_prefix4">Confirme Contraseña</label>
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
          <Link to="/login">Login with account..</Link>
        </form>
      </div>
    </div>
  );
};

export default RegisterScreen;
