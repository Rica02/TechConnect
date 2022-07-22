import React, { useContext, useState, useEffect } from "react"
const ServerContext = React.createContext()


export function useDB() {
    return useContext(ServerContext)
  }

  export function ServerProvider({ children }) {
    const [auth, setAuth] = useState({});
    const [currentUser, setCurrentUser] = useState({})
 

    useEffect(() => {
        
        setCurrentUser(localStorage.getItem("user"))
        console.log(auth)
    }, [])


    const value = {
      auth,
      currentUser,
      setAuth,
    
    }


    return (
        <ServerContext.Provider value={value}>
          { children}
        </ServerContext.Provider>
      )
  }