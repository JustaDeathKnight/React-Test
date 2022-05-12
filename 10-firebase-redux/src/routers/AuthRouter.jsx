import { Redirect, Route, Switch } from "react-router-dom";

import LoginScreen from "../pages/LoginScreen";
import RegisterScreen from "../pages/RegisterScreen";

const AuthRouter = () => {
  return (
    <Switch>
      <Route exact path="/login" component={LoginScreen} />
      <Route exact path="/register" component={RegisterScreen} />

      <Redirect to='/login'  />
    </Switch>
  );
};

export default AuthRouter;
