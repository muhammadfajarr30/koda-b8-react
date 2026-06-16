import React from "react";
import MainLayout from "./MainLayout";
import { Outlet } from "react-router-dom";
import Navbar from "/src/components/Navbar";
import Footer from "/src/components/Footer";

const CheckoutLayout = () => {
  return (
    <>
      <Navbar />
      <div className="my-4">
        <div>
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-semibold">
                1
              </div>
              <span className="mt-2 text-sm font-medium text-blue-600">
                Pengiriman
              </span>
            </div>
            <div className="mx-4 h-0.5 w-20 bg-gray-300"></div>
            <div className="flex flex-col items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-300 bg-white text-gray-500 font-semibold">
                2
              </div>
              <span className="mt-2 text-sm text-gray-500">Pembayaran</span>
            </div>
            <div className="mx-4 h-0.5 w-20 bg-gray-300"></div>
            <div className="flex flex-col items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-300 bg-white text-gray-500 font-semibold">
                3
              </div>
              <span className="mt-2 text-sm text-gray-500">Konfirmasi</span>
            </div>
          </div>
        </div>
        <div className="flex max-w-7xl mx-auto gap-6">
          <div className=" flex-1">
            <Outlet />
          </div>
          <div className=" min-w-1/4 border h-fit border-gray-500 rounded-xl flex gap-4">
            <section className="order-summary p-4">
              <div className="container-order flex flex-col gap-3">
                <div className="heading">
                  <h3 className="text-lg font-semibold">Ringkasan Pesanan</h3>
                </div>
                <div className="order-count flex  justify-between items-center">
                  <div className="w-10 h-10 rounded-lg overflow-hidden">
                    <img src="/images/headphone.png" alt="" />
                  </div>
                  <p>Headphone Wireless Premium</p>
                  <span>x1</span>
                </div>
                <hr />
                <div className="summary-row flex justify-between">
                  <span>Subtotal</span>
                  <span>Rp 450.000</span>
                </div>
                <hr />
                <div className="summary-row flex justify-between">
                  <span>Ongkir</span>
                  <span>Gratis</span>
                </div>
                <div className="summary-row flex justify-between">
                  <span>Total</span>
                  <span>Rp.450.000</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CheckoutLayout;
