import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function Qualities() {
  
    const [isClicked, setIsClicked] = useState([false, false, false]);

    const handleClick = (index:number) => {
        const updatedIsClicked = [...isClicked];
        updatedIsClicked[index] = !updatedIsClicked[index];
        setIsClicked(updatedIsClicked);
      };



  return (
    <div className='flex bg-[#EEEEEE] text-black'>
    
    <div className='flex flex-col gap-y-0.5 w-3/5 mx-auto my-20'>

        <div className='flex flex-col py-6 px-10 bg-white group transition-all duration-500 ease-in'>


            <div className='flex flex-row items-center justify-between'>
                <h1 className='font-semibold text-2xl'>High Quality</h1>
                <button
                className='rounded-full p-1.5 group-hover:bg-[#EEEEEE] transition-all'
                onClick={()=> handleClick(0)}>
                <Image src="/close.png" className={isClicked[0] ? 'transition-all' : 'transition-all rotate-45'} width={30} height={30} alt="logo" />

                </button>
            </div>
                <p 
                className={isClicked[0]  ? 'mt-4 transition-all' : 'transition-all hidden'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer dapibus elit quis risus viverra, vitae viverra quam
                fringilla. Nunc ut ligula nec metus volutpat aliquam. Fusce
                finibus aliquam enim sed eleifend.
                </p>

        </div>

        <div className='flex flex-col py-6 px-10 bg-white group transition-all duration-500 ease-in'>


            <div className='flex flex-row items-center justify-between'>
                <h1 className='font-semibold text-2xl'>High Quality</h1>
                <button
                className='rounded-full p-1.5 group-hover:bg-[#EEEEEE] transition-all'
                onClick={()=> handleClick(1)}>
                <Image src="/close.png" className={isClicked[1] ? 'transition-all' : 'transition-all rotate-45'} width={30} height={30} alt="logo" />

                </button>
            </div>
                <p 
                className={isClicked[1]  ? 'mt-4 transition-all' : 'transition-all hidden'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer dapibus elit quis risus viverra, vitae viverra quam
                fringilla. Nunc ut ligula nec metus volutpat aliquam. Fusce
                finibus aliquam enim sed eleifend.
                </p>

        </div>

        <div className='flex flex-col py-6 px-10 bg-white group transition-all duration-500 ease-in'>


            <div className='flex flex-row items-center justify-between'>
                <h1 className='font-semibold text-2xl'>High Quality</h1>
                <button
                className='rounded-full p-1.5 group-hover:bg-[#EEEEEE] transition-all'
                onClick={()=> handleClick(2)}>
                <Image src="/close.png" className={isClicked[2] ? 'transition-all' : 'transition-all rotate-45'} width={30} height={30} alt="logo" />

                </button>
            </div>
                <p 
                className={isClicked[2]  ? 'mt-4 transition-all' : 'transition-all hidden'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer dapibus elit quis risus viverra, vitae viverra quam
                fringilla. Nunc ut ligula nec metus volutpat aliquam. Fusce
                finibus aliquam enim sed eleifend.
                </p>

        </div>


    </div>


    </div>
  );
}

export default Qualities;

