import React from 'react'
import ProductCard from '../../components/ProductCard'

const wishllistItems = [
      {
    thumbnail: "headphone",
    storeName: "soundwave",
    brand: "Headphone Wireless Premium",
    rating: 4.8,
    stocks: 512,
    salePrice: 4500000,
    regularPrice: 650000,
  },
   {
    thumbnail: "sneakers",
    storeName: "SportPro",
    brand: "Sneakers Sport Runfast",
    rating: 4.8,
    stocks: 512,
    salePrice: 4500000,
    regularPrice: 650000,
  },
]

const WishlistPage = () => {
  return (
    <div className='grid grid-cols-4 gap-2'>
    {wishllistItems.map((e,i)=>(<ProductCard
    key={e.thumbnail}
    thumbnail={e.thumbnail}
    salePrice={e.salePrice}
    regularPrice={e.regularPrice}
    brand={e.brand}
    storeName={e.storeName}
    idx={i+1}
    rating={e.rating}
    stocks={e.stocks}
    />))}    
    </div>
  )
}

export default WishlistPage