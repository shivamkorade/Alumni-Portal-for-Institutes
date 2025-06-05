import React, { useContext } from 'react'
import { Button } from '@mui/material'
import { AuthContext } from "../../Context/AuthContext";

const Test = () => {

    const {user,login,logout} = useContext(AuthContext);
    const userData = {
        user:"userAdmin",
        role: "admin", // role can be 'admin', 'student', or 'guest'
      };


  return (
    <div>
        <Button onClick={login(userData)}>Admin login</Button>
        <Button onClick={logout}>Flush session</Button>
    </div>
  )
}

export default Test