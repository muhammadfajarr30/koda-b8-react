import React from "react";
import { useAuth } from "../../context/AuthContext";
import { replace, useNavigate } from "react-router-dom";
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
import { useDispatch } from "react-redux";
import { logout } from "../../redux/reducer/authSlice";

const ProfileSideBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout);
    navigate("/login", { replace: true });
  };
  return (
    <div className=" gap-4 min-w-1/4 flex flex-col">
      <div className=" p-3 flex items-center flex-col justify-center bg-white border border-gray-200 rounded-xl gap-5">
        <div className="px-6 py-4 font-bold text-blue-500 bg-blue-100 rounded-full ">
          <p className="font-bold text-xl">B</p>
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <h1 className="font-bold text-xl">Budi Santoso</h1>
          <p>budi@mail.com</p>
        </div>
        <div className="flex items-center justify-center gap-8 border-t border-gray-300 w-full">
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
            <ChevronRight color="blue" />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center text-gray-500  gap-2">
              <Heart />
              <p>Wishlist</p>
            </div>
            <ChevronRight color="gray" />
          </div>

          <div className="flex items-center justify-between">
            <div className="text-gray-500  flex items-center gap-2">
              <MapPin />
              <p>Alamat Saya</p>
            </div>
            <ChevronRight color="gray" />
          </div>

          <div className="flex items-center justify-between">
            <div className=" text-gray-500 flex items-center gap-2">
              <CreditCard />
              <p>Metode Pembayaran</p>
            </div>
            <ChevronRight color="gray" />
          </div>

          <div className="flex items-center justify-between">
            <div className=" text-gray-500 flex items-center gap-2">
              <Settings />
              <p>Pengaturan Profil</p>
            </div>
            <ChevronRight color="gray" />
          </div>

          <div className="border-t border-gray-300 pt-4 ">
            <div className="flex items-center justify-between cursor-pointer">
              <div
                onClick={handleLogout}
                className="flex items-center gap-2 text-red-500 ">
                <LogOut />
                <p>Keluar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSideBar;
