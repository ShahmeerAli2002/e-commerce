import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { MdStarBorderPurple500 } from "react-icons/md";
import { useAppDispatch } from '../redux/hooks';
import { addTocart } from '../redux/feature/cartSlice';

export interface IProduct {
  id: number;
  image: string;
  name: string;
  price:number;
  category:string;
  sales:boolean|undefined;
  ageGroup:string;
  
 
}




const ProductCard = ({id,image,name,price,sales}:IProduct) => {

  const router = useRouter();
  const dispatch = useAppDispatch();


      const getRating = () =>{
          const randomNumber =(min:number,max:number)=>{
            return Math.floor(Math.random() * (max - min + 1)) + min;
          };
          const stars = randomNumber(0, 5);
          return (
              <div className='flex justify-center text-accent pt-4 pb-2'>
                  {[...Array(5)].map((_, index) => (
                      <MdStarBorderPurple500 key={index} className={index < stars ? 'text-yellow-400' : ''} />
                  ))}
              </div>
          );
      }
      const addProductTocart = (e: React.FormEvent) => {
        e.stopPropagation();
        const payload = {
          id: id,
          image: image,
          name: name,
          price: price,
          quantity: 1,
        };
        dispatch(addTocart(payload));
      }

    return (
      <div className="group cursor-pointer relative" onClick={() => router.push(`/details/${id}`)}>
         <div className="relative">
         <Image className='w-full' src={image} alt={name} width={1000} height={1142} />
        
        
   {sales &&( <div className='bg-red-600 inline-block absolute top-0 left-0 text-[14px] text-white rounded-md px-2 py-[2px] m-4'>SALE</div>
)}

          </div> 
      
          <div className="absolute top-0 left-0 w-full h-full bg-[#00000050] opacity-0 transition-opacity duration-500 group-hover:opacity-100 cursor-pointer">
    <div className="absolute bottom-0 mb-4 left-[50%] translate-x-[-50%] flex gap-2">
      <div className="bg-white w-[50px] h-[50px] text-[26px] grid place-items-center">
        <AiOutlineHeart />
      </div>
      <div className="bg-white w-[50px] h-[50px] text-[26px] grid place-items-center"
      onClick={(addProductTocart) }>
      
      
        <AiOutlineShoppingCart />

      </div>
    </div>
</div>

{getRating()}
<h2 className='font-medium pb-3 hover:text-accent'>{name}</h2>
<p className='text-gray-600 font-light'>${price}.00</p>

      </div>
    )
}

export default ProductCard