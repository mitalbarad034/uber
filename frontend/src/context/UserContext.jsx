import { createContext, useState } from "react";

export const UsercontextData = createContext(null);

const UserContext = ({ children }) => {
  const [users, setUsers] = useState({
    fullName: {
      firstname: '',
      lastname: ''
    },
    email: '',
  });
  return (
    <UsercontextData.Provider value={{ users, setUsers }}>
      {children}
    </UsercontextData.Provider>
  )
}

export default UserContext
