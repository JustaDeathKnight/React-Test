import React, { useState } from "react";
import { UserContext } from "./Contexts/UserContext";
import AppRouter from "./Routes/AppRouter";

const App = () => {
  const [user, setUser] = useState(null);
  const state = { user, setUser };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <AppRouter />
    </UserContext.Provider>
  );
};

export default App;
