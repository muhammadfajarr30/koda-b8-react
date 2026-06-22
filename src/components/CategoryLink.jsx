import { Link } from "react-router-dom";

const CategoryLink = ({ idx, title, amount, thumbnail, slug }) => {
//   console.log({
//   title,
//   slug,
// });
  return (
    <Link
      to={`/browse/${slug}`}
      className={`category category-${idx} flex flex-col bg-white border border-[#0000001A] rounded-xl items-center px-2 py-6`}>
      <img
        className="w-16 rounded-xl"
        src={`/images/${thumbnail}.png`}
        alt=""
      />
      <p>{title}</p>
      <p className="text-gray">{amount} produk</p>
    </Link>
  );
};

export default CategoryLink;
