import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

import { login } from "../actions/auth";
import { firebase } from "../firebase/config-firebase";

import AppScreen from "../pages/AppScreen";
import AuthRouter from "./AuthRouter";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";

const AppRouter = () => {
  const dispatch = useDispatch();

  const [log, setLog] = useState(false);

  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       dispatch(login(user.uid, user.displayName));
  //       setLog(true);
  //     } else {
  //       setLog(false);
  //     }
  //   });
  // }, [dispatch]);

  return (
    <Router>
      <Switch>
        <PublicRouter path="/" component={AuthRouter} log={log} />
        <PrivateRouter exact path="/app" log={log} component={AppScreen} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
