import React, { useState } from 'react';
import AddUser from './components/User/AddUser';

function App() {
  const [users, setUsers] = useState([]);
  console.log(users);
  
  return (
    <div>
      <AddUser getUserData={setUsers} /> 
    </div>
  );
}

export default App;
