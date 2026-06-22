import { ArrowRight, Truck } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const AddressPage = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/checkout/payment");
  };

  return (
    <div>
      <section className="form-checkout p-4 border bg-white border-gray-500 rounded-xl">
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="title flex items-center gap-2">
            <Truck size={24} color="#1A73E8" />

            <h3 className="text-xl font-semibold">Alamat pengiriman</h3>
          </div>
          <div className="input-group phone-name flex gap-2 justify-between">
            <div className="name flex flex-col w-full ">
              <label htmlFor="name">Nama Penerima *</label>
              <input
                className="p-3 bg-gray-200 border border-gray-500 rounded-xl"
                type="text"
                name=""
                id="name"
                placeholder="Budi Santoso"
              />
            </div>
            <div className="phone flex flex-col w-full">
              <label htmlFor="phone">Nomor Telepon *</label>
              <input
                className="p-3 bg-gray-200 border border-gray-500 rounded-xl"
                type="tel"
                id="phone"
                placeholder="0812-3456-7890"
              />
            </div>
          </div>
          <div className="input-group w-full flex flex-col ">
            <label htmlFor="email">Email *</label>
            <input
              className="p-3 bg-gray-200 border border-gray-500 rounded-xl"
              type="text"
              id="email"
              placeholder="budi@gmail.com"
            />
          </div>
          <div className="input-group flex flex-col">
            <label htmlFor="address">Alamat Lengkap *</label>
            <input
              className="p-3 bg-gray-200 border border-gray-500 rounded-xl"
              type="text"
              id="address"
              placeholder="Jl. Kebon Jeruk No. 15"
            />
          </div>
          <div className="input-group city-province flex gap-2 justify-between">
            <div className="city w-full flex flex-col">
              <label htmlFor="city">Kota *</label>
              <input
                className=" p-3 bg-gray-200 border border-gray-500 rounded-xl "
                type="text"
                id="city"
                placeholder="Jakarta Barat"
              />
            </div>
            <div className="province w-full flex flex-col">
              <label htmlFor="province">Province *</label>
              <input
                className=" p-3 bg-gray-200 border border-gray-500 rounded-xl "
                type="text"
                id="province"
                placeholder="DKI Jakarta"
              />
            </div>
          </div>
          <div className="input-group zip-note flex gap-2">
            <div className="zip w-full flex flex-col">
              <label htmlFor="zip">Kode Pos *</label>
              <input
                className=" p-3 bg-gray-200 border border-gray-500 rounded-xl "
                type="number"
                id="zip"
                placeholder="11520"
              />
            </div>
            <div className="note w-full flex flex-col">
              <label htmlFor="notes">Catatan (opsional)</label>
              <input
                className=" p-3 bg-gray-200 border border-gray-500 rounded-xl"
                type="text"
                id="notes"
                placeholder="warna pagar, dll."
              />
            </div>
          </div>
          <div className="shipping-method flex border border-gray-500  rounded-xl p-3">
            <input type="radio" name="shipping" id="reguler" />
            <div className="flex justify-between w-full items-center">
              <label htmlFor="reguler" className=" shipping-card">
                <div className="shipping-name">
                  <h4>JNE Reguler</h4>
                  <p>3-5 hari kerja</p>
                </div>
              </label>
              <span>GRATIS</span>
            </div>
          </div>
          <div className="shipping-method flex  border border-gray-500  rounded-xl  p-3">
            <input type="radio" name="shipping" id="reguler" />
            <div className="flex justify-between w-full items-center">
              <label htmlFor="reguler" className=" shipping-card">
                <div className="shipping-name">
                  <h4>JNE Express</h4>
                  <p>1-2 hari kerja</p>
                </div>
              </label>
              <span>GRATIS</span>
            </div>
          </div>
          <div className="shipping-method flex border border-gray-500 p-3 rounded-xl">
            <input type="radio" name="shipping" id="reguler" />
            <div className="flex justify-between w-full items-center">
              <label htmlFor="reguler" className=" shipping-card">
                <div className="shipping-name">
                  <h4>Same Day Delivery</h4>
                  <p>Hari ini (sebelum 16.00)</p>
                </div>
              </label>
              <span>GRATIS</span>
            </div>
          </div>
          <button className="flex w-full items-center justify-center gap-1 rounded-xl bg-blue-500 p-3 text-white">
            Lanjut Ke Pembayaran
            <ArrowRight />
          </button>
        </form>
      </section>
    </div>
  );
};

export default AddressPage;
