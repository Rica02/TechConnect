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
  const [result, setresult] = useState()
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
  const [userInf, setUserInf] = useState([]);
  useEffect(() => {
    var loaclEmail = localStorage.getItem('email');
    axios.post("http://localhost:3007/api/getUser", { email: loaclEmail }).then((data) => {
      setUserInf(data.data)
    });
  }, [])
console.log(userInf)

  async function CheckPassword(id, Password) {

    try {
      await axios.post('http://localhost:3007/api/checkPassword', {
        id: id,
        password: Password,
      })
        .then((response) => {
          if (response.data.length >= 1) {
            console.log("setresult true");
            setresult(true);
            console.log("result", result)
            return result;
          } else if (response.data < 1) {
            alert("no combination found")
            console.log("result", result)
            setresult(false);
            return result;
          }
        }, (error) => {
          alert('error')
          console.log(error);
          alert("error")
        });
    } catch (error) {
      console.log(error);
    }

  }
  async function UpdateUser(data) {

    try {
      await axios.post('http://localhost:3007/api/userUpdate', {
        email: data.email,
        password: data.password,
        phone: data.phone,
        firstName: data.firstName,
        lastName: data.lastName,
        gender: data.gender,
        dob: data.dob,
        address: data.address,
        id: data.id,
      })
        .then((response) => {
          alert('Update succeed')
          window.location.reload();
        }, (error) => {
          alert('error')
          console.log(error);
          alert("error")
        });
    } catch (error) {
      console.log(error);
    }

  }
  async function UpdateUserP(data) {

    try {
      await axios.post('http://localhost:3007/api/userUpdate', {
        email: data.email,
        password: data.password,
        phone: data.phone,
        firstName: data.firstName,
        lastName: data.lastName,
        gender: data.gender,
        dob: data.dob,
        address: data.address,
        password:data.NewPassword,
        id: data.id,
      })
        .then((response) => {
          alert('Update succeed')
          window.location.reload();
        }, (error) => {
          alert('error')
          console.log(error);
          alert("error")
        });
    } catch (error) {
      console.log(error);
    }

  }

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
    CheckPassword, UpdateUserP,UpdateUser,
  }
  return (
    <ServerContext.Provider value={value}>
      {children}
    </ServerContext.Provider>
  )
}