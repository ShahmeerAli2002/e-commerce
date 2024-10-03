"use client"
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';

import Data from '../../utils/ProductData';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { MdStarBorderPurple500 } from 'react-icons/md';
import { MdStarBorder } from "react-icons/md"
import { useAppDispatch } from '../../redux/hooks';
import { addTocart } from '../../redux/feature/cartSlice';

interface ProductData {
  id: number;
  name: string;
  price: number;
  description: string;
  img: string;
  category: string[];
  rating: number;
  reviews: number;
}

const ProductPage = () => {
  const params = useParams();
  const dispatch = useAppDispatch();

  const id = params?.id as string;
  const [productData, setProductData] = useState<ProductData | null>(null);

  useEffect(() => {
    if (id) {
      const selectedProduct = Data.find((item) => item.id.toString() === id);
      if (selectedProduct) {
        const productData: ProductData = {
          id: selectedProduct.id,
          name: selectedProduct.name,
          price: selectedProduct.price,
          description: selectedProduct.description,
          img: selectedProduct.image,
          category: [selectedProduct.category],
          rating: 0,
          reviews: 0
        };
        setProductData(productData);
      } else {
        setProductData(null);
      }
    }
  }, [id]);

  if (!productData) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    if (productData) {
      dispatch(addTocart({
        id: productData.id,
        name: productData.name,
        image: productData.img,
        price: productData.price,
        quantity: 1
      }));
    }
  };

  return (
    <div className="container pt-8">
      <div className="bg-gray-100 py-4">
        <div className="container flex gap-4 items-center text-gray-500">
          <a href="/" className="cursor-pointer hover:text-accent">
            Home
          </a>
          <div className="w-[30px] h-[2px] bg-gray-400" />
          <p className="capitalize">{productData.category[0]}</p>
          <div className="w-[30px] h-[2px] bg-gray-400" />
          <p>{productData.name}</p>
        </div>
      </div>

      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center gap-2">
          <span className="text-yellow-500 text-xl">★ {productData.rating}</span>
          <span className="text-gray-500">({productData.reviews} reviews)</span>
        </div>

        <div className="flex gap-4 items-center">


          <div className="bg-white w-[50px] h-[50px] text-[26px] grid place-items-center cursor-pointer">


          </div>
        </div>
      </div>

      <div className="container pt-8">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <Image
              className="w-full h-full"
              src={productData.img}
              alt={productData.name}
              width={1000}
              height={1200}
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold">{productData.name}</h1>
            <p className="text-xl font-semibold text-gray-700">${productData.price}</p>
            <div className="flex items-center gap-2 pt-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                  <span key={index} className="text-yellow-500">
                    {index < Math.floor(productData.rating) ? <MdStarBorderPurple500 /> : <MdStarBorder />}
                  </span>
                ))}
              </div>
              <span className="text-yellow-500">{productData.rating}</span>
              <span className="text-gray-500">({productData.reviews} reviews)</span>
            </div>

            <div className="pt-4">
              <p className="text-gray-600">Category: {productData.category.join(', ')}</p>
            </div>
            <button
              className="mt-6 px-4 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700"
              onClick={handleAddToCart}>
            
              Add to Cart
            </button>
            <div className="pt-8">
              <h2 className="text-2xl font-bold">Product Details</h2>
              <p className="text-gray-600 pt-4">{productData.description}</p>
            </div>
            <div className="pt-8">
              <h3 className="text-xl font-bold">Share this product</h3>
              <div className="flex gap-4 pt-2">
                <FaFacebook className="text-2xl text-blue-600 cursor-pointer" />
                <FaTwitter className="text-2xl text-blue-400 cursor-pointer" />
                <FaInstagram className="text-2xl text-pink-600 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductPage;
