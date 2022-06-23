import logo from "./logo.svg";
import "./App.css";
//import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />    {/* all pages will include navbar */}
      <Routes>
        <Route path="/" />
        <Route path="/aboutus" />
        <Route path="/ourservices" />
        <Route path="/news" />
        <Route path="/becomeatutor" />
        <Route path="/contactus" />
      </Routes>
    </Router>
  );
}

export default App;
