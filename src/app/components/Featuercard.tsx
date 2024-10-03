 import Image from 'next/image'
 import React from 'react'
interface PropsTypes {
  img:string,
  title:string,
  desc:string
}

const Featuercard = ({img,title,desc}:PropsTypes) => {
  return (
    <div className='flex gap-4 '>
        <Image className="h-[50px] w-auto"
         src={img}
          width={200}
          height={200}
           alt="icon"/>
      <div className='space-y-1'>
        <h2 className='font-medium text-xl uppercase'>{title}</h2>
        <p className='text-gray-600 text-[14px]'>{desc}</p>
      </div>
    </div>
  )
}

export default Featuercard
