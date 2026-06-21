export function formatRupiah(value) {
  if (value === undefined || value === null) return "-";
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(value);
}

export function getDiscountPercent(regularPrice, salePrice) {
  if (!regularPrice || !salePrice || salePrice >= regularPrice) return 0;
  return Math.round((1 - salePrice / regularPrice) * 100);
}
