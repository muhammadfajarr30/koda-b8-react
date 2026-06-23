import React from "react";
import Navbar from "/src/components/Navbar";
import Footer from "/src/components/Footer";
import { Outlet, useNavigate } from "react-router-dom";
import {
  ChevronRight,
  CreditCard,
  Heart,
  Locate,
  LocateIcon,
  LogOut,
  MapPin,
  PinIcon,
  Settings,
  ShoppingBag,
} from "lucide-react";

import { useAuth } from "../context/AuthContext";
const ProfilLayout = () => {
  const navigate = useNavigate();
  const {user, logout} = useAuth()
  const handleLogout = ()=> {
    logout()
    navigate("/login")
  }
  return (
    <>
      <Navbar />
      <div className="flex gap-6 bg-[#f8f9fb] max-w-7xl mx-auto py-10">
        <div className=" gap-2 min-w-1/4 flex flex-col ">
          <div className=" p-4 flex items-center flex-col justify-center bg-white border border-gray-200 rounded-xl">
            <div className="px-6 py-4 font-bold text-blue-500 bg-blue-100 rounded-full ">
              <p className="font-bold text-xl">B</p>
            </div>
            <div className="w-full flex flex-col items-center justify-center">
              <h1 className="font-bold text-xl">Budi Santoso</h1>
              <p>budi@mail.com</p>
            </div>
            <div className="flex items-center justify-center gap-8 border-t w-full">
              <div className="text-center">
                <p className="font-bold text-lg">2</p>
                <p>Pesanan</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-lg">0</p>
                <p>Wishlist</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl">
            <div className="p-4 flex flex-col gap-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShoppingBag />
                  <p>Pesanan Saya</p>
                </div>
                <ChevronRight color="blue"/>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center text-gray-500  gap-2">
                  <Heart />
                  <p>Wishlist</p>
                </div>
                <ChevronRight color="gray"/>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-gray-500  flex items-center gap-2">
                  <MapPin />
                  <p>Alamat Saya</p>
                </div>
                <ChevronRight color="gray"/>
              </div>

              <div className="flex items-center justify-between">
                <div className=" text-gray-500 flex items-center gap-2">
                  <CreditCard />
                  <p>Metode Pembayaran</p>
                </div>
                <ChevronRight color="gray"/>
              </div>

              <div className="flex items-center justify-between">
                <div className=" text-gray-500 flex items-center gap-2">
                  <Settings />
                  <p>Pengaturan Profil</p>
                </div>
                <ChevronRight color="gray"/>
              </div>

              <div className="border-t border-gray-300 pt-4 ">
                <div className="flex items-center justify-between">
                  <div onClick={handleLogout} className="flex items-center gap-2 text-red-500">
                    <LogOut />
                    <p>Keluar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-[#f8f9fb]">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfilLayout;
