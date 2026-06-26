import { Link } from "react-router-dom";

const CategoryLink = ({ idx, title, amount, thumbnail, slug }) => {
  return (
    <Link
      to={`/browse/${slug}`}
      className={`
        category-${idx}
        flex flex-col items-center
        rounded-2xl
        border border-gray-200
        bg-white
        p-4
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-lg
      `}
    >
      <div className="mb-3 flex h-20 w-20 items-center justify-center rounded-2xl bg-slate-50">
        <img
          className="h-14 w-14 object-contain"
          src={`/images/${thumbnail}.png`}
          alt={title}
        />
      </div>

      <p className="font-medium text-gray-800 text-center">
        {title}
      </p>

      <p className="text-sm text-gray-500">
        {amount} produk
      </p>
    </Link>
  );
};

export default CategoryLink;