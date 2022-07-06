import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import Signin from "./components/Signin";
import Footer from "./components/Footer";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import OurServices from "./components/OurServices";
import News from "./components/News";
import BecomeATutor from "./components/BecomeATutor";
import ContactUs from "./components/ContactUs";
import BookAnAppointment from "./components/BookAnAppointment";
import ErrorPage from "./components/ErrorPage";
import { theme } from "./styles/ThemeColors.js";

function App() {
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
