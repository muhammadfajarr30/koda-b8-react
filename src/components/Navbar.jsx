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

const Navbar = () => {
  return (
    <>
      <header className="bg-[#1a73e8] text-white px-50 py-1.25">
        <div className="topbar flex items-center justify-between">
          <div className="flex items-center">
            <MapPin size={16} />
            <span>Kirim ke: Jakarta Selatan</span>
          </div>
          <div className="flex items-center gap-3 text">
            <p>📞 0800-1234-5678 (Gratis)</p>
            <p>🚀 Gratis ongkir di atas Rp 100.000</p>
          </div>
        </div>
      </header>

      <nav>
        <div className="top-nav grid grid-cols-4 px-50 py-2">
          <Link className="icon-beli-mudah flex items-center gap-3" to="/">
            <div className="icon bg-[#1a73e8] p-3 rounded-lg size-9 flex items-center justify-center text-white">
              B
            </div>
            <span>BeliMudah</span>
          </Link>
          <div className="search-box col-span-2">
            <input
              type="text"
              placeholder="Cari produk, merek, kategori..."
              className="w-full bg-[#f3f4f6] px-4 py-2 rounded-lg border border-[#0000001a]"
            />
          </div>
          <ul className="nav-items flex items-center gap-4 place-content-end">
            <li className="nav-item">
              <button className="flex items-center">
                <Bell size={16} />
              </button>
            </li>
            <li className="nav-item">
              <button className="flex items-center gap-2">
                <User size={16} />
                <span>Budi</span>
              </button>
            </li>
            <li className="nav-item">
              <button className="flex items-center">
                <Heart size={16} />
              </button>
            </li>
            <li className="nav-item">
              <button className="flex items-center">
                <ShoppingCart size={16} />
              </button>
            </li>
          </ul>
        </div>
        <hr />

        <div className="btm-nav border border-b border-[#0000001A] p-3">
          <ul className="flex items-center justify-center gap-5">
            <li className="nav-item flex items-center gap-1">
              <Menu size={16} />
              <span>Semua Kategori</span>
              <ChevronDown size={16} />
            </li>
            <li className="nav-item flex items-center gap-2 text-gray-500">
              <Link>💻 Elektronik</Link>
            </li>
            <li className="nav-item flex items-center gap-2 text-gray-500">
              <Link>👗 Fashion</Link>
            </li>
            <li className="nav-item flex items-center gap-2 text-gray-500">
              <Link>🏠 Rumah & Dapur</Link>
            </li>
            <li className="nav-item flex items-center gap-2 text-gray-500">
              <Link>💄 Kecantikan</Link>
            </li>
            <li className="nav-item flex items-center gap-2 text-gray-500">
              <Link>⚽ Olahraga</Link>
            </li>
            <li className="nav-item flex items-center gap-2 text-gray-500">
              <Link>📚 Buku & Alat Tulis</Link>
            </li>
            <li className="nav-item flex items-center gap-2 text-red-700">
              <Link>🔥 Promo</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
