import { useState } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

export default function AddUser({getUserData}) {
  const [userData, setUserData] = useState({
    username: "",
    age: null
  });
  const handleInputData= (identifier, data) => {
    setUserData((prevData) => {
      return{
        ...prevData,
        [identifier]: data
      }
    });
  };
  function handleUserSubmission(event) {
    event.preventDefault();
    if(userData.username.trim().length===0 || userData.age<=0){
      return;
    }
    getUserData((prevData) => {
      return [
        ...prevData,
        userData
      ]
    });
    setUserData(() =>{
      return{
        username: "",
        age: ""
      }
    })
  }
  return(
    <>
    <Card className={classes.input}>
    <form onSubmit={handleUserSubmission}>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" value={userData.username} onChange={(event) =>handleInputData('username', event.target.value)} />
      <label htmlFor="age">Age (Year)</label>
      <input type="number" id="age" value={userData.age || 0} min={0} onChange={(event) =>handleInputData('age', event.target.value)}/>
      <Button type="submit">Submit</Button>
    </form>
    </Card>
    </>
  )
}