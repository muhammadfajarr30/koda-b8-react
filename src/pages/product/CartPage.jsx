import React from "react";
import { Shield, Trash2, Tag, Heart } from "lucide-react";
import NewestProductCard from "../../components/NewestProductCard";

const CartPage = () => {
  const mayYouLike = [
    {
    thumbnail: "headphone",
    storeName: "soundwave",
    brand: "Headphone Wireless Premium",
    rating: 4.8,
    stocks: 512,
    salePrice: 4500000,
    regularPrice: 650000,
  },
  {
    thumbnail: "smartphone",
    storeName: "PhoneX",
    brand: "wristTech",
    rating: 4.8,
    stocks: 512,
    salePrice: 4200000,
    regularPrice: 5000000,
  },
  {
    thumbnail: "smartwatch",
    storeName: "wirstTch",
    brand: "SmartWatch series 5",
    rating: 4.8,
    stocks: 512,
    salePrice: 4500000,
    regularPrice: 650000,
  },
  {
    thumbnail: "sneakers",
    storeName: "SportPro",
    brand: "Sneakers Sport Runfast",
    rating: 4.8,
    stocks: 512,
    salePrice: 4500000,
    regularPrice: 650000,
  },
  ]
  return (
    <div className="flex flex-col gap-9 px-56 bg-gray-50">
      <div><h1 className="font-semibold text-2xl">Keranjang Belanja (1 item)</h1></div>
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <div className="flex flex-col gap-4 sm:flex-row">
              {/* Product Image */}
              <div className="h-24 w-24 flex-shrink: 0 overflow-hidden rounded-xl">
                <img
                  src="/images/headphone.png"
                  alt="Headphone Wireless Premium"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="font-semibold text-gray-900">
                      Headphone Wireless Premium
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">
                      Hitam
                    </p>
                  </div>
                  <button className="text-gray-400 transition hover:text-red-500">
                    <Trash2 size={18} />
                  </button>
                </div>
                <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex w-fit items-center rounded-lg border border-gray-300">
                    <button className="px-3 py-2 text-gray-600 hover:bg-gray-100">
                      -
                    </button>
                    <span className="px-4 py-2">1</span>
                    <button className="px-3 py-2 text-gray-600 hover:bg-gray-100">
                      +
                    </button>
                  </div>
                  <span className="text-xl font-medium text-blue-600">
                    Rp 450.000
                  </span>
                </div>
                <button className="mt-4 flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600">
                  <Heart size={16} />
                  <span>Simpan ke Wishlist</span>
                </button>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <div className="mb-4 flex items-center gap-2">
              <Tag size={18} className="text-blue-600" />
              <h2 className="text-2xl font-semibold text-gray-900">
                Kode Promo
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="text"
                placeholder="Masukkan kode promo"
                className="flex-1 rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"
              />
              <button className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700">
                Terapkan
              </button>
            </div>
            <p className="mt-3 text-sm text-gray-500">
              Coba: HEMAT10, BELIMUDAH, atau NEWUSER
            </p>
          </div>
        </div>
        <div className="h-fit rounded-2xl border border-gray-200 bg-white p-6">
          <h2 className="text-2xl font-semibold text-gray-900">
            Ringkasan Pesanan
          </h2>
          <div className="mt-6 space-y-4">
            <div className="flex justify-between text-gray-500">
              <span>Subtotal (1 item)</span>
              <span>Rp 450.000</span>
            </div>
            <div className="flex justify-between text-gray-500">
              <span>Ongkos Kirim</span>
              <span className="font-medium text-green-600">
                GRATIS
              </span>
            </div>
            <hr className="border-gray-200" />
            <div className="flex justify-between text-lg font-semibold">
              <span>Total</span>
              <span className="text-blue-600">
                Rp 450.000
              </span>
            </div>
          </div>
          <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 py-4 font-medium text-white transition hover:bg-orange-600">
            <Shield size={18} />
            Checkout Aman
          </button>
          <div className="mt-4 text-center text-sm text-gray-500">
            🔒 Pembayaran 100% Aman
          </div>
          <div className="mt-2 text-center text-sm text-gray-500">
            Metode: Transfer Bank · Virtual Account ·
            Kartu Kredit · e-Wallet
          </div>
        </div>
      </div>
    </div>
        <div>
      <h1 className="font-semibold text-2xl">Mungikin Kamu Suka</h1>
    </div>
    <div className="grid grid-cols-4 gap-4 mb-9">

    {mayYouLike.map((e,i)=>(
      <NewestProductCard
      thumbnail={e.thumbnail}
      rating={e.rating}
      salePricerice={e.salePrice}
      brand={e.brand}
      stocks={e.stocks}
      regularPrice={e.regularPrice}
      idx = {i +1}
      key={e.thumbnail}
      />
    ))}
    </div>
    </div>
  );
};

export default CartPage