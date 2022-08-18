import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
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
import DashboardTest from "./pages/ZoomTest/DashboardTest";

function App() {

  const [data, setData] = useState([])
  const [state, setState] = useState(false)

  return (
    // ThemeProvider provides colours
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
          <Route path="/createmeeting" element={<PrivateRoute><CreateMeeting /></PrivateRoute>} />
          <Route path="/" element={<Home tutorData={data} />} />
          <Route path="/aboutus" element={<AboutUs tutorData={data} />} />
          <Route path="/ourservices" element={<OurServices />} />
          <Route path="/news" element={<News />} />
          <Route path="/becomeatutor" element={<BecomeATutor />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/bookanappointment" element={<BookAnAppointment />} />
          <Route path="/resetPassword" element={<ResetPassword/>} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/addnews" element={<AddNews />} />
          <Route path ="/resetpassword/:resetPasswordId" element = {<ResetPasswordForm/>}/>
          <Route path="*" element={<ErrorPage />} />  {/* Render error page if path does not match */}

          <Route path="/dashboardtest" element={<DashboardTest />} />   {/* TEST */}
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
    </ServerProvider>
  );
}

export default App;
