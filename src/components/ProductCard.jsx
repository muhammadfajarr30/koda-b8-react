import { ShoppingCart } from "lucide-react";
import { FiStar } from "react-icons/fi";
import { Link } from "react-router-dom";

const ProductCard = ({
  id,
  thumbnail,
  salePrice,
  regularPrice,
  storeName,
  brand,
  rating,
  stocks,
}) => {
  return (
    <Link
      to={`/detail-page/${id}`}
      className="
        group
        overflow-hidden
        rounded-2xl
        border border-gray-200
        bg-white
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      <div className="relative overflow-hidden">
        <span className="absolute left-3 top-3 z-10 rounded-lg bg-red-600 px-2 py-1 text-xs font-medium text-white">
          -31%
        </span>

        <img
          className="
            w-full
            object-cover
            transition-transform duration-500
            group-hover:scale-105
          "
          src={`/images/${thumbnail}.png`}
          alt={brand}
        />
      </div>

      <div className="flex flex-col gap-3 p-4">
        <p className="text-sm text-gray-500">
          {storeName}
        </p>

        <h3 className="line-clamp-2 min-h-16 font-medium text-gray-800">
          {brand}
        </h3>

        <div className="flex items-center gap-2">
          <span className="flex text-yellow-100">
            <FiStar fill="yellow" size={20}/>
            <FiStar fill="yellow" size={20}/>
            <FiStar fill="yellow" size={20}/>
            <FiStar fill="yellow" size={20}/>
            <FiStar fill="yellow" size={20}/>
          </span>

          <span className="text-sm text-gray-500">
            {rating} ({stocks})
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="text-lg font-bold text-blue-600">
            Rp {salePrice.toLocaleString("id-ID")}
          </span>

          <span className="text-sm text-gray-400 line-through">
            Rp {regularPrice.toLocaleString("id-ID")}
          </span>
        </div>
        <button
  className="
  cursor-pointer
    mt-2
    flex
    w-full
    items-center
    justify-center
    gap-2
    rounded-xl
    bg-blue-500
    px-4
    py-3
    font-medium
    text-white
    transition
    hover:bg-blue-600
  "
>
  <ShoppingCart size={18} />
  Tambah ke Keranjang
</button>
      </div>
    </Link>
  );
};

export default ProductCard;