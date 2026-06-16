import React from "react";
import Navbar from "/src/components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "/src/components/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />  
      <Footer />
    </>
  );
};

export default MainLayout;
