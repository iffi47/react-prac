import Card from "../UI/Card";
import classes from "./UserList.module.css";

export default function UserList({ users }) {
  return (
    <>
      <Card className={classes.users}>
        <ul>
          {users.map((user) => (
            <li key={user.name}>{user.username} is have age {user.age}</li>
          ))
          }
        </ul>
      </Card>
    </>
  )
}