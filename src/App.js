import React from "react";
import Layout from "./components/Pages/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import Contact from "./components/Pages/Contact";
import LoginReg from "./components/Pages/auth/LoginReg";
import SendPasswordResetEmail from "./components/Pages/auth/SendPasswordResetEmail";
import ResetPassword from "./components/Pages/auth/ResetPassword";
import Dashboard  from "./components/Pages/Dashboard";
import About from "./components/Pages/About";
import Courses from "./components/Pages/Courses";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="courses" element={<Courses />} />
        <Route path="login" element={<LoginReg />} />
        <Route path="sendpasswordresetemail" element={<SendPasswordResetEmail />} />
        <Route path="reset-password/:token" element={<ResetPassword />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<h1>Error Page 404 not Found!!</h1>} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
