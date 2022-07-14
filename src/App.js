import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Navbar from "./pages/Navbar";
import Signin from "./pages/Signin";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import OurServices from "./pages/OurServices";
import News from "./pages/News";
import BecomeATutor from "./pages/BecomeATutor";
import ContactUs from "./pages/ContactUs";
import BookAnAppointment from "./pages/BookAnAppointment";
import ErrorPage from "./pages/ErrorPage";
import { theme } from "./pages/ThemeColors";
import { useState, useEffect } from 'react';
import axios from 'axios';


function App() {

  const [data, setData] = useState([])
  var url = "http://localhost:3001/";
  var arrayData = []
  useEffect(() => {
    async function fetchData() {
      //alert("Button clicked")
      
  
      // var data = res.data;
      // data.map(item => {
      //   setUsername([...userName, item.username])
      // })
      // console.log(userName);
      axios.get(`${url}`).
        then(response => {
          
          //console.log(response.data);
          for (var key in response.data) {
            arrayData.push(response.data[key])
          }
          setData(arrayData)
          
        })
    }
    fetchData()
  },[url]);
  console.log(data);
  return (
    
    // ThemeProvider wraps around the whole app as it provides colours
    <ThemeProvider theme={theme} >
      <Router>
        <Navbar />    {/* all pages will include navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/ourservices" element={<OurServices />} />
          <Route path="/news" element={<News />} />
          <Route path="/becomeatutor" element={<BecomeATutor />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/bookanappointment" element={<BookAnAppointment />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="*" element={<ErrorPage />} />        {/* Render error page if path does not match */}
        </Routes>
        <Footer/>   {/* all pages will include footer */}
      </Router>
    </ThemeProvider>
  );
}

export default App;
