import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { login } from "../actions/auth";
import { firebase } from "../firebase/config-firebase";

import LoginScreen from "../pages/LoginScreen";
import RegisterScreen from "../pages/RegisterScreen";
import AppRouter from "./AppRouter";

const AuthRouter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      dispatch(login(user.uid, user.displayName));
    });
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginScreen} />
        <Route exact path="/register" component={RegisterScreen} />

        <AppRouter />
      </Switch>
    </Router>
  );
};

export default AuthRouter;
