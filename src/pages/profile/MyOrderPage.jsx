import { CheckCircle, Star, Truck } from "lucide-react";
import React from "react";

const MyOrderPage = () => {
  return (
    <>
      <section className="order-status-info d-flex flex-column gap-6">
        <h2 className="font-semibold text-2xl">Pesanan Saya</h2>
        <div className="flex flex-col gap-4">
          <div className="order-shipped bg-white border border-gray-300 rounded-xl p-4 flex flex-col gap-4">
            <div className="order-info flex justify-between">
              <div className="order-tag">
                <h4>#BM98765432</h4>
                <p className="text-gray-500">20 Mei 2026</p>
              </div>
              <div className="order-status">
                <p className="flex gap-1 text-green-500 bg-green-100 p-1 rounded-xl items-center">
                  <CheckCircle size={20} />
                  Terkirim
                </p>
              </div>
            </div>
            <div className="product-detail flex items-center gap-2">
              <div className="w-12 rounded-xl overflow-hidden">
                <img src="/images/headphone.png" alt="" />
              </div>
              <div>
                <p>Headphone Wireless Premum</p>
                <span>x1</span>
                <span>Rp. 450.000</span>
              </div>
            </div>
            <div className="action flex justify-between border-t border-gray-300">
              <div>
                <span>Total: </span>
                <span>Rp. 450.000</span>
              </div>
              <div className="flex gap-2">
                <button className="btn-action track border border-blue-500 text-blue-500 px-3 py-1.5 rounded-lg">
                  Lacak
                </button>
                <button className=" text-white bg-orange-500 px-3 py-1.5 rounded-lg btn-action give-rating flex items-center gap-2">
                  <Star size={16} />
                  Beri Ulasan
                </button>
                <button className="btn-action buy-more border border-gray-300 px-3 py-1.5 rounded-lg">
                  Beli Lagi
                </button>
              </div>
            </div>
          </div>
          <div className="order-shipped bg-white border-gray-300 border rounded-xl p-4 flex flex-col gap-4">
            <div className="order-info flex justify-between">
              <div className="order-tag ">
                <h4>#BM87654321</h4>
                <p className="text-gray-500">26 Mei 2026</p>
              </div>
              <div className="order-status flex gap-1 bg-blue-50 text-blue-500 px-1 text-sm items-center rounded-full">
                <Truck />
                <p>Sedang dikirim</p>
              </div>
            </div>
            <div className="flex gap-4 flex-col">
              <div className="product-detail flex items-center gap-2">
                <div className="w-12 rounded-xl overflow-hidden">
                  <img src="/images/headphone.png" alt="" />
                </div>
                <div>
                  <p>Headphone Wireless Premum</p>
                  <span>x1</span>
                  <span>Rp. 450.000</span>
                </div>
              </div>
              <div className="product-detail flex items-center gap-2">
                <div className="w-12 rounded-xl overflow-hidden">
                  <img src="/images/headphone.png" alt="" />
                </div>
                <div>
                  <p>Headphone Wireless Premum</p>
                  <span>x1</span>
                  <span>Rp. 450.000</span>
                </div>
              </div>
            </div>
            <div className="border-t pt-2 border-gray-300 action flex items-center justify-between">
              <div>
                <span>Total: </span>
                <span>Rp. 450.000</span>
              </div>
              <div className="flex gap-2">
                <button className="btn-action track border border-blue-500 text-blue-500 px-3 py-1.5 rounded-lg">
                  Lacak
                </button>

                <button className="btn-action buy-more border border-gray-300 px-3 py-1.5 rounded-lg">
                  Beli Lagi
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyOrderPage;
