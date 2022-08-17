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
import DashboardTest from "./pages/ZoomTest/DashboardTest";
import TeacherPage from "./pages/TeacherPage";
import { useState } from "react";
import { ServerProvider } from "./ServerContext";
import PrivateRoute from "./PrivateRoute";
import StudentPage from "./pages/StudentPage";
import Dashboard from "./pages/Dashboard";
import CreateMeeting from "./pages/CreateMeeting";
import BookLesson from "./pages/BookLesson/intex";
import ChangeAvailability from "./pages/ChangeAvailability/intex";
import AdminPage from "./pages/AdminPage";
import AccountDetails from "./pages/AccountDetails";

function App() {

  const [data, setData] = useState([])
  const [state, setState] = useState(false)

  return (
    // ThemeProvider provides colours
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
          <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
          <Route path="/createmeeting" element={<CreateMeeting />} />
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
