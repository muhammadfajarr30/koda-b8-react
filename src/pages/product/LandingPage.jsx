import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  PrinterCheck,
  TrendingUp,
} from "lucide-react";
import React from "react";
import CategoryLink from "../../components/CategoryLink";
import ProductCard from "../../components/ProductCard";
import { categories } from "../../data/categories";
import useFetch from "../../hooks/useFetch";
const LandingPage = () => {
  const {
    data: products,
    loading,
  } = useFetch("../public/data/products.json")
  const flashSaleProducts = products.filter((product) =>
    product.tags.includes("flash-sale")
  );
  
  const newestProducts = products.filter((product) =>
    product.tags.includes("newest")
  );
  
  const featuredProducts = products.filter((product) =>
    product.tags.includes("featured")
  );
const categoriesWithAmount = categories.map((category) => ({
  ...category,
  amount: products.filter(
    (product) => product.category === category.slug
  ).length,
}));
  return (
    <main className="landing-page-content flex flex-col gap-6 bg-[#f8f9fb]">
      <section className="jumbo-carousel flex relative text-white">
        <button className="carousel-btn carousel-btn-left flex items-center justify-center bg-[#FFFFFF33] absolute top-[50%] p-3 -translate-y-3/6 rounded-full z-99">
          <ChevronLeft />
        </button>
        <div className="carousel-item carousel-item1 flex p-20 flex-col gap-8 justify-center w-1/2 bg-[#6720ea]">
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
        <button className="carousel-btn carousel-btn-right right-4 flex items-center justify-center bg-[#FFFFFF33] absolute top-1/2 p-3 -translate-y-3/6 rounded-full z-99">
          <img src="./images/arrow-right1.svg" alt="" />
          <ChevronRight />
        </button>
      </section>
      <section className="category-prod flex flex-col gap-4 px-50">
        <div className="label flex justify-between">
          <h4 className="">Belanja Berdasarkan Kategori</h4>
          <a className="flex items-center" href="">
            Lihat semua
            <ArrowRight size={16} />
          </a>
        </div>
        <div className="category-prod-container grid grid-cols-6 gap-4">
          {categoriesWithAmount.map((category, i) => (
            <CategoryLink
              key={category.slug}
              title={category.title}
              amount={category.amount}
              thumbnail={category.thumbnail}
              slug={category.slug}
              idx={i + 1}
            />
          ))}
        </div>
      </section>
      <section className="flash-deal px-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="bg-red-600 p-1.5 rounded-xl flash-deal-icon bg-red text-white">
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
          {flashSaleProducts.map((product, i) => (
            <ProductCard
              key={product.id}
              id={product.id}
              thumbnail={product.thumbnail}
              storeName={product.storeName}
              brand={product.brand}
              rating={product.rating}
              salePrice={product.salePrice}
              regularPrice={product.regularPrice}
              stocks={product.stocks}
              idx={i + 1}
            />
          ))}
        </div>
      </section>
      <section className="deals-container gap-4 flex px-50">
        <div className="deal deal-1 flex-1 relative ">
          <img
            className="w-full rounded-2xl object-cover block"
            src="./images/fashion-sale.png"
            alt=""
          />
          <div className="deal-content absolute flex flex-col gap-1 text-white top-1/2 left-6 -translate-y-3/6 z-10">
            <p>Fashion Wanita</p>
            <h3 className="font-bold text-2xl">Diskon s/d 50%</h3>
            <button className="border rounded-xl p-1.5 cursor-pointer">
              Belanja Sekarang
            </button>
          </div>
        </div>
        <div className="deal deal-2 flex-1 relative">
          <img
            className="w-full rounded-2xl object-cover block"
            src="images/electronic-sale.png"
            alt=""
          />
          <div className="deal-content absolute flex flex-col gap-1 text-white top-1/2 left-6 -translate-y-3/6 z-10">
            <p>Elektronik Pilihan</p>
            <h3 className="font-bold text-2xl">Harga Terbaik</h3>
            <button className="border rounded-xl p-1.5 cursor-pointer">
              Lihat Produk
            </button>
          </div>
        </div>
      </section>
      <section className="shop-by-category px-50">
        <div className="label flex items-center justify-between">
          <div className="flex items-center gap-3">
            <TrendingUp size={24} />
            <h4 className="text-2xl font-semibold">Produk Terbaru</h4>
          </div>
          <a className="flex items-center gap-1" href="">
            Lihat semua
            <ArrowRight size={16} />
          </a>
        </div>
        <div className="flash-sale-items grid grid-cols-4 gap-4">
          {newestProducts.map((product, i) => (
            <ProductCard
              key={product.id}
              id={product.id}
              storeName={product.storeName}
              thumbnail={product.thumbnail}
              brand={product.brand}
              rating={product.rating}
              salePrice={product.salePrice}
              regularPrice={product.regularPrice}
              stocks={product.stocks}
              idx={i + 1}
            />
          ))}
        </div>
      </section>
      <section className="p-50">
        <div className="label flex items-center justify-between">
          <h4 className="font-bold text-2xl">Produk Unggulan</h4>
          <a className="flex items-center gap-2" href="">
            Lihat semua
            <ArrowRight size={16} />
          </a>
        </div>
        <div className="flash-sale-items grid grid-cols-4 gap-4">
          {featuredProducts.map((product, i) => (
            <ProductCard
              key={product.id}
              id={product.id}
              thumbnail={product.thumbnail}
              storeName={product.storeName}
              brand={product.brand}
              rating={product.rating}
              salePrice={product.salePrice}
              regularPrice={product.regularPrice}
              stocks={product.stocks}
              idx={i + 1}
            />
          ))}
        </div>
      </section>
      <section className="why-shop-section p-50">
        <div className="bg-white why-shop-container border flex flex-col p-9 rounded-2xl gap-6 border-[#0000001a]">
          <h3 className="text-center font-bold text-2xl">
            Kenapa belanja di BeliMudah?
          </h3>
          <div className="features-container flex justify-between">
            <div className="text-center flex flex-col gap-4 feature-item w-2/5">
              <span>🚚</span>
              <p className="font-medium">Gratis Ongkir</p>
              <p className="feature-desc">
                Pembelian di atas Rp 100.000 gratis ongkir ke seluruh Indonesia
              </p>
            </div>
            <div className="text-center flex flex-col gap-4 feature-item w-2/5 ">
              <span>🔒</span>
              <p className="font-medium">Keamanan Terjamin</p>
              <p className="feature-desc">
                Data kamu terenskripsi dengan standar keamanan tinggi
              </p>
            </div>
            <div className="text-center flex flex-col gap-4 feature-item w-2/5">
              <span>↩️</span>
              <p className="font-medium">Pengembalian Mudah</p>
              <p className="feature-desc">
                Produk tidak sesuai? Kembalikan dalam 30 hari tanpa ribet
              </p>
            </div>
            <div className="text-center flex flex-col gap-4 feature-item w-2/5">
              <span>💬</span>
              <p className="font-medium">Layanan 24/7</p>
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