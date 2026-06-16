import { Lock, Shield } from "lucide-react";
import React from "react";

const ConfirmOrderPage = () => {
  return (
    <section class="confirm-order bg-white border border-gray-300 rounded-xl p-4">
      <div class="container flex flex-col gap-4">
        <div class="heading">
          <h3 className="text-xl font-semibold">Konfirmasi Pesanan</h3>
        </div>
        <div class="address-card p-4 bg-gray-100 rounded-xl">
          <p>Alamat Pengiriman</p>
          <p>Budi Santoso · 0812-3456-7890</p>
          <p>Jl. Kebon Jeruk No. 15, Jakarta Barat, DKI Jakarta 11530</p>
        </div>
        <div class="shipping-info p-4 bg-gray-100 rounded-xl">
          <p>Metode Pengiriman</p>
          <p>JNE Reguler · 3-5 hari kerja</p>
        </div>
        <div class="ordered-products p-4 bg-gray-100 rounded-xl">
          <p>Produk yang Dipesan</p>

          <div class="product-list">
            <div class="product-item flex justify-between">
              <div class="product-detail flex gap-2 items-center">
                <div className="w-10 rounded-lg overflow-hidden">
                <img src="/images/headphone.png" alt="" />
                </div>

                <div class="product-info">
                  <p>Headphone Wireless Premium</p>
                  <p>1x</p>
                </div>
              </div>

              <p class="product-price">Rp 450.000</p>
            </div>
          </div>
        </div>
      <div class="payment-notice flex items-center gap-2 bg-blue-100 rounded-xl p-4 text-gray-500">
        <Shield color="#17A"/>
        <p>
          Dengan menekan "Bayar Sekarang", kamu menyetujui Syarat & Ketentuan
          kami. Pembayaran baru akan diproses setelah kamu mengonfirmasi di
          langkah ini.
        </p>
      </div>
      <div class="return-payment flex gap-2">
        <button class="btn-return border border-gray-300 p-4 rounded-xl">Kembali</button>
        <button class="btn-payment w-full flex gap-2 justify-center bg-orange-500 text-white p-4 rounded-xl">
            <Lock size={20}/>
          <p>Bayar Sekarang</p>
        </button>
      </div>
      </div>
    </section>
  );
};

export default ConfirmOrderPage;
