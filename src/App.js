import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./pages/ThemeColors";
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
import Signup from "./pages/Signin/Signup";
import ForgotPassword from "./pages/Signin/ForgotPassword";
import AddNews from "./pages/AddNews";
import Dashboard from "./pages/PrivatePages/Dashboard";
import TeacherPage from "./pages/TeacherPage";
import { useState } from "react";
import { ServerProvider } from "./ServerContext";
import PrivateRoute from "./PrivateRoute";
import StudentPage from "./pages/StudentPage";
import Dashborad from "./pages/Dashborad";
import Admin from "./pages/PrivatePages/Admin";
import MeetingCreated from "./pages/PrivatePages/MeetingCreated";
import BookLesson from "./pages/BookLesson/intex";
import ChangeAvailability from "./pages/ChangeAvailability/intex";

function App() {

  const [data, setData] = useState([])
  const [state, setState] = useState(false)

  return (
    // ThemeProvider wraps around the whole app as it provides colours
    <ServerProvider>
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/teacherpage" element={<PrivateRoute><TeacherPage/></PrivateRoute>} />
          <Route path="/studentPage" element={<PrivateRoute><StudentPage/></PrivateRoute>} />
          <Route path="/adminPage" element={<PrivateRoute><AdminPage/></PrivateRoute>} />
          <Route path="/accountDetails" element={<PrivateRoute><AccountDetails/></PrivateRoute>} />
          <Route path="/booklesson" element={<PrivateRoute><BookLesson/></PrivateRoute>} />
          <Route path="/changeavailability" element={<PrivateRoute><ChangeAvailability/></PrivateRoute>} />
          <Route path="/addNews" element={<PrivateRoute><AddNews/></PrivateRoute>} />
          <Route path="/dashborad" element={<PrivateRoute><Dashborad/></PrivateRoute>} />
          <Route path="/" element={<Home tutorData={data} />} />
          <Route path="/aboutus" element={<AboutUs tutorData={data} />} />
          <Route path="/ourservices" element={<OurServices />} />
          <Route path="/news" element={<News />} />
          <Route path="/becomeatutor" element={<BecomeATutor />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/bookanappointment" element={<BookAnAppointment />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/addnews" element={<AddNews />} />
          <Route path="*" element={<ErrorPage />} /> {/* Render error page if path does not match */}
          <Route path="/login" element={<Dashboard />} />
          <Route path="/admintest" element={<Admin />} />   {/* TEST */}
          <Route path="/oauthredirect" element={<MeetingCreated />} />   {/* TEST */}
        </Routes>
        <Footer /> {/* all pages will include footer */}
      </Router>
    </ThemeProvider>
    </ServerProvider>
  );
}

export default App;
