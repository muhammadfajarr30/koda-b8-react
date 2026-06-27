import { ArrowRight, Truck } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { clearUserCart } from "../../redux/reducer/userSlice";
import {
  addCartToItems,
  setShipmentDetails,
} from "../../redux/reducer/orderSlice";

const AddressPage = () => {
  const user = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.users[user.id]);

  const dispatch = useDispatch();
  const { account, setAccount, users, setUsers } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      address: "",
      city: "",
      province: "",
      zip: "",
      notes: "",
      shipping: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);

    // dispatch(
    //   clearUserCart({
    //     userIndex: user.id,
    //   }),
    // );
    dispatch(setShipmentDetails(data));
    dispatch(addCartToItems(cart));
    navigate("/checkout/payment");
  };

  return (
    <section className="form-checkout p-4 border bg-white border-gray-500 rounded-xl">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <div className="title flex items-center gap-2">
          <Truck size={24} color="#1A73E8" />
          <h3 className="text-xl font-semibold">Alamat Pengiriman</h3>
        </div>

        {/* Nama & Telepon */}
        <div className="flex gap-2">
          <div className="w-full flex flex-col">
            <label>Nama Penerima *</label>
            <input
              {...register("name", {
                required: "Nama wajib diisi",
              })}
              className="p-3 bg-gray-200 border rounded-xl"
              placeholder="Budi Santoso"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div className="w-full flex flex-col">
            <label>Nomor Telepon *</label>
            <input
              {...register("phone", {
                required: "Nomor telepon wajib diisi",
                pattern: {
                  value: /^08\d{8,12}$/,
                  message: "Nomor telepon tidak valid",
                },
              })}
              className="p-3 bg-gray-200 border rounded-xl"
              placeholder="081234567890"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label>Email *</label>
          <input
            {...register("email", {
              required: "Email wajib diisi",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Format email tidak valid",
              },
            })}
            className="p-3 bg-gray-200 border rounded-xl"
            placeholder="budi@gmail.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Alamat */}
        <div className="flex flex-col">
          <label>Alamat Lengkap *</label>
          <input
            {...register("address", {
              required: "Alamat wajib diisi",
            })}
            className="p-3 bg-gray-200 border rounded-xl"
            placeholder="Jl. Kebon Jeruk No.15"
          />
          {errors.address && (
            <p className="text-red-500 text-sm">{errors.address.message}</p>
          )}
        </div>

        {/* Kota & Provinsi */}
        <div className="flex gap-2">
          <div className="w-full flex flex-col">
            <label>Kota *</label>
            <input
              {...register("city", {
                required: "Kota wajib diisi",
              })}
              className="p-3 bg-gray-200 border rounded-xl"
            />
            {errors.city && (
              <p className="text-red-500 text-sm">{errors.city.message}</p>
            )}
          </div>

          <div className="w-full flex flex-col">
            <label>Provinsi *</label>
            <input
              {...register("province", {
                required: "Provinsi wajib diisi",
              })}
              className="p-3 bg-gray-200 border rounded-xl"
            />
            {errors.province && (
              <p className="text-red-500 text-sm">{errors.province.message}</p>
            )}
          </div>
        </div>

        {/* Zip & Notes */}
        <div className="flex gap-2">
          <div className="w-full flex flex-col">
            <label>Kode Pos *</label>
            <input
              {...register("zip", {
                required: "Kode pos wajib diisi",
              })}
              className="p-3 bg-gray-200 border rounded-xl"
            />
            {errors.zip && (
              <p className="text-red-500 text-sm">{errors.zip.message}</p>
            )}
          </div>

          <div className="w-full flex flex-col">
            <label>Catatan</label>
            <input
              {...register("notes")}
              className="p-3 bg-gray-200 border rounded-xl"
              placeholder="Warna pagar, dll."
            />
          </div>
        </div>

        {/* Shipping Method */}
        <h4 className="font-semibold mt-2">Metode Pengiriman</h4>

        <label className="shipping-method flex border rounded-xl p-3 cursor-pointer">
          <input
            type="radio"
            value="JNE Reguler"
            {...register("shipping", {
              required: "Pilih metode pengiriman",
            })}
          />
          <div className="flex justify-between w-full ml-3">
            <div>
              <h4>JNE Reguler</h4>
              <p>3-5 hari kerja</p>
            </div>
            <span>GRATIS</span>
          </div>
        </label>

        <label className="shipping-method flex border rounded-xl p-3 cursor-pointer">
          <input
            type="radio"
            value="JNE Express"
            {...register("shipping", {
              required: "Pilih metode pengiriman",
            })}
          />
          <div className="flex justify-between w-full ml-3">
            <div>
              <h4>JNE Express</h4>
              <p>1-2 hari kerja</p>
            </div>
            <span>GRATIS</span>
          </div>
        </label>

        <label className="shipping-method flex border rounded-xl p-3 cursor-pointer">
          <input
            type="radio"
            value="Same Day Delivery"
            {...register("shipping", {
              required: "Pilih metode pengiriman",
            })}
          />
          <div className="flex justify-between w-full ml-3">
            <div>
              <h4>Same Day Delivery</h4>
              <p>Hari ini (sebelum 16.00)</p>
            </div>
            <span>GRATIS</span>
          </div>
        </label>

        {errors.shipping && (
          <p className="text-red-500 text-sm">{errors.shipping.message}</p>
        )}

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-1 rounded-xl bg-blue-500 p-3 text-white">
          Lanjut Ke Pembayaran
          <ArrowRight />
        </button>
      </form>
    </section>
  );
};

export default AddressPage;
