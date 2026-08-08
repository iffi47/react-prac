import React, { useState } from 'react';
import AddUser from './components/User/AddUser';
import UserList from "./components/User/UserList";

function App() {
  const [users, setUsers] = useState([]);
  
  return (
   <div>
    <AddUser getUserData={setUsers} />
    {users.length === 0 && <p className="text">No users</p>}
    {users.length > 0 && <UserList users={users} />}
   </div>
  );
}

export default App;
