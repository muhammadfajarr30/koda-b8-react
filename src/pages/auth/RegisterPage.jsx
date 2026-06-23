import React, { useState } from "react";
import AuthHero from "../../components/AuthHero";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// 1. Definisikan Schema Validasi Register
const registerSchema = yup.object().shape({
  fullName: yup
    .string()
    .required("Nama lengkap wajib diisi"),
  email: yup
    .string()
    .email("Format email tidak valid")
    .required("Email wajib diisi"),
  password: yup
    .string()
    .min(6, "Kata sandi minimal 6 karakter")
    .required("Kata sandi wajib diisi"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Konfirmasi kata sandi tidak cocok")
    .required("Konfirmasi kata sandi wajib diisi"),
  termsAndCondition: yup
    .boolean()
    .oneOf([true], "Kamu harus menyetujui Syarat & Ketentuan"),
});

const RegisterPage = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("data")) || []);
  const navigate = useNavigate();

  // 2. Hubungkan dengan yupResolver
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });
  const inputData = (data) => {
    const { confirmPassword, termsAndCondition, ...userData } = data;
    const newData = [...user, userData];
    localStorage.setItem("data", JSON.stringify(newData));
    setUser(newData);
    alert("Pendaftaran berhasil! Silakan login.");
    reset();
    navigate("/login"); 
  };
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
        <form onSubmit={handleSubmit(inputData)} className="flex flex-col gap-4 w-full max-w-md px-4">
          <div className="heading">
            <h2 className="font-bold text-2xl">Daftar Akun Baru</h2>
            <p className="text-gray-500">
              Sudah punya akun?{" "}
              <Link className="text-blue-500" to="/login">
                Masuk di sini
              </Link>
            </p>
          </div>
          <div className="social-login w-full flex gap-2">
            <button className="border border-gray-400 w-full p-3 rounded-2xl text-gray-500" type="button">Daftar via Google</button>
            <button className="border border-gray-400 w-full p-3 rounded-2xl text-gray-500" type="button">Daftar via Facebook</button>
          </div>

          <div className="flex items-center gap-4 my-4">
            <div className="h-px flex-1 bg-gray-300"></div>
            <span className="text-sm text-gray-500">atau daftar dengan email</span>
            <div className="h-px flex-1 bg-gray-300"></div>
          </div>
          <div className="form-group flex flex-col font-medium">
            <label htmlFor="name">Nama Lengkap</label>
            <input
              {...register("fullName")}
              className={`border p-3 rounded-2xl ${errors.fullName ? "border-red-500" : "border-gray-400"}`}
              type="text"
              id="name"
              placeholder="Budi Santoso"
            />
            {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
          </div>
          <div className="form-group flex flex-col font-medium">
            <label htmlFor="email">Email</label>
            <input
              {...register("email")}
              className={`border p-3 rounded-2xl ${errors.email ? "border-red-500" : "border-gray-400"}`}
              type="email"
              id="email"
              placeholder="email@contoh.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>
          <div className="form-group flex flex-col">
            <label htmlFor="password">Kata Sandi</label>
            <input
              {...register("password")}
              className={`border p-3 rounded-2xl ${errors.password ? "border-red-500" : "border-gray-400"}`}
              type="password"
              id="password"
              placeholder="Masukkan kata sandi"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>
          <div className="form-group flex flex-col">
            <label htmlFor="confirmPassword">Konfirmasi Kata Sandi</label>
            <input
              {...register("confirmPassword")}
              className={`border p-3 rounded-2xl ${errors.confirmPassword ? "border-red-500" : "border-gray-400"}`}
              type="password"
              id="confirmPassword"
              placeholder="Ulangi kata sandi"
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
          </div>
          <div className="remember text-gray-500">
            <label className="flex gap-2 items-start">
              <input {...register("termsAndCondition")} type="checkbox" className="mt-1" />
              <p className="text-sm">
                Saya Menyetujui <Link className="text-blue-500" to="/terms">Syarat & Ketentuan</Link> dan{" "}
                <Link className="text-blue-500" to="/privacy">Kebijakan Privasi</Link> BeliMudah
              </p>
            </label>
            {errors.termsAndCondition && <p className="text-red-500 text-sm mt-1">{errors.termsAndCondition.message}</p>}
          </div>
          <button
            className="btn-login w-full bg-orange-500 p-4 rounded-2xl text-white flex items-center gap-2 justify-center font-bold"
            type="submit"
          >
            Daftar Sekarang
            <ArrowRight size={18} />
          </button>
        </form>
      </section>
    </div>
  );
};

export default RegisterPage;