import { Link } from "react-router-dom";
import {
  Bell,
  ChevronDown,
  Heart,
  MapPin,
  Menu,
  ShoppingCart,
  User,
} from "lucide-react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useAuth } from "../../context/AuthContext";
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((state) => state.auth);
  const firstName = user?.fullName ? user.fullName.split(" ")[0] : "Guest";
  
  return (
    <>
      <header className="bg-[#1a73e8] text-white">
        <div className="container mx-auto px-6 lg:px-12 py-2 flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>Kirim ke: Jakarta Selatan</span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <p>📞 0800-1234-5678 (Gratis)</p>
            <p>🚀 Gratis ongkir di atas Rp 100.000</p>
          </div>
        </div>
      </header>

      <nav className="bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-6 py-4">
            <Link to="/" className="flex items-center gap-3 shrink-0">
              <div className="bg-[#1a73e8] w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold">
                B
              </div>

              <span className="font-bold text-xl text-gray-800">BeliMudah</span>
            </Link>

            <div className="flex-1">
              <input
                type="text"
                placeholder="Cari produk, merek, kategori..."
                className="
            w-full
            px-4
            py-3
            bg-gray-100
            border
            border-gray-200
            rounded-xl
            outline-none
            focus:border-blue-500
            focus:ring-2
            focus:ring-blue-100
          "
              />
            </div>

            <div className="flex items-center gap-5">
              <button className="hover:text-blue-600 transition">
                <Bell size={20} />
              </button>

              <Link
                to="/profile/edit-profile"
                className="flex items-center gap-2 hover:text-blue-600 transition">
                <User size={20} />
                <span className="hidden lg:block">{firstName}</span>
              </Link>

              <Link
                to="/profile/wishlist"
                className="hover:text-red-500 transition">
                <Heart size={20} />
              </Link>

              <Link to="/cart" className="hover:text-blue-600 transition">
                <ShoppingCart size={20} />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200">
          <div className="container mx-auto px-6 lg:px-12">
            <ul className="flex items-center gap-8 py-3 overflow-x-auto whitespace-nowrap text-sm justify-center">
              <li className="flex items-center gap-2 font-medium cursor-pointer">
                <Menu size={16} />
                <span>Semua Kategori</span>
                <ChevronDown size={16} />
              </li>

              <li>
                <Link
                  to="/browse/elektronik"
                  className="text-gray-600 hover:text-blue-600">
                  💻 Elektronik
                </Link>
              </li>

              <li>
                <Link
                  to="/browse/fashion"
                  className="text-gray-600 hover:text-blue-600">
                  👗 Fashion
                </Link>
              </li>

              <li>
                <Link
                  to="/browse/rumah-dapur"
                  className="text-gray-600 hover:text-blue-600">
                  🏠 Rumah & Dapur
                </Link>
              </li>

              <li>
                <Link
                  to="/browse/kecantikan"
                  className="text-gray-600 hover:text-blue-600">
                  💄 Kecantikan
                </Link>
              </li>

              <li>
                <Link
                  to="/browse/olahraga"
                  className="text-gray-600 hover:text-blue-600">
                  ⚽ Olahraga
                </Link>
              </li>

              <li>
                <Link
                  to="/browse/buku"
                  className="text-gray-600 hover:text-blue-600">
                  📚 Buku & Alat Tulis
                </Link>
              </li>

              <li>
                <Link to="/promo" className="font-semibold text-red-600">
                  🔥 Promo
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
