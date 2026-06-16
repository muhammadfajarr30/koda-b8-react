import React from "react";
import AuthHero from "../../components/AuthHero";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const RegisterPage = () => {
  return (
    <div className="grid grid-cols-2">
      <AuthHero
        image="shopping-bag"
        title="Bergabung dengan 500.000+ pelanggan puas"
        features={[
          "Akses ribuan produk dengan harga terbaik",
          "Lacak pesanan secara real-time",
          "Simpan wishlist favorit",
          "Dapatkan notifikasi eksklusif",
        ]}
      />
      <section className="login flex items-center justify-center">
        <form className="flex flex-col gap-4">
          <div className="heading">
            <h2 className="font-bold text-2xl">Masuk ke Akun</h2>
            <p className="text-gray-500">
              Sudah punya akun?
              <Link className="text-blue-500" to="">
                Masuk di sini
              </Link>
            </p>
          </div>

          <div className="social-login w-full flex gap-2">
            <button
              className="login-sosmed border border-gray-400 w-full p-3 rounded-2xl text-gray-500"
              type="button">
              Daftar via Google
            </button>
            <button
              className="login-sosmed border border-gray-400 w-full p-3 rounded-2xl text-gray-500"
              type="button">
              Daftar via Facebook
            </button>
          </div>

          <div className="flex items-center gap-4 my-6">
            <div className="h-px flex-1 bg-gray-300"></div>

            <span className="text-sm text-gray-500">
              atau daftar dengan email
            </span>

            <div className="h-px flex-1 bg-gray-300"></div>
          </div>

          <div className="form-group flex flex-col font-medium ">
            <label for="name">Nama Lengkap</label>
            <input
              className="border border-gray-400 p-3 rounded-2xl"
              type="text"
              id="name"
              placeholder="Budi santoso"
            />
          </div>
          <div className="form-group flex flex-col font-medium ">
            <label for="email">Email</label>
            <input
              className="border border-gray-400 p-3 rounded-2xl"
              type="email"
              id="email"
              placeholder="email@contoh.com"
            />
          </div>

          <div className="form-group flex flex-col">
            <div className="password-label ">
              <label for="password">Kata Sandi</label>
            </div>

            <input
              className="border border-gray-400 p-3 rounded-2xl"
              type="password"
              id="password"
              placeholder="Masukkan kata sandi"
            />
          </div>
          <div className="form-group flex flex-col">
            <div className="password-label ">
              <label for="password"> Konfirmasi Kata Sandi</label>
            </div>

            <input
              className="border border-gray-400 p-3 rounded-2xl"
              type="password"
              id="password"
              placeholder="Masukkan kata sandi"
            />
          </div>

          <div className="remember text-gray-500">
            <label className="flex gap-2">
              <input type="checkbox" />
              <p>Saya Menyetujui <Link className="text-blue-500" to="">Syarat & Ketentuan</Link> dan <Link className="text-blue-500">Kebijakan Privasi</Link> BeliMudah</p>
            </label>
          </div>

          <button
            className="btn-login w-full bg-orange-500 p-4 rounded-2xl text-white flex items-center gap-2 justify-center"
            type="submit">
            Daftar Sekarang
            <ArrowRight/>
          </button>

          <p className="security text-gray-400 text-center">
            🔒 Data kamu aman dan terenskripsi
          </p>

          
        </form>
      </section>
    </div>
  );
};

export default RegisterPage;
