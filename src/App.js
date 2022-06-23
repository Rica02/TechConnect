import logo from "./logo.svg";
import "./App.css";
//import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import OurServices from "./components/OurServices";
import News from "./components/News";
import BecomeATutor from "./components/BecomeATutor";
import ContactUs from "./components/ContactUs";
import ErrorPage from "./components/ErrorPage";


function App() {
  return (
    <Router>
      <Navbar />    {/* all pages will include navbar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/ourservices" element={<OurServices />} />
        <Route path="/news" element={<News />} />
        <Route path="/becomeatutor" element={<BecomeATutor />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="*" element={<ErrorPage />} />        {/* Render error page if path does not match */}
      </Routes>
    </Router>
  );
}

export default App;
