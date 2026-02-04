import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Toaster />
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/register" element={<Register />} />
          <Route path="/user-dashboard" element={<UserDashboard/>}/>
          <Route path="/rider-dashboard" element={<RiderDashboard/>}/>
          <Route path="/restaurant-dashboard" element={<RestaurantDashboard/>}/>
            <Route path="/admin-dashboard" element={<AdminDashboard/>}/> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;