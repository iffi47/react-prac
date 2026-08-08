import React, { useState } from 'react';
import AddUser from './components/User/AddUser';
import UserList from "./components/User/UserList";

function App() {
  const [users, setUsers] = useState([]);
  
  return (
   <div>
    <AddUser getUserData={setUsers} />
    <UserList users={users} />
   </div>
  );
}

export default App;
