import React from "react";
import { Route, Routes } from "react-router-dom";

const PublicRouter = ({ auth, element: Component, ...rest }) => {
    return 
    <Routes>
      <Route {...rest} auth={auth} element={() => <Component />} />;
    </Routes>
};

export default PublicRouter;
