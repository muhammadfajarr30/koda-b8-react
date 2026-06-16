import React from "react";
import AuthHero from "../../components/AuthHero";
import { ArrowLeft, Send } from "lucide-react";
import { Link } from "react-router-dom";

const ForgotPasswordPage = () => {
  return (
    <div className="grid grid-cols-2">
      <AuthHero
        image="forgot-password-hero"
        title="Akun anda aman bersama kami"
        description="Kami menggunakan enkripsi tingkat militer
        untuk menjaga keamanan data dan transaksimu."
        features={[
          "Enkripsi SSL 256-bit",
          "Perlindungan data pribadi",
          "Verifikasi dua Langkah",
        ]}
      />

      <section className="flex min-h-screen items-center justify-center px-4">
        <div className="w-full max-w-md space-y-8 rounded-2xl  p-8 ">
          <div>
            <Link
              to="/login"
              className="flex items-center gap-2 text-sm text-gray-500 transition hover:text-gray-700">
              <ArrowLeft size={18} />
              Kembali Ke Login
            </Link>
          </div>
          <div className="">
            <h1 className="text-3xl font-bold text-gray-900">
              Lupa Kata Sandi?
            </h1>
            <p className="text-sm leading-relaxed text-gray-600">
              Tidak perlu khawatir. Masukkan email yang terdaftar dan kami akan
              mengirimkan tautan untuk membuat kata sandi baru.
            </p>
          </div>
          <form className="space-y-5">
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700">
                Alamat Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="contoh@email.com"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none  "
              />
            </div>
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 font-medium text-white ">
              <Send size={18} />
              Kirim Tautan Reset
            </button>
          </form>
          <div className="rounded-xl bg-blue-50 p-6">
            <h4 className="mb-3 font-semibold text-gray-900">Tips Keamanan:</h4>
            <ul className="list-disc text-sm text-gray-600">
              <li>Pastikan kamu memeriksa folder spam/junk email.</li>
              <li>Tautan reset hanya berlaku selama 30 menit.</li>
              <li>Jangan bagikan tautan reset kepada siapa pun.</li>
            </ul>
          </div>
          <div className="text-center text-sm text-gray-600">
            Ingat kata sandi kamu?
            <Link to="/login" className="font-medium text-blue-600 ">
              Masuk sekarang
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForgotPasswordPage;
