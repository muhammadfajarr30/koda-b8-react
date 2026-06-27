import { CreditCard, Lock } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setPaymentMethod } from "../../redux/reducer/orderSlice";

const paymentMethods = [
  { id: "bca", label: "Virtual Account BCA" },
  { id: "bni", label: "Virtual Account BNI" },
  { id: "credit-card", label: "Kartu Kredit / Debit" },
  { id: "gopay", label: "Gopay" },
  { id: "ovo", label: "Ovo" },
  { id: "dana", label: "Dana" },
];

const PaymentPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      payment: "",
    },
  });

  const onSubmit = (data) => {
    dispatch(setPaymentMethod(data?.payment));
    navigate("/checkout/confirm-order");
  };

  return (
    <div>
      <section className="payment-method bg-white p-4 rounded-xl border border-gray-300">
        <div className="container flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <CreditCard color="#1A73E8" />
            <h3 className="font-semibold text-2xl">Metode Pembayaran</h3>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="payment-choice grid grid-cols-3 gap-4">
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  className="flex items-center justify-center gap-3 border p-3 rounded-xl border-gray-300">
                  <input
                    type="radio"
                    id={method.id}
                    value={method.id}
                    {...register("payment", {
                      required: "Pilih metode pembayaran",
                    })}
                  />

                  <label
                    htmlFor={method.id}
                    className="payment-card cursor-pointer">
                    <span>{method.label}</span>
                  </label>
                </div>
              ))}
            </div>

            {errors.payment && (
              <p className="text-red-500 mt-2">{errors.payment.message}</p>
            )}

            <div className="security-info bg-blue-100 p-3 rounded-xl text-gray-500 flex gap-2 items-center justify-center mt-4">
              <Lock color="#1A73E8" size={20} />
              <p>
                Informasi pembayaranmu dienkripsi dengan SSL 256-bit. Kami tidak
                menyimpan data kartu kreditmu.
              </p>
            </div>

            <div className="return-confirm flex gap-2 mt-4">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="btn-return p-3 border border-gray-300 rounded-xl text-gray-500">
                Kembali
              </button>

              <button
                type="submit"
                className="btn-confirm p-3 w-full bg-blue-500 rounded-xl text-white">
                Lanjut Ke Konfirmasi
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default PaymentPage;
