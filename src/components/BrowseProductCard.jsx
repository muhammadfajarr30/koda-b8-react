import React from 'react'

const BrowseProductCard = ({thumbnail, rating, stocks, salePrice, regularPrice, storeName,brand}) => {
return (
    <div className="item-col flash-item1 bg-white rounded-xl shadow-lg">
      <div className="item-thumbnail relative">
        <span className="disc-icon bg-[#DC2626] rounded-2xl px-2 py-1 text-white absolute top-3 left-2  ">-31%</span>
        <img
          className="w-full rounded-t-xl"
          src={`/images/${thumbnail}.png`}
          alt=""
        />
      </div>
      <div className="item-description flex flex-col gap-2 p-4">
        <p className="text-gray-500">{storeName}</p>
        <p className=" font-medium">{brand}</p>
        <div className="item-rating">
          <img src="./images/five-star.png" alt="" />
          <span className="text-gray">{rating} ({stocks}) </span>
        </div>
        <div className="item-price flex gap-1.5 items-center">
          <span>{salePrice}</span>
          <span className=" text-sm text-gray-500 line-through">{regularPrice}</span>
        </div>
      </div>
    </div>
  );
}

export default BrowseProductCard