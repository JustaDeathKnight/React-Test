import React, { useContext } from "react";
import { Navigate } from "react-router";

import { AuthContext } from "../context/AuthContext";

const PublicRouter = ({ children }) => {
  const { log } = useContext(AuthContext);

  // if log.log is true, then Navigate to "/"
  return !log.log ? children : <Navigate to="/" />;
};

export default PublicRouter;
