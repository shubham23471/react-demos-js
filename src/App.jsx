import React from "react";
import UserProfile from "./components/UserProfile";
import { UserProvider } from "./UserContext";
import UpdateUser from "./components/UpdateUser";

const App = () => {
  return (
    <div>
      <UserProvider>
        <UserProfile />
        <UpdateUser />
      </UserProvider>
    </div>
  );
};

export default App;
