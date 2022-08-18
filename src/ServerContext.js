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
// console.log(userInf)
//Get News
const [getNews, setGetNews] = useState([]);
useEffect(() => {
  axios.get("http://localhost:3007/api/news").then((data) => {
    setGetNews(data.data)
  });
}, [])
//add news
async function AddNewsToDB(data) {
  console.log("AddNewsToDB")
  try {
    await axios.post('http://localhost:3007/api/addNews', {
    
      title: data.title,
      date: data.date,
      text: data.text,
    })
      .then((response) => {
        console.log(response)
        alert('Update succeed')
      }, (error) => {
        alert('error')
        console.log(error);
        alert("error")
      });
  } catch (error) {
    console.log(error);
  }

}

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
          console.log(response)
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
          console.log("response UpdateUserP",response)
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

  async function DeleteUser(ID) {

    try {
      await axios.post('http://localhost:3007/api/delete', {
        id:ID,
      })
        .then((response) => {
          console.log("response delete",response)
          alert('delete succeed')
          logout();
        }, (error) => {
          alert('error')
          console.log(error);
          alert("error")
        });
    } catch (error) {
      console.log(error);
    }

  }

  async function ResetPassword(ID,Password) {
    try {
      await axios.post('http://localhost:3007/api/reset', {
          id: ID,
          password:Password,
      }).then((response) => {
        console.log("response ResetPassword",response)
        alert('Update succeed')
          }, (error) => {
              alert('error')
              console.log(error);
          });
  } catch (error) {
      console.log(error);
  }
    
  }
//-------DB END -----
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
    CheckPassword, UpdateUserP,UpdateUser,DeleteUser,ResetPassword,
    //News
    getNews,AddNewsToDB,
  }
  return (
    <ServerContext.Provider value={value}>
      {children}
    </ServerContext.Provider>
  )
}