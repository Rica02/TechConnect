import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
const ServerContext = React.createContext()

export function useDB() {
  return useContext(ServerContext)
}

export function ServerProvider({ children }) {
  const [auth, setAuth] = useState({});
  const [currentUser, setCurrentUser] = useState({})
  const [email, setEmail] = useState()
  const [admin, setadmin] = useState()
  const [loginState, setloginState] = useState(false)
  function SetloginState(bool) {
    return setloginState(bool)
  }
  function userSet(email, admin) {
    localStorage.setItem("email", email)
    localStorage.setItem("admin", admin)
  }
  function logout() {
    setCurrentUser(null)
    localStorage.clear()
    window.location.reload()
  }
  function userget() {
    setEmail(localStorage.getItem("email"))
    setadmin(localStorage.getItem("admin"))
  }

  useEffect(() => {
    userget()
    setCurrentUser(auth)
  }, [])
//----------DB-------------

//Get Account Details
const [userInf,setUserInf]=useState([]);
useEffect(()=>{
  var loaclEmail=localStorage.getItem('email');
   axios.post("http://localhost:3007/api/getUser",{email:loaclEmail}).then((data)=>{
    setUserInf(data.data)
});
},[])

  const value = {
    auth,
    currentUser,
    email,
    admin,
    loginState,
    setAuth,
    userSet,
    SetloginState,
    logout,
    userInf,//Get Account Details
  }
  return (
    <ServerContext.Provider value={value}>
      {children}
    </ServerContext.Provider>
  )
}