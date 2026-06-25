import React from "react";

function CheckoutStep() {
  return (
    <div className="w-full max-w-3xl mx-auto rounded-2xl p-6 ">
  <div className="flex items-start">
    <div className="flex-1">
      <div className="flex items-center">
        <div className="flex h-15 w-15 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white font-semibold">
          1
        </div>
        <div className="h-1 flex-1 bg-blue-600"></div>
      </div>
      <p className="mt-3 text-sm font-semibold text-blue-600">
        Pengiriman
      </p>
    </div>
    <div className="flex-1">
      <div className="flex items-center">
        <div className="flex h-15 w-15 shrink-0 items-center justify-center rounded-full border-2 border-gray-300 bg-white text-gray-500 font-semibold">
          2
        </div>
        <div className="h-1 flex-1 bg-gray-200"></div>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Pembayaran
      </p>
    </div>
    <div className="w-15">
      <div className="flex h-15 w-15 items-center justify-center rounded-full border-2 border-gray-300 bg-white text-gray-500 font-semibold">
        3
      </div>

      <p className="mt-3 text-sm text-gray-500">
        Konfirmasi
      </p>
    </div>
  </div>
</div>
  );
}

export default CheckoutStep;
