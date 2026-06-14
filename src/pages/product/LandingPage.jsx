import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import CategoryLink from "../../components/CategoryLink";
import ProductCard from "../../components/ProductCard";

const categoriesLink = [
  {
    title: "Elektronik",
    amount: 5,
    thumbnail: "electronic",
  },
  {
    title: "Fashion",
    amount: 10,
    thumbnail: "fashion",
  },
  {
    title: "Rumah & Dapur",
    amount: 10,
    thumbnail: "house-kitchen",
  },
  {
    title: "Kecantikan",
    amount: 10,
    thumbnail: "beauty",
  },
  {
    title: "Olahraga",
    amount: 10,
    thumbnail: "sport",
  },
  {
    title: "Buku & Alat Tulis",
    amount: 10,
    thumbnail: "book",
  },
];

const productsFlashItems = [
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

const LandingPage = () => {
  return (
    <main className="landing-page-content flex flex-col gap-6 bg-[#f8f9fb]">
      <section className="jumbo-carousel flex relative text-white">
        <button className="carousel-btn carousel-btn-left flex items-center justify-center bg-[#FFFFFF33] absolute top-[50%] p-3 -translate-y-[50%] rounded-full z-99">
          <ChevronLeft />
        </button>
        <div className="carousel-item carousel-item1 flex flex-col gap-8 justify-center w-1/2 bg-[#6720ea]">
          <h1 className="font-bold text-5xl">
            Elektronik Pilihan, Harga Spesial
          </h1>
          <p>
            Laptop, smartphone, headphone, dan masih banyak lagi dengan diskon
            hingga 40%
          </p>
          <button className="promo-btn flex items-center whitespace-nowrap h-max px-4 py-2 bg-white text-[#1A73E8] w-fit rounded-lg">
            <span>Lihat Promo</span>
            <ArrowRight size={16} />
          </button>
        </div>
        <div className="carousel-item carousel-item2 w-1/2 bg-violet-600">
          <img
            className="w-full  opacity-25"
            src="/images/carousel-img1.png"
            alt=""
          />
        </div>
        <button className="carousel-btn carousel-btn-right right-4 flex items-center justify-center bg-[#FFFFFF33] absolute top-[50%] p-3 translate-y-[-50%] rounded-full z-99">
          <img src="./images/arrow-right1.svg" alt="" />
          <ChevronRight />
        </button>
      </section>

      <section className="px-50 category-prod flex flex-col gap-4">
        <div className="label flex justify-between">
          <h4>Belanja Berdasarkan Kategori</h4>
          <a className="flex items-center" href="">
            Lihat semua
            <ArrowRight size={16} />
          </a>
        </div>
        <div className="category-prod-container grid grid-cols-6 gap-4">
          {categoriesLink.map((e, i) => (
            <CategoryLink
              key={e.thumbnail}
              title={e.title}
              amount={e.amount}
              thumbnail={e.thumbnail}
              idx={i + 1}
            />
          ))}
        </div>
      </section>

      <section className="flash-deal">
        <div className="flex items-center justify-between">
          <div>
            <span className="flash-deal-icon bg-red text-white">
              <img src="./images/flash.svg" alt="" />
              Flash Deal
            </span>
            <span>
              <img src="./images/clock.svg" alt="" />
              <span> Berakhir dalam: 05 : 21 : 38 </span>
            </span>
          </div>
          <a className="flex items-center gap-1" href="">
            Lihat semua
            <ArrowRight size={16} />
          </a>
        </div>
        <div className="flash-sale-items grid grid-cols-4 gap-4">
          {productsFlashItems.map((e, i) => (
            <ProductCard
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
      </section>

      <section className="deals-container gap-4 flex">
        <div className="deal deal-1 flex-1 relative ">
          <img
            className="w-full rounded-2xl object-cover block"
            src="./images/fashion-sale.png"
            alt=""
          />
          <div
            className="deal-content absolute flex flex-col gap-1 text-white top-1/2 left-6 -translate-y-3/6 z-10">
            <p>Fashion Wanita</p>
            <h3 className="font-bold text-2xl">Diskon s/d 50%</h3>
            <button className="border rounded-xl p-1.5 cursor-pointer">Belanja Sekarang</button>
          </div>
        </div>
        <div className="deal deal-2 flex-1 relative">
          <img
            className="w-full rounded-2xl object-cover block"
            src="images/electronic-sale.png"
            alt=""
          />
          <div
            className="deal-content absolute flex flex-col gap-1 text-white top-1/2 left-6 -translate-y-3/6 z-10">
            <p>Elektronik Pilihan</p>
            <h3 className="font-bold text-2xl">Harga Terbaik</h3>
            <button className="border rounded-xl p-1.5 cursor-pointer">Lihat Produk</button>
          </div>
        </div>
      </section>

      <section className="shop-by-category">
        <div className="label flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="./images/stonk-up.svg" alt="" />
            <h4>Produk Terbaru</h4>
          </div>
          <a href="">
            Lihat semua
            <img src="./images/arrow-right-blue.svg" alt="" />
          </a>
        </div>
        <div className="flash-sale-items">
          
        </div>
      </section>

      <section>
        <div className="label flex items-center justify-between">
          <h4>Produk Unggulan</h4>
          <a href="">
            Lihat semua
            <img src="./images/arrow-right-blue.svg" alt="" />
          </a>
        </div>
        <div className="flash-sale-items">
          <div className="item-col bg-white">
            <div className="item-thumbnail relative">
              <span className="disc-icon bg-red text-white absolute">-31%</span>
              <img src="./images/Headphone Wireless Premium.png" alt="" />
            </div>
            <div className="item-description flex flex-col gap-4">
              <p className="text-gray">Sound Wave</p>
              <p>Headphone Wireless Premium</p>
              <div className="item-rating">
                <img src="./images/five-star.png" alt="" />
                <span className="text-gray">4.8 (512)</span>
              </div>
              <div className="item-price">
                <span>Rp.450.000</span>
                <span className="text-gray text-decoration-line">
                  Rp.650.000
                </span>
              </div>
            </div>
          </div>
          <div className="item-col bg-white">
            <div className="item-thumbnail relative">
              <span className="disc-icon bg-red text-white absolute">-31%</span>
              <img src="./images/Headphone Wireless Premium.png" alt="" />
            </div>
            <div className="item-description flex flex-col gap-4">
              <p className="text-gray">Sound Wave</p>
              <p>Headphone Wireless Premium</p>
              <div className="item-rating">
                <img src="./images/five-star.png" alt="" />
                <span className="text-gray">4.8 (512)</span>
              </div>
              <div className="item-price">
                <span>Rp.450.000</span>
                <span className="text-gray text-decoration-line">
                  Rp.650.000
                </span>
              </div>
            </div>
          </div>
          <div className="item-col bg-white">
            <div className="item-thumbnail relative">
              <span className="disc-icon bg-red text-white absolute">-31%</span>
              <img src="./images/Headphone Wireless Premium.png" alt="" />
            </div>
            <div className="item-description flex flex-col gap-4">
              <p className="text-gray">Sound Wave</p>
              <p>Headphone Wireless Premium</p>
              <div className="item-rating">
                <img src="./images/five-star.png" alt="" />
                <span className="text-gray">4.8 (512)</span>
              </div>
              <div className="item-price">
                <span>Rp.450.000</span>
                <span className="text-gray text-decoration-line">
                  Rp.650.000
                </span>
              </div>
            </div>
          </div>
          <div className="item-col bg-white">
            <div className="item-thumbnail relative">
              <span className="disc-icon bg-red text-white absolute">-31%</span>
              <img src="./images/Headphone Wireless Premium.png" alt="" />
            </div>
            <div className="item-description flex flex-col gap-4">
              <p className="text-gray">Sound Wave</p>
              <p>Headphone Wireless Premium</p>
              <div className="item-rating">
                <img src="./images/five-star.png" alt="" />
                <span className="text-gray">4.8 (512)</span>
              </div>
              <div className="item-price">
                <span>Rp.450.000</span>
                <span className="text-gray text-decoration-line">
                  Rp.650.000
                </span>
              </div>
            </div>
          </div>

          <div className="item-col bg-white">
            <div className="item-thumbnail relative">
              <span className="disc-icon bg-red text-white absolute">-31%</span>
              <img src="./images/Headphone Wireless Premium.png" alt="" />
            </div>
            <div className="item-description flex flex-col gap-4">
              <p className="text-gray">Sound Wave</p>
              <p>Headphone Wireless Premium</p>
              <div className="item-rating">
                <img src="./images/five-star.png" alt="" />
                <span className="text-gray">4.8 (512)</span>
              </div>
              <div className="item-price">
                <span>Rp.450.000</span>
                <span className="text-gray text-decoration-line">
                  Rp.650.000
                </span>
              </div>
            </div>
          </div>
          <div className="item-col bg-white">
            <div className="item-thumbnail relative">
              <span className="disc-icon bg-red text-white absolute">-31%</span>
              <img src="./images/Headphone Wireless Premium.png" alt="" />
            </div>
            <div className="item-description flex flex-col gap-4">
              <p className="text-gray">Sound Wave</p>
              <p>Headphone Wireless Premium</p>
              <div className="item-rating">
                <img src="./images/five-star.png" alt="" />
                <span className="text-gray">4.8 (512)</span>
              </div>
              <div className="item-price">
                <span>Rp.450.000</span>
                <span className="text-gray text-decoration-line">
                  Rp.650.000
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why-shop-section">
        <div className="bg-white why-shop-container">
          <h3 className="text-center">Kenapa belanja di BeliMudah?</h3>
          <div className="features-container flex">
            <div className="text-center feature-item">
              <span>🚚</span>
              <p className="feature-title">Gratis Ongkir</p>
              <p className="feature-desc">
                Pembelian di atas Rp 100.000 gratis ongkir ke seluruh Indonesia
              </p>
            </div>
            <div className="text-center feature-item">
              <span>🔒</span>
              <p className="feature-title">Keamanan Terjamin</p>
              <p className="feature-desc">
                Data kamu terenskripsi dengan standar keamanan tinggi
              </p>
            </div>
            <div className="text-center feature-item">
              <span>↩️</span>
              <p className="feature-title">Pengembalian Mudah</p>
              <p className="feature-desc">
                Produk tidak sesuai? Kembalikan dalam 30 hari tanpa ribet
              </p>
            </div>
            <div className="text-center feature-item">
              <span>💬</span>
              <p className="feature-title">Layanan 24/7</p>
              <p className="feature-desc">
                Tim kami siap membantu kamu kapan saja
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
