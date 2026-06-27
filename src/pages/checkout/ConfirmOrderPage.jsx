import { Lock, Shield } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatRupiah } from "../../helpers/format";
import { clearUserCart } from "../../redux/reducer/userSlice";

const ConfirmOrderPage = () => {
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, shipmentDetails, paymentMethod } = useSelector(
    (state) => state.order,
  );

  const { name, phone, address, city, province, zip, shipping } =
    shipmentDetails;

  const handleConfirm = () => {
    dispatch(clearUserCart({ userIndex: user.id }));
    navigate("/checkout-success");
  };

  return (
    <section className="confirm-order bg-white border border-gray-300 rounded-xl p-4">
      <div className="container flex flex-col gap-4">
        <div className="heading">
          <h3 className="text-xl font-semibold">Konfirmasi Pesanan</h3>
        </div>
        <div className="address-card p-4 bg-gray-100 rounded-xl">
          <p>Alamat Pengiriman</p>
          <p>
            {name} · {phone}
          </p>
          <p>
            {address} {city} {province} {zip}
          </p>
        </div>
        <div className="shipping-info p-4 bg-gray-100 rounded-xl">
          <p>Metode Pengiriman</p>
          <p>{shipping} · 3-5 hari kerja</p>
        </div>
        <div className="ordered-products p-4 bg-gray-100 rounded-xl">
          <p>Produk yang Dipesan</p>

          <div className="product-list">
            {items?.map((item, idx) => (
              <div className="product-item flex justify-between">
                <div className="product-detail flex gap-2 items-center">
                  <div className="w-10 rounded-lg overflow-hidden">
                    <img src={`/images/${item.thumbnail}.png`} alt="" />
                  </div>

                  <div className="product-info">
                    <p>{item.brand}</p>
                    <p>1x</p>
                  </div>
                </div>

                <p className="product-price">{formatRupiah(item.salePrice)}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="payment-notice flex items-center gap-2 bg-blue-100 rounded-xl p-4 text-gray-500">
          <Shield color="#17A" />
          <p>
            Dengan menekan "Bayar Sekarang", kamu menyetujui Syarat & Ketentuan
            kami. Pembayaran baru akan diproses setelah kamu mengonfirmasi di
            langkah ini.
          </p>
        </div>
        <div className="return-payment flex gap-2">
          <button
            onClick={() => navigate(-1)}
            className="btn-return border border-gray-300 p-4 rounded-xl">
            Kembali
          </button>
          <button
            onClick={handleConfirm}
            className="btn-payment w-full flex gap-2 justify-center bg-orange-500 text-white p-4 rounded-xl">
            <Lock size={20} />
            <p>Bayar Sekarang</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ConfirmOrderPage;
