import { ChevronRight, Heart, RefreshCcw, Shield, Truck } from "lucide-react";
import React from "react";
import ProductCard from "../../components/ProductCard";
import { useNavigate, useParams } from "react-router-dom";
// import  products  from "../../data/products";
import useFetch from "../../hooks/useFetch";
import { formatRupiah } from "../../helpers/format";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
const relatedProduct = [
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
];

const DetailPage = () => {
  const { id } = useParams();
  const { account, setAccount, users, setUsers } = useAuth();
  const navigate = useNavigate();
  const { data: products, loading, error } = useFetch("/data/products.json");

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  console.log(account)
  const product = products.find((e) => e.id === id);
  const handleAddToCart = () => {
    if (!account) {
      alert("silakan login terlebih dahulu")
      navigate("/login")
      return 
    }
    const updatedAccount = {
      ...account,
      cart: [...(account.cart || []), product],
    };
    
    setAccount(updatedAccount);
    // const updatedUsers = users.map((user) =>
    //   user.email === account.email ? updatedAccount : user
    // );
    
    // setUsers(updatedUsers);
  };

  return (
    <>
      <div className="bg-[#f8f9fb]">
        <nav className="flex items-center breadcrumb">
          <a href="">Beranda</a>
          <ChevronRight size={20} />

          <a href="">Toko</a>
          <ChevronRight size={20} />
          <a href="">Electronics</a>
          <ChevronRight size={20} />
          <a href="">{product.brand}</a>
        </nav>
        <div className="flex flex-col gap-9">
          <div className=" product-container flex justify-center gap-6 px-56">
            <div className="product-view flex-1 max-w-xl">
              <img
                className="w-full h-auto rounded-2xl"
                src={`/images/${product.thumbnail}.png`}
                alt={product.brand}
              />
              <div className="product-thumbnail flex gap-4 mt-4">
                <img
                  className="w-20 h-20 object-cover rounded-lg border"
                  src={`/images/${product.thumbnail}.png`}
                  alt={product.brand}
                />

                <img
                  className="w-20 h-20 object-cover rounded-lg border"
                  src={`/images/${product.thumbnail}.png`}
                  alt={product.brand}
                />
              </div>
            </div>
            <div className="product-info flex-1 max-w-xl flex flex-col gap-5">
              <div className="brand-item">
                <p className="text-gray-500">{product.storeName}</p>
              </div>
              <div>
                <h2 className="font-bold text-2xl">{product.brand}</h2>
              </div>
              <div className="rating flex items-center gap-2">
                <img src="/images/five-star.png" alt="" />
                <span className="text-gray-500">
                  {product.rating}
                  {product.stocks}
                </span>
                <span className="text-green-500 bg-green-50 rounded-full p-0.5">
                  ✓ Stok tersedia {product.stocks}
                </span>
              </div>
              <div className="price-container bg-blue-50 flex-col p-4 rounded-xl">
                <div className="price-tag flex items-center gap-3">
                  <h2 className="font-bold text-blue-500 text-2xl ">
                    {formatRupiah(product.salePrice ?? product.regularPrice)}
                  </h2>
                  <p className="text-gray-500 line-through">
                    {formatRupiah(product.regularPrice)}
                  </p>
                  <span className="text-white bg-red-600 rounded-full text-xs p-1">
                    Hemat 31%
                  </span>
                </div>
                <div className="hemat">
                  <p className="text-green-500">Kamu hemat Rp 200.000</p>
                </div>
              </div>
              <div className="product-color">
                <p>Warna: </p>
                <div className="color-btn flex gap-1.5">
                  <label>
                    <input
                      type="radio"
                      name="color"
                      value="Hitam"
                      className="peer hidden"
                    />

                    <span className="block cursor-pointer rounded-lg border border-gray-300 p-1 transition peer-checked:border-blue-500 peer-checked:text-blue-500">
                      Hitam
                    </span>
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="color"
                      value="Putih"
                      className="peer hidden"
                    />

                    <span className="block cursor-pointer rounded-lg border border-gray-300 p-1 transition peer-checked:border-blue-500 peer-checked:text-blue-500">
                      Putih
                    </span>
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="color"
                      value="Biru"
                      className="peer hidden"
                    />

                    <span className="block cursor-pointer rounded-lg border border-gray-300 p-1 transition peer-checked:border-blue-500 peer-checked:text-blue-500">
                      Biru
                    </span>
                  </label>
                </div>
              </div>
              <div className="stock">
                <p>Jumlah</p>
                <div className="counter-btn flex gap-4 items-center">
                  <div className="border border-gray-400 max-w-min flex rounded-lg px-6 py-0.5 gap-4">
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                  </div>
                  <p className="text-gray-500">stok: {product.stocks}pcs</p>
                </div>
              </div>
              <div className="buyout flex w-full gap-2">
                <button
                  onClick={handleAddToCart}
                  className="add-to-cart p-3 w-full text-white rounded-2xl bg-orange-500">
                  <img src="images/cart-orange.svg" alt="" /> Tambahkan Ke
                  Keranjang
                </button>
                <button
                  type="button"
                  onClick={() => navigate("/checkout/address")}
                  className="checkout p-3 w-full rounded-2xl border border-orange-500 text-orange-500">
                  Beli Sekarang
                </button>
                <button className="favorite border-gray-300 border p-2 rounded-lg">
                  <Heart color="#6B7280" />
                </button>
              </div>
              <div className="shop-feature flex gap-2 justify-center ">
                <div className="feature flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2">
                  <Truck size={20} color="#1A73E8" />
                  <p className="text-center">Gratis Ongkir</p>
                  <p className="text-center">Min.Rp 100.000</p>
                </div>
                <div className="feature flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2">
                  <Shield size={20} color="#1A73E8" />
                  <p className="text-center">Pembayaran</p>
                  <p className="text-center">SSL Terenskripsi</p>
                </div>
                <div className="feature flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2">
                  <RefreshCcw size={20} color="#1A73E8" />
                  <p className="text-center">Retur 30 Hari</p>
                  <p className="text-center">Gratis Retur</p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-56">
            <div className="rounded-lg border bg-white border-gray-200 overflow-hidden">
              <div className="flex border-b border-gray-200">
                <button className="px-6 py-4 text-sm font-medium text-blue-500 border-b-2 border-blue-500">
                  Deskripsi
                </button>

                <button className="px-6 py-4 text-sm font-medium text-gray-500 hover:text-gray-700">
                  Spesifikasi
                </button>

                <button className="px-6 py-4 text-sm font-medium text-gray-500 hover:text-gray-700">
                  Ulasan (2)
                </button>
              </div>

              <div className="p-6">
                <p className="text-gray-500 leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          </div>
          <div className="px-56 mb-2.5">
            <div className="grid grid-cols-4 gap-4 bg-white">
              {relatedProduct.map((e, i) => (
                <ProductCard
                  key={e.thumbnail}
                  idx={i + 1}
                  salePrice={e.salePrice}
                  thumbnail={e.thumbnail}
                  regularPrice={e.regularPrice}
                  rating={e.rating}
                  brand={e.brand}
                  stocks={e.rating}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
