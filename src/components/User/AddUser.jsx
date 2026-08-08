import { useState } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

export default function AddUser({ getUserData }) {
  const [userData, setUserData] = useState({
    username: "",
    age: "",
    id: null
  });
  const handleInputData = (identifier, data) => {
    setUserData((prevData) => {
      return {
        ...prevData,
        [identifier]: data
      }
    });
  };
  function handleUserSubmission(event) {
    event.preventDefault();
    const ageNum = +userData.age;
    if (userData.username.trim().length === 0 || !ageNum || ageNum <= 0) {
      return;
    }

    const newUser = {
      username: userData.username.trim(),
      age: ageNum,
      id: Math.random().toString()
    };

    getUserData((prevData) => {
      return [
        ...prevData,
        newUser
      ];
    });

    setUserData({
      username: "",
      age: "",
      id: null
    });
  }
  return (
    <>
      <ErrorModal title="An Error Occurred!" message="Something went wrong" />
      <Card className={classes.input}>
        <form onSubmit={handleUserSubmission}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" value={userData.username} onChange={(event) => handleInputData('username', event.target.value)} />
          <label htmlFor="age">Age (Year)</label>
          <input type="number" id="age" value={userData.age || ''} min={0} onChange={(event) => handleInputData('age', event.target.value)} />
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </>
  )
}