import { Edit } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const EditProfilePage = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <div>
          <h1 className="font-semibold text-2xl">Pengaturan Profil</h1>
        </div>
        <div className="flex gap-2 text-blue-500 border border-blue-500 px-3 py-1.5 rounded-xl  ">
          <Edit />
          <p>Simpan</p>
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl">
        <div className="flex gap-2 items-center">
          <div className="w-20 h-20 flex items-center justify-center bg-blue-100 rounded-full text-blue-500 font-bold text-2xl">
            <p>B</p>
          </div>
          <div>
            <p className=" text-blue-500 font-medium">ganti foto profil</p>
          </div>
        </div>
        <form class="flex flex-col text-gray-500 gap-6">
          <div class="label-input flex flex-col">
            <label for="fullname">Nama Lengkap</label>
            <input className="bg-blue-50 border border-gray-300 px-3 py-1.5 rounded-xl" type="text" id="fullname" name="fullname" />
          </div>
          <div class="label-input flex flex-col">
            <label for="email">Email</label>
            <input className="bg-blue-50 border border-gray-300 px-3 py-1.5 rounded-xl" type="email" id="email" name="email" />
          </div>
          <div class="label-input flex flex-col">
            <label for="telephone">Nomor Telepon</label>
            <input className="bg-blue-50 border border-gray-300 px-3 py-1.5 rounded-xl" type="text" id="telephone" name="telephone" />
          </div>
          <div class="label-input flex flex-col">
            <label for="birth-date">Tanggal Lahir</label>
            <input className="bg-blue-50 border border-gray-300 px-3 py-1.5 rounded-xl" type="date" id="birth-date" name="birth-date" />
          </div>
          <div class="label-input flex flex-col">
            <label for="gender">Jenis Kelamin</label>
            <input className="bg-blue-50 border border-gray-300 px-3 py-1.5 rounded-xl" type="text" id="gender" />
          </div>
        </form>
      </div>
      <div className="flex flex-col gap-4 bg-white p-4 rounded-xl">
        <p className="font-semibold text-xl">Keamanan Akun</p>
        <Link to="">Ubah Kata Sandi</Link>
        <Link to="">Aktifkan Verifikasi 2 Langkah</Link>
      </div>
    </div>
  );
};

export default EditProfilePage;
