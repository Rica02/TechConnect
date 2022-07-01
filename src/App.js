import logo from "./logo.svg";
import "./App.css";
//import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import OurServices from "./pages/OurServices";
import News from "./components/News";
import BecomeATutor from "./components/BecomeATutor";
import ContactUs from "./components/ContactUs";
import ErrorPage from "./components/ErrorPage";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/ThemeColors.js";
import Signin from "./components/Signin";
import Footer from "./components/Footer";

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
          <Route path="/signin" element={<Signin/>} />
          <Route path="*" element={<ErrorPage />} />        {/* Render error page if path does not match */}
        </Routes>
        <Footer/>
      </Router>
    </ThemeProvider>

  );
}

export default App;
