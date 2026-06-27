import {
  ArrowRight,
  Check,
  CheckCircle2,
  MapPin,
  Package,
  Truck,
} from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatRupiah } from "../../helpers/format";

const CheckoutSuccessPage = () => {
  const { items, shipmentDetails } = useSelector((state) => state.order);
  const dispatch = useDispatch();
  const { name, phone, address, city, province, zip, shipping } =
    shipmentDetails;
  const totalPrice = items.reduce((accum, item) => accum + item.salePrice, 0);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 relative ">
      <div className="w-full max-w-3xl   p-6 md:p-8 flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-4">
          <CheckCircle2 className="w-9 h-9" strokeWidth={2.5} />
        </div>
        <h1 className="text-xl md:text-2xl font-bold text-slate-800 flex items-center gap-2 justify-center">
          Pesanan Berhasil! 🎉
        </h1>
        <p className="text-sm text-slate-500 mt-2 max-w-sm">
          Terima kasih telah berbelanja di BeliMudah. Pesananmu sedang diproses.
        </p>
        <div className="w-full bg-white rounded-xl border border-slate-100 p-4 mt-6 text-left space-y-4">
          <div className="flex justify-between items-start border-b border-slate-100 pb-3">
            <div>
              <p className="text-xs text-slate-400">Nomor Pesanan</p>
              <p className="text-sm font-bold text-blue-600 hover:underline cursor-pointer">
                #BM28371132
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs text-slate-400">Total Pembayaran</p>
              <p className="text-sm font-bold text-slate-800">
                {formatRupiah(totalPrice)}
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <Truck className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-slate-700">
                {shipmentDetails.shipping}
              </p>
              <p className="text-xs text-slate-400">
                Estimasi tiba: 3-5 Juni 2026
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <MapPin className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-slate-700">
                Alamat Pengiriman
              </p>
              <p className="text-xs text-slate-500 leading-relaxed">
                {address} {city} {province} {zip}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full border border-slate-100 bg-white rounded-xl p-4 mt-4 text-left">
          <h3 className="text-sm font-bold text-slate-800 mb-4">
            Status Pesanan
          </h3>
          <div className="relative border-l-2 border-slate-200 ml-3.5 pl-6 space-y-6 pb-2">
            <div className="relative">
              <div className="absolute -left-[33px] bg-emerald-500 text-white rounded-full p-0.5 border-4 border-white flex items-center justify-center">
                <Check className="w-3 h-3" strokeWidth={3} />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    Pesanan Diterima
                  </p>
                  <p className="text-xs text-emerald-600 font-medium">
                    Baru saja
                  </p>
                </div>
                {/* Centang hijau kecil di ujung kanan baris aktif */}
                <Check className="w-4 h-4 text-emerald-500" strokeWidth={2.5} />
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-[33px] bg-slate-200 text-slate-500 rounded-full p-1 border-4 border-white flex items-center justify-center">
                <Package className="w-3 h-3" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500">
                  Sedang Dikemas
                </p>
                <p className="text-xs text-slate-400">Estimasi: 1-2 Jam</p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-[33px] bg-slate-200 text-slate-500 rounded-full p-1 border-4 border-white flex items-center justify-center">
                <Truck className="w-3 h-3" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500">
                  Dalam Pengiriman
                </p>
                <p className="text-xs text-slate-400">2-5 hari kerja</p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-[33px] bg-slate-200 text-slate-500 rounded-full p-1 border-4 border-white flex items-center justify-center">
                <MapPin className="w-3 h-3" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500">Tiba</p>
                <p className="text-xs text-slate-400">2-3 Juni 2026</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col sm:flex-row gap-2 mt-6 justify-center items-center">
          <button className="w-full sm:w-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition shadow-sm flex items-center justify-center gap-2">
            <Truck className="w-4 h-4" />
            Lacak Pesanan
          </button>
          <button className="w-full sm:w-auto px-5 py-2.5 bg-white hover:bg-slate-50 text-slate-600 border border-slate-200 text-sm font-medium rounded-xl transition">
            Lihat Riwayat Pesanan
          </button>
          <button className="w-full sm:w-auto px-4 py-2.5 text-blue-600 hover:text-blue-700 text-sm font-medium transition flex items-center justify-center gap-1">
            Lanjut Belanja
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccessPage;
