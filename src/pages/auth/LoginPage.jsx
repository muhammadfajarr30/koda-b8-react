import React, { useContext } from "react";
import AuthHero from "../../components/AuthHero";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "../../context/AuthContext";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/reducer/authSlice";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Format email tidak valid")
    .required("Email wajib diisi"),
  password: yup
    .string()
    .min(6, "Kata sandi minimal 6 karakter")
    .required("Kata sandi wajib diisi"),
  remember: yup.boolean(),
});
const LoginPage = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const handleLogin = (data) => {
    const userIndex = users.findIndex(
      (user) => user.email === data.email && user.password === data.password,
    );

    const userFound = users.find(
      (user) => user.email === data.email && user.password === data.password,
    );

    console.log("userFound:", userFound);

    if (!userFound) {
      alert("Email atau password salah");
      return;
    }

    dispatch(
      login({
        id: userIndex,
        fullName: userFound.fullName,
        email: data.email,
        password: data.password,
      }),
    );

    alert("Login berhasil");
    navigate("/");
  };
  return (
    <div className="grid grid-cols-2">
      <AuthHero
        image="login-hero"
        title="Belanja lebih mudah, hidup lebih praktis"
        description="Ribuan produk pilihan dengan harga terbaik, pengiriman cepat, dan pembayaran yang aman."
        stats={[
          { value: "10rb+", label: "Produk" },
          { value: "500rb+", label: "Pelanggan" },
          { value: "4.8★", label: "Rating" },
        ]}
      />
      <section className="login flex items-center justify-center">
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="flex flex-col gap-4 w-full max-w-md px-4">
          <div className="heading">
            <h2 className="font-bold text-2xl">Masuk ke Akun</h2>
            <p className="text-gray-500">
              Belum punya akun?{" "}
              <Link className="text-blue-500" to="/register">
                Daftar gratis
              </Link>
            </p>
          </div>
          <div className="social-login w-full flex gap-2">
            <button
              className="border border-gray-400 w-full p-3 rounded-2xl text-gray-500"
              type="button">
              Google
            </button>
            <button
              className="border border-gray-400 w-full p-3 rounded-2xl text-gray-500"
              type="button">
              Facebook
            </button>
          </div>
          <div className="flex items-center gap-4 my-4">
            <div className="h-px flex-1 bg-gray-300"></div>
            <span className="text-sm text-gray-500">
              atau masuk dengan email
            </span>
            <div className="h-px flex-1 bg-gray-300"></div>
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
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="form-group flex flex-col">
            <div className="password-label flex justify-between">
              <label htmlFor="password">Kata Sandi</label>
              <Link className="text-blue-500" to="/forgot-password">
                Lupa kata sandi?
              </Link>
            </div>
            <input
              {...register("password")}
              className={`border p-3 rounded-2xl ${errors.password ? "border-red-500" : "border-gray-400"}`}
              type="password"
              id="password"
              placeholder="Masukkan kata sandi"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="remember text-gray-500">
            <label className="flex gap-2 items-center">
              <input {...register("remember")} type="checkbox" />
              <span>Ingat saya selama 30 hari</span>
            </label>
          </div>
          <button
            className="btn-login w-full bg-blue-500 p-4 rounded-2xl text-white font-bold"
            type="submit">
            Masuk
          </button>
        </form>
      </section>
    </div>
  );
};

export default LoginPage;
