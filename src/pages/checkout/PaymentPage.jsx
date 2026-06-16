import { CreditCard, Lock } from "lucide-react";
import React from "react";

const PaymentPage = () => {
  return (
    <div>
      <section className="payment-method bg-white p-4 rounded-xl border border-gray-300">
        <div className="container flex flex-col gap-4">
          <div className=" flex items-center gap-3 title">
            <CreditCard color="#1A73E8" />
            <h3 className="font-semibold text-2xl">Metode Pembayaran</h3>
          </div>
          <div className="payment-choice grid grid-cols-3 gap-4">
            <div className="flex items-center justify-center gap-3 border p-3 rounded-xl border-gray-300">
              <input type="radio" name="payment" id="bca" />
              <label htmlFor="bca" className="payment-card">
                <img src="" alt="" />
                <span>Virtual Account BCA</span>
              </label>
            </div>
            <div className="flex items-center justify-center gap-3 border p-3 rounded-xl border-gray-300">
              <input type="radio" name="payment" id="bni" />
              <label htmlFor="bni" className="payment-card">
                <img src="" alt="" />
                <span>Virtual Account BNI</span>
              </label>
            </div>
            <div className="flex items-center justify-center gap-3 border p-3 rounded-xl border-gray-300">
              <input type="radio" name="payment" id="credit-card" />
              <label htmlFor="credit-card" className="payment-card">
                <img src="" alt="" />
                <span>Kartu Kredit / Debit</span>
              </label>
            </div>
            <div className="flex items-center justify-center gap-3 border p-3 rounded-xl border-gray-300">
              <input type="radio" name="payment" id="gopay" />
              <label htmlFor="gopay" className="payment-card">
                <img src="" alt="" />
                <span>Gopay</span>
              </label>
            </div>
            <div className="flex items-center justify-center gap-3 border p-3 rounded-xl border-gray-300">
              <input type="radio" name="payment" id="ovo" />
              <label htmlFor="ovo" className="payment-card">
                <img src="" alt="" />
                <span>Ovo</span>
              </label>
            </div>
            <div className="flex items-center justify-center gap-3 border p-3 rounded-xl border-gray-300">
              <input type="radio" name="payment" id="dana" />
              <label htmlFor="dana" className="payment-card">
                <img src="" alt="" />
                <span>Dana</span>
              </label>
            </div>
          </div>

          <div className="security-info bg-blue-100 p-3 rounded-xl text-gray-500 flex gap-2 items-center justify-center">
            <Lock color="#1A73E8" size={20} />
            <p>
              Informasi pembayaranmu dienkripsi dengan SSL 256-bit. Kami tidak
              menyimpan data kartu kreditmu.
            </p>
          </div>
        <div className="return-confirm flex gap-2">
          <button className="btn-return p-3 border border-gray-300 rounded-xl  text-gray-500">Kembali</button>
          <button className="btn-confirm p-3 w-full bg-blue-500  rounded-xl text-white">Lanjut Ke Konfirmasi</button>
        </div>
        </div>
      </section>
    </div>
  );
};

export default PaymentPage;
