import React from "react";
import MainLayout from "./MainLayout";
import { Outlet } from "react-router-dom";
import Navbar from "../components/main/Navbar";
import Footer from "../components/main/Footer";
import CheckoutStep from "../components/checkout/CheckoutStep";
import OrderSummary from "../components/checkout/OrderSummary";

const CheckoutLayout = () => {
  return (
    <>
      <Navbar />
      <div className="py-6 bg-gray-100">
        <div className="py-4">
          <CheckoutStep />
        </div>
        <div className="flex max-w-7xl mx-auto gap-6">
          <div className=" flex-1">
            <Outlet />
          </div>
          <div className=" min-w-1/4  h-fit flex gap-4">
            <OrderSummary />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CheckoutLayout;
