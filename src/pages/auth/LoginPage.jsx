import React from "react";
import AuthHero from "../../components/AuthHero";
import { data, Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const handleLogin = (data) => {
    const users = JSON.parse(localStorage.getItem("data")) || [];
    const user = users.find((item)=> item.email === data.email && item.password === data.password)

    if (user) {
      alert("login berhasil!");
      localStorage.setItem("account", JSON.stringify(user));
      navigate("/");
    } else {
      alert("email atau password salah!");
    }
  };
  return (
    <div className="grid grid-cols-2">
      <AuthHero
        image="login-hero"
        title="Belanja lebih mudah, hidup lebih praktis"
        description="Ribuan produk pilihan dengan harga terbaik, pengiriman cepat, dan pembayaran yang aman."
        stats={[
          {
            value: "10rb+",
            label: "Produk",
          },
          {
            value: "500rb+",
            label: "Pelanggan",
          },
          {
            value: "4.8★",
            label: "Rating",
          },
        ]}
      />

      <section className="login flex items-center justify-center">
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="flex flex-col gap-4">
          <div className="heading">
            <h2 className="font-bold text-2xl">Masuk ke Akun</h2>
            <p className="text-gray-500">
              Belum punya akun?
              <Link className="text-blue-500" to="/register">
                Daftar gratis
              </Link>
            </p>
          </div>

          <div className="social-login w-full flex gap-2">
            <button
              className="login-sosmed border border-gray-400 w-full p-3 rounded-2xl text-gray-500"
              type="button">
              Google
            </button>
            <button
              className="login-sosmed border border-gray-400 w-full p-3 rounded-2xl text-gray-500"
              type="button">
              Facebook
            </button>
          </div>

          <div className="flex items-center gap-4 my-6">
            <div className="h-px flex-1 bg-gray-300"></div>

            <span className="text-sm text-gray-500">
              atau masuk dengan email
            </span>

            <div className="h-px flex-1 bg-gray-300"></div>
          </div>

          <div className="form-group flex flex-col font-medium ">
            <label htmlFor="email">Email</label>
            <input
              {...register("email")}
              className="border border-gray-400 p-3 rounded-2xl"
              type="email"
              id="email"
              placeholder="email@contoh.com"
            />
          </div>

          <div className="form-group flex flex-col">
            <div className="password-label flex justify-between">
              <label htmlFor="password">Kata Sandi</label>
              <a className="text-blue-500" href="./auth-forget-password.html">
                Lupa kata sandi?
              </a>
            </div>

            <input
              {...register("password")}
              className="border border-gray-400 p-3 rounded-2xl"
              type="password"
              id="password"
              placeholder="Masukkan kata sandi"
            />
          </div>

          <div className="remember text-gray-500">
            <label className="flex gap-2">
              <input {...register("remember")} type="checkbox" />
              <p>Ingat saya selama 30 hari</p>
            </label>
          </div>

          <button
            className="btn-login w-full bg-blue-500 p-4 rounded-2xl text-white"
            type="submit">
            Masuk
          </button>

          <p className="security text-gray-400 text-center">
            🔒 Login aman dengan enkripsi SSL 256-bit
          </p>

          <p className="terms text-gray-500">
            Dengan masuk, kamu menyetujui
            <a href="#" className="text-blue-500">
              {" "}
              Syarat & Ketentuan
            </a>
            dan
            <a href="#" className="text-blue-500">
              {" "}
              Kebijakan Privasi
            </a>
            .
          </p>
        </form>
      </section>
    </div>
  );
};

export default LoginPage;
