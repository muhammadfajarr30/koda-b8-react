import {
  Headset,
  Mail,
  MapPin,
  Phone,
  RefreshCcw,
  Shield,
  Truck,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-gray-400 px-50">
      <ul className="top-footer-benefit grid grid-cols-4 py-5">
        <li className="footer-benefit flex items-center gap-3">
          <div className="p-3 bg-[#1A73E833] rounded-full">
            <Truck size={16} color="#1A73E8" />
          </div>
          <div className="table">
            <h5 className="text-white">Gratis Ongkir</h5>
            <span className="">Pembelian di atas Rp 100.000</span>
          </div>
        </li>
        <li className="footer-benefit flex items-center gap-3">
          <div className="p-3 bg-[#1A73E833] rounded-full">
            <Shield size={16} color="#1A73E8" />
          </div>
          <div>
            <h5 className="text-white">Pembayaran Aman</h5>
            <span className="">SSL terenskripsi 256-bit</span>
          </div>
        </li>
        <li className="footer-benefit flex items-center gap-3">
          <div className="p-3 bg-[#1A73E833] rounded-full">
            <RefreshCcw size={16} color="#1A73E8" />
          </div>
          <div className="">
            <h5 className="text-white">Pengembalian Mudah</h5>
            <span className="">30 hari pengembalian gratis</span>
          </div>
        </li>
        <li className="footer-benefit flex items-center gap-3">
          <div className="p-3 bg-[#1A73E833] rounded-full">
            <Headset size={16} color="#1A73E8" />
          </div>
          <div className="">
            <h5 className="text-white">Dukungan 24/7</h5>
            <span className="">Bantuan kapan saja</span>
          </div>
        </li>
      </ul>
      <hr className="hr-gray-dark -mx-50" />

      <div className="main-footer grid grid-cols-4 pt-10 pb-14">
        <div className="flex flex-col gap-2">
          <div className="icon-beli-mudah flex items-center gap-3">
            <div className="icon bg-[#1a73e8] p-3 rounded-lg size-9 flex items-center justify-center text-white">
              B
            </div>
            <span className="flex text-white">BeliMudah</span>
          </div>
          <p className="">
            Platform belanja online terpercaya dengan ribuan produk pilihan.
            Belanja mudah, aman, dan menyenangkan.
          </p>
          <ul className="social-media flex">
            <li className="flex">
              <a href="#">
                <img
                  className="social-media-item bg-gray"
                  src="./images/facebook.svg"
                  alt="Facebook"
                />
              </a>
            </li>
            <li className="flex">
              <a href="#">
                <img
                  className="social-media-item bg-gray"
                  src="./images/instagram.svg"
                  alt="Instagram"
                />
              </a>
            </li>
            <li className="flex">
              <a href="#">
                <img
                  className="social-media-item bg-gray"
                  src="./images/twitter.svg"
                  alt="Twitter"
                />
              </a>
            </li>
            <li className="flex">
              <a href="#">
                <img
                  className="social-media-item bg-gray"
                  src="./images/youtube.svg"
                  alt="YouTube"
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-column flex flex-col gap-3">
          <h4 className="text-white">Layanan</h4>
          <ul className="list-none flex flex-col gap-2">
            <li>
              <a className=" text-decoration-none" href="#">
                Tentang Kami
              </a>
            </li>
            <li>
              <a className=" text-decoration-none" href="#">
                Karir
              </a>
            </li>
            <li>
              <a className=" text-decoration-none" href="#">
                Blog
              </a>
            </li>
            <li>
              <a className=" text-decoration-none" href="#">
                Program Afiliasi
              </a>
            </li>
            <li>
              <a className=" text-decoration-none" href="#">
                Jual di BeliMudah
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-column flex flex-col gap-3">
          <h4 className="text-white">Bantuan</h4>
          <ul className="list-none flex flex-col gap-2">
            <li>
              <a className=" text-decoration-none" href="#">
                Cara Belanja
              </a>
            </li>
            <li>
              <a className=" text-decoration-none" href="#">
                Kebijakan Pengembalian
              </a>
            </li>
            <li>
              <a className=" text-decoration-none" href="#">
                Lacak Pesanan
              </a>
            </li>
            <li>
              <a className=" text-decoration-none" href="#">
                FAQ
              </a>
            </li>
            <li>
              <a className=" text-decoration-none" href="#">
                Hubungi Kami
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-column flex flex-col gap-3">
          <h4 className="text-white">Kontak</h4>
          <ul className="list-none flex flex-col gap-2">
            <li className="flex items-center gap-2">
              <MapPin size={16} />
              <span className="table-cell cell-middle ">
                Jl. Sudirman No. 1, Jakarta Selatan, DKI Jakarta 12190
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} />
              <span className="table-cell cell-middle ">
                0800-1234-5678 (Gratis)
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} />
              <span className="table-cell cell-middle ">
                bantuan@belimudah.id
              </span>
            </li>
          </ul>
          <div className="subscribe-form flex flex-col gap-3">
            <div className="text-white">Newsletter</div>
            <div className="flex gap-2">
              <input
                className="subscribe-input bg-gray text-white"
                type="email"
                name=""
                id=""
                placeholder="Email kamu"
              />
              <button
                className="subscribe-btn text-white bg-blue"
                type="submit">
                Langganan
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className="hr-gray-dark -mx-50" />

      <div className="footer-bottom flex justify-between py-2 text-sm">
        <div className="">2026 BeliMudah. Seluruh hak cipta dilindungi.</div>
        <div className="footer-links flex gap-4">
          <Link className="text-decoration-none">Kebijakan Privasi</Link>
          <Link className="text-decoration-none">Syarat dan Ketentuan</Link>
          <Link className="text-decoration-none">Admin</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
