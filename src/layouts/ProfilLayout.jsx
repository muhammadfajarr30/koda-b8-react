import React from "react";
import Navbar from "../components/main/Navbar";
import Footer from "../components/main/Footer";
import { Outlet, useNavigate } from "react-router-dom";
import ProfileSideBar from "../components/profile/ProfileSideBar";

const ProfilLayout = () => {
  return (
    <>
      <Navbar />
      <div className="flex gap-6 bg-[#f8f9fb] max-w-7xl mx-auto py-10">
        <ProfileSideBar/>
        <div className="flex-1 bg-[#f8f9fb]">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfilLayout;
