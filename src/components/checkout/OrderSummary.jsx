import React from "react";

function OrderSummary() {
  return (
    <>
     <section className="order-summary">
  <div className="container-order rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
    <h3 className="mb-5 text-xl font-semibold text-gray-800">
      Ringkasan Pesanan
    </h3>

    <div className="flex items-center gap-4">
      <div className="h-16 w-16 overflow-hidden rounded-xl bg-gray-100">
        <img
          src="/images/headphone.png"
          alt="Headphone"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex-1">
        <p className="font-medium text-gray-800">
          Headphone Wireless Premium
        </p>
        <p className="text-sm text-gray-500">
          Produk Elektronik
        </p>
      </div>

      <span className="rounded-md bg-gray-100 px-3 py-1 text-sm font-medium">
        x1
      </span>
    </div>

    <div className="my-5 border-t border-gray-200" />

    <div className="space-y-3">
      <div className="flex justify-between text-gray-600">
        <span>Subtotal</span>
        <span>Rp 450.000</span>
      </div>

      <div className="flex justify-between text-gray-600">
        <span>Ongkir</span>
        <span className="font-medium text-green-600">
          Gratis
        </span>
      </div>
    </div>

    <div className="my-5 border-t border-gray-200" />

    <div className="flex justify-between text-lg font-semibold">
      <span>Total</span>
      <span className="text-orange-500">
        Rp 450.000
      </span>
    </div>
  </div>
</section>
    </>
  );
}

export default OrderSummary;
