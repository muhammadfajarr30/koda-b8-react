import { Edit, Trash } from "lucide-react";
import React from "react";

const AddressListPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <h1>Alamat Saya</h1>
        <button className="px-4 py-1 bg-blue-500 text-white rounded-xl">
          + Tambah Alamat
        </button>
      </div>
      <div className="flex flex-col">
        <div className="p-4 bg-white rounded-xl flex flex-col gap-2 border border-gray-300">
          <div className="flex justify-between">
            <div className="flex gap-2">
              <p>Kantor</p>
              
            </div>
            <div className="flex gap-2 text-gray-500">
              <Trash size={16} />
              <Edit size={16} />
            </div>
          </div>
          <div>
            <div className="flex gap-2 font-medium">
              <span>Budi Santoso</span>
              <span>0812-3456-7890</span>
            </div>
            <div className="text-gray-500">
              <p>Jl. Kebon Jeruk No. 15, RT.003/RW.002</p>
              <p>Jakarta Barat, DKI Jakarta 11530</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="p-4 bg-white rounded-xl flex flex-col gap-2 border border-gray-300">
          <div className="flex justify-between">
            <div className="flex gap-2">
              <p>Rumah</p>
              <span className=" p-0.5 bg-blue-500 text-white rounded-xl">
                Utama
              </span>
            </div>
            <div className="flex gap-2 text-gray-500">
              <Trash size={16} />
              <Edit size={16} />
            </div>
          </div>
          <div>
            <div className="flex gap-2 font-medium">
              <span>Budi Santoso</span>
              <span>0812-3456-7890</span>
            </div>
            <div className="text-gray-500">
              <p>Jl. Sudirman kav. 52-53</p>
              <p>Jakarta Selatan, DKI Jakarta 12190</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressListPage;
