import React from "react";
import Login from "./components/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Doctor from "./components/Doctor/Doctor";
import DoctorDetails from "./components/Doctor/DoctorDetails";
import DoctorFrom from "./components/Doctor/DoctorForm";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/doctordetailsid" element={<DoctorDetails />} />
          <Route path="/doctorform" element={<DoctorFrom />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
