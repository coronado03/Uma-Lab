import Image from 'next/image';

import Link from 'next/link';
import { useState } from 'react';

import { motion } from 'framer-motion';

const ReasonsCarousel = ({ items }: any) => {

    const [currentItem, setCurrentItem] = useState(0);
  
    const nextItem = () => {
      setCurrentItem((prevItem) => (prevItem + 1) % items.length);
    };
  
    const prevItem = () => {
      setCurrentItem((prevItem) => (prevItem - 1 + items.length) % items.length);
    };

  return (
    <div className="py-28 mx-auto pb-48 md:hidden w-full">
      <div className="relative">
        <div className="flex overflow-hidden h-96 items-center justify-center">
          {items.map((item: any, index: number) => (
            <motion.div
              key={index}
              className={`w-full flex flex-col ${
                index === currentItem ? 'opacity-100' : 'opacity-0 hidden'
              } absolute transition-opacity duration-500 ${
                index === currentItem ? 'translate-x-0' : 'translate-x-full'
              }`}
              initial={{ opacity: 1 }}
              animate={{
                opacity: index === currentItem ? 1 : 0,
              }}
              transition={{ duration: 0.5 }}
            >
              {/* Display your item content here */}
              <img src={item.imageUrl} alt={item.title} className="mx-auto" />
              
              <div className='flex flex-col'>
                <h2 className='text-center'>{item.title}</h2>
                <p className='text-base text-gray-400 text-center'>{item.paragraph}</p>
              </div>

            </motion.div>
          ))}
        </div>
        <button
          className="absolute top-1/2 transform -translate-y-1/2 left-4 p-2 bg-black bg-opacity-50 text-white border-none cursor-pointer"
          onClick={prevItem}
        >
            <Image
            src="/Reasons/arrow.png"
            width={25}
            height={200}
            alt="logo"
            className="rotate-180 rounded-full invert mb-[-70px]"/>
        </button>
        <button
          className="absolute top-1/2 transform -translate-y-1/2 right-4 p-2 bg-black bg-opacity-50 text-white border-none cursor-pointer"
          onClick={nextItem}
        >
            <Image
            src="/Reasons/arrow.png"
            width={25}
            height={200}
            alt="logo"
            className="rounded-full invert mb-[-70px]"/>
        </button>
      </div>
    </div>
  );
}

export default ReasonsCarousel;
