import { BrowserRouter as Router, Routes, Route, useResolvedPath } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { ServerProvider } from "./ServerContext";
import { ThemeProvider } from "styled-components";
import { theme } from "./pages/ThemeColors";
import GlobalStyles from "./pages/GlobalStyles";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "./pages/Dashboard";
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
import Signup from "./pages/Signin/Signup";
import ErrorPage from "./pages/ErrorPage";
import BookLesson from "./pages/BookLesson/intex";
import ChangeAvailability from "./pages/ChangeAvailability/intex";
import AccountDetails from "./pages/AccountDetails";
import AdminPage from "./pages/AdminPage";
import StudentPage from "./pages/StudentPage";
import TutorPage from "./pages/TutorPage";
import CreateMeeting from "./pages/CreateMeeting";
import AddNews from "./pages/AddNews";
import ForgotPassword from "./pages/Signin/ForgotPassword";
import AccuntResetPassword from "./pages/AccountDetails/components/AccuntResetPassword";
import ResetPasswordForm from "./pages/ResetPassword/ResetPasswordForm";
import Allocation from "./pages/Allocation";

function App() {
  const [ourServices, setOurServices] = useState([]);
  //console.log("Web content: " + JSON.stringify(ourServices))

  // on page load, get web content data
  useEffect(() => {
    try {
        axios.post('http://localhost:3007/getwebcontent')
        .then((response) => {
          console.log("Get web content successful.");
          // console.log("Get users successful. Response data: " + JSON.stringify(response))

          // get response and store it in useState array
          setOurServices([...response.data.ourServices]);
          // setOurServices(values => [response.data.ourServices]);

        }, (error) => {
            console.log("Error occurred: " + error);
        });
    } catch (error) {
        console.log("Get users failed, reason: " + error);
    }
  }, []);

  return (
    <ServerProvider>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/tutorpage" element={<PrivateRoute><TutorPage/></PrivateRoute>} />
          <Route path="/studentPage" element={<PrivateRoute><StudentPage/></PrivateRoute>} />
          <Route path="/adminPage" element={<PrivateRoute><AdminPage/></PrivateRoute>} />
          <Route path="/accountDetails" element={<PrivateRoute><AccountDetails/></PrivateRoute>} />
          <Route path="/booklesson" element={<PrivateRoute><BookLesson/></PrivateRoute>} />
          <Route path="/changeavailability" element={<PrivateRoute><ChangeAvailability/></PrivateRoute>} />
          <Route path="/addNews" element={<PrivateRoute><AddNews/></PrivateRoute>} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
          <Route path="/accuntResetPassword" element={<PrivateRoute><AccuntResetPassword/></PrivateRoute>} />
          <Route path="/createmeeting" element={<PrivateRoute><CreateMeeting /></PrivateRoute>} />
          <Route path="/allocation" element={<PrivateRoute><Allocation /></PrivateRoute>} />
          <Route path="/" element={<Home serviceData={ourServices} />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/ourservices" element={<OurServices serviceData={ourServices} />} />
          <Route path="/news" element={<News />} />
          <Route path="/becomeatutor" element={<BecomeATutor />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/bookanappointment" element={<BookAnAppointment />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/addnews" element={<AddNews />} />
          <Route path ="/resetpassword/:resetPasswordId" element = {<ResetPasswordForm/>}/>
          <Route path="*" element={<ErrorPage />} />  {/* Render error page if path does not match */}
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
    </ServerProvider>
  );
}

export default App;
