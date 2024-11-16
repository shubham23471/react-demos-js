import React from "react";
import { useContext } from "react";
import { UserContext } from "../UserContext";

const UserProfile = () => {
  // inside this we want to access the data from context
  const { user } = useContext(UserContext);

  return (
    <div User>
      <h1> User Profile</h1>
      <p>Name: {user.name}</p>
    </div>
  );
};

export default UserProfile;
