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
    userget();
    setCurrentUser(auth);
  }, [auth])
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
  try {
    await axios.post('http://localhost:3007/api/addNews', {
    
      title: data.title,
      date: data.date,
      text: data.text,
    })
      .then((response) => {
        alert('Update succeed')
      }, (error) => {
        alert('error')
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
          if (response.status===200) {
            setresult(true);
            return result;
          } else if (response.status===220) {
            alert("no combination found")
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
          alert('delete succeed')
          logout();
        }, (error) => {
          alert('error')
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
        if(response.status===200){
          alert('Update succeed')
          window.location.reload();
        }else{
          alert('Update error')
        }
          }, (error) => {
              alert('error')
              console.log(error);
          });
  } catch (error) {
      console.log(error);
  }
    
  }

  //book lesson
  async function BookLessonToDB(data) {
    try {
      await axios.post('http://localhost:3007/api/bookLesson', {
      
        date: data.date,
        time: data.time,
        type: data.type,
        detail: data.detail,
        receive: data.receive,
        uid:userInf[0].id,
      })
        .then((response) => {
          if(response.status===200){
            alert('booking succeed')
          }else{
            alert('booking error')
          }
        }, (error) => {
          alert('error')
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }
  //get meeting
  const [getMeetings, setGetMeetings] = useState([]);
useEffect(() => {
  axios.get("http://localhost:3007/api/getMeetings").then((data) => {
    setGetMeetings(data.data)
  });
}, [])
  //get meeting
  const [getBookLesson, setGetBookLesson] = useState([]);
useEffect(() => {
  axios.get("http://localhost:3007/api/getBookLesson").then((data) => {
    setGetBookLesson(data.data)
  });
}, [])

  //get changeAvailability
  const [getChangeAvailability, setGetChangeAvailability] = useState([]);
useEffect(() => {
  axios.get("http://localhost:3007/api/getChangeAvailability").then((data) => {
    setGetChangeAvailability(data.data)
  });
}, [])

//ChangeAvailability
async function ChangeAvailabilityToDB(data) {
  try {
    await axios.post('http://localhost:3007/api/changeAvailability', {
    
      meetingId: data.meetingId,
      aDate: data.aDate,
      aTime: data.aTime,
      detail: data.detail,
      uid:userInf[0].id,

    })
      .then((response) => {
        if(response.status===200){
          alert('Change succeed')
        }else{
          alert('Change error')
        }
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
    CheckPassword,UpdateUser,DeleteUser,ResetPassword,
    //News
    getNews,AddNewsToDB,
    //bookLesson
    BookLessonToDB,
    //meeting list
    getMeetings,
    //ChangeAvailability
    ChangeAvailabilityToDB,
    getBookLesson,
    getChangeAvailability,
  }
  return (
    <ServerContext.Provider value={value}>
      {children}
    </ServerContext.Provider>
  )
}