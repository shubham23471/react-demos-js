import React, { useState } from "react";

// this will show you how to initilize a 'JS object' as initial
// value and then update it

const Profile = () => {
  // to store all the profiles
  const [profile, setProfile] = useState({
    name: "",
    age: "",
  });

  //to get the input for profile name
  const handleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    console.log("name:", name, [name]);
    console.log(value);
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>User Profile</h2>
      {/* <p>{profile.name}</p> */}
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={profile.name}
            onChange={handleChange}
          ></input>
        </label>
      </div>

      <div>
        <label>
          Age:
          <input
            type="number"
            name="age"
            placeholder="Enter your age"
            value={profile.age}
            onChange={handleChange}
          ></input>
        </label>
      </div>

      <h3> Profile Information</h3>
      <p>Name: {profile.name}</p>
      <p>Age: {profile.age}</p>
    </div>
  );
};

export default Profile;
