import { createContext, useState } from "react";

// Creating context
const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "John Doe" });
  // function to update the name
  const updateUser = (newName) => {
    setUser({ name: newName });
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
