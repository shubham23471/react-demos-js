import { useContext, useState } from "react";
import { UserContext } from "../UserContext";

const UpdateUser = () => {
  const { updateUser } = useContext(UserContext);
  const [newName, setNewName] = useState("");

  //func to trigger when form is submited
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("here");

    if (newName.trim()) {
      updateUser(newName);
      setNewName("");
    }
  };

  return (
    <div>
      <h2> Update User Name</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Enter new Name"
        ></input>
      </form>

      <button type="submit">Update Name</button>
    </div>
  );
};

export default UpdateUser;
