import { ChevronRight } from "lucide-react";
import React from "react";
import BrowseProductCard from "../../components/BrowseProductCard";

const browseProductItems = [
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

  {
    thumbnail: "coffe-maker",
    storeName: "Brewmaster",
    brand: "Coffe Maker Otomatis",
    rating: 4.8,
    stocks: 512,
    salePrice: 4500000,
    regularPrice: 650000,
  },

  {
    thumbnail: "dress",
    storeName: "FashionID",
    brand: "Dress Floral Midi",
    rating: "4.5",
    stocks: 312,
    price: 295000,
    salePrice: 4500000,
    regularPrice: 650000,
  },
  {
    thumbnail: "dress",
    storeName: "FashionID",
    brand: "Dress Floral Midi",
    rating: "4.5",
    stocks: 312,
    price: 295000,
    salePrice: 4500000,
    regularPrice: 650000,
  },
  {
    thumbnail: "dress",
    storeName: "FashionID",
    brand: "Dress Floral Midi",
    rating: "4.5",
    stocks: 312,
    price: 295000,
    salePrice: 4500000,
    regularPrice: 650000,
  },
  {
    thumbnail: "dress",
    storeName: "FashionID",
    brand: "Dress Floral Midi",
    rating: "4.5",
    stocks: 312,
    price: 295000,
    salePrice: 4500000,
    regularPrice: 650000,
  },
  {
    thumbnail: "dress",
    storeName: "FashionID",
    brand: "Dress Floral Midi",
    rating: "4.5",
    stocks: 312,
    price: 295000,
    salePrice: 4500000,
    regularPrice: 650000,
  },
  {
    thumbnail: "dress",
    storeName: "FashionID",
    brand: "Dress Floral Midi",
    rating: "4.5",
    stocks: 312,
    price: 295000,
    salePrice: 4500000,
    regularPrice: 650000,
  },
  {
    thumbnail: "dress",
    storeName: "FashionID",
    brand: "Dress Floral Midi",
    rating: "4.5",
    stocks: 312,
    price: 295000,
    salePrice: 4500000,
    regularPrice: 650000,
  },
];

const BrowsePage = () => {
  return (
    <>
      <main className="relative bg-gray-100">
        <button className="floating-bubble-chat right-0 bg-blue">
          <img src="images/bubble-chat.svg" alt="" />
        </button>
        <section className="px-50">
          <div className="breadcrumb flex items-center gap-2">
            <a href="">Beranda</a>
            <ChevronRight size={20} />
            <a href="">Toko</a>
          </div>
          <h2 className="text-2xl font-bold my-5">Semua Produk</h2>
          <div className="product-table grid grid-cols-[minmax(256px,_20vw)_1fr] gap-12">
            <aside className="cell-sidebar flex flex-col gap-6">
              <div className="price-filter">
                <h3>Harga</h3>
                <div className="flex items-center justify-between">
                  <input type="text" name="" id="" defaultValue={0} />
                  <input type="text" name="" id="" defaultValue={200000} />
                </div>
              </div>
              <div className="merk-filter filter">
                <h3>Merek</h3>
                <div>
                  <input type="checkbox" name="tech-master" id="tech-master" />
                  <label for="tech-master">TechMaster</label>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <label for="">SoundWave</label>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <label for="">PhoneX</label>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <label for="">Opticam</label>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <label for="">FashionID</label>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <label for="">SportPro</label>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <label for="">BrewMaster</label>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <label for="">GlowLab</label>
                </div>
              </div>
              <div className="rating-filter filter">
                <h3>Rating Minimum</h3>
                <div>
                  <input type="radio" name="rating" id="4-star" />
                  <label for="4-star">★★★★☆ ke atas</label>
                </div>
                <div>
                  <input type="radio" name="rating" id="3-star" />
                  <label for="3-star">★★★☆☆ ke atas</label>
                </div>
                <div>
                  <input type="radio" name="rating" id="2-star" />
                  <label for="2-star">★★☆☆☆ ke atas</label>
                </div>
              </div>
              <div className="availablity-filter filter">
                <h3>Ketersediaan</h3>
                <div>
                  <input type="checkbox" id="available" />
                  <label for="available">Stok Tersedia</label>
                </div>
              </div>
            </aside>

            <section className="cell-content">
              <div className="flex items-center justify-between">
                <span>18 produk ditemukan</span>
                <div className="d-flex items-center gap-2">
                  <label for="category">Urutkan:</label>
                  <select name="category" id="category">
                    <option value="populer">Paling Populer</option>
                    <option value="cheapest">Termurah</option>
                    <option value="expensive">Termahal</option>
                    <option value="audi">Terlaris</option>
                  </select>
                </div>
              </div>

              <section className="">
                <div className="flash-sale-items grid grid-cols-4 gap-4">
                  {browseProductItems.map((e, i) => (
                    <BrowseProductCard
                      key={e.thumbnail}
                      thumbnail={e.thumbnail}
                      storeName={e.storeName}
                      brand={e.brand}
                      rating={e.rating}
                      salePrice={e.salePrice}
                      regularPrice={e.regularPrice}
                      stocks={e.stocks}
                      idx={i + 1}
                    />
                  ))}
                </div>

                <div className="text-center load-more m-10">
                  <button className=" p-4 border border-blue-500 rounded-2xl text-blue-500 cursor-pointer">Muat Lebih Banyak Produk (6 produk lagi)</button>
                </div>
              </section>
            </section>
          </div>
        </section>
      </main>
    </>
  );
};

export default BrowsePage;
