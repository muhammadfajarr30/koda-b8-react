import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/main/Navbar";
import Footer from "../components/main/Footer";

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
