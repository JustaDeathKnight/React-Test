import React from "react";
import { Route, Switch } from "react-router-dom";
import AppScreen from "../pages/AppScreen";

const AppRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/app" component={AppScreen} />
      </Switch>
    </div>
  );
};

export default AppRouter;
