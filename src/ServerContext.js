import React, { useContext, useState, useEffect } from "react"
const ServerContext = React.createContext()

export function useDB() {
    return useContext(ServerContext)
  }

  export function ServerProvider({ children }) {
    const [auth, setAuth] = useState({});
    const [currentUser, setCurrentUser] = useState({})
    const [email,setEmail]=useState()
    const [admin,setadmin]=useState()
    const[loginState,setloginState]=useState(false)
    function SetloginState(bool){
      return setloginState(bool)
    }
    function userSet(email,admin){
      localStorage.setItem("email",email)
      localStorage.setItem("admin",admin)
    }
    function logout(){
      setCurrentUser(null)
      localStorage.clear()
      window.location.reload()
   }
    function userget(){
      setEmail(localStorage.getItem("email"))
      setadmin(localStorage.getItem("admin"))
    }
  
    useEffect(() => {
        userget()
        setCurrentUser(auth)
    }, [])


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
    }
    return (
        <ServerContext.Provider value={value}>
           {children}
        </ServerContext.Provider>
      )
  }