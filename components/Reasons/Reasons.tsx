import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ReasonsGrid from './ReasonsGrid';

function Reasons() {
  
  return (
    <div className='flex flex-col gap-y-8 bg-black text-white mt-32'>
        <h1 className='text-center font-semibold text-4xl py-10'>Причини працювати з UMA-LAB</h1>

        <ReasonsGrid>        
        
        <div className='flex flex-col gap-y-5 items-center text-center'>
            <Image
            src="/Reasons/1.png"
            width={110}
            height={110}
            alt="logo"
            className="rounded-full"/>
            <h3 className='font-semibold text-lg'>Покращує вашу присутність онлайн</h3>
            <p className='text-base'>За допомогою професійного веб-дизайну та соціальних медіа, ми покращуємо вашу онлайн-присутність і залучаємо більше клієнтів</p>
        </div>

        <div className='flex flex-col gap-y-5 items-center text-center'>
            <Image
            src="/Reasons/2.png"
            width={110}
            height={110}
            alt="logo"
            className="rounded-full"/>
            <h3 className='font-semibold text-lg'>Покращує вашу присутність онлайн</h3>
            <p className='text-base'>За допомогою професійного веб-дизайну та соціальних медіа, ми покращуємо вашу онлайн-присутність і залучаємо більше клієнтів</p>
        </div>


        <div className='flex flex-col gap-y-5 items-center text-center'>
            <Image
            src="/Reasons/3.png"
            width={110}
            height={110}
            alt="logo"
            className="rounded-full"/>
            <h3 className='font-semibold text-lg'>Покращує вашу присутність онлайн</h3>
            <p className='text-base'>За допомогою професійного веб-дизайну та соціальних медіа, ми покращуємо вашу онлайн-присутність і залучаємо більше клієнтів</p>
        </div>

        <div className='flex flex-col gap-y-5 items-center text-center'>
            <Image
            src="/Reasons/4.png"
            width={110}
            height={110}
            alt="logo"
            className="rounded-full"/>
            <h3 className='font-semibold text-lg'>Покращує вашу присутність онлайн</h3>
            <p className='text-base'>За допомогою професійного веб-дизайну та соціальних медіа, ми покращуємо вашу онлайн-присутність і залучаємо більше клієнтів</p>
        </div>

        <div className='flex flex-col gap-y-5 items-center text-center'>
            <Image
            src="/Reasons/5.png"
            width={110}
            height={110}
            alt="logo"
            className="rounded-full"/>
            <h3 className='font-semibold text-lg'>Покращує вашу присутність онлайн</h3>
            <p className='text-base'>За допомогою професійного веб-дизайну та соціальних медіа, ми покращуємо вашу онлайн-присутність і залучаємо більше клієнтів</p>
        </div>

        <div className='flex flex-col gap-y-5 items-center text-center'>
            <Image
            src="/Reasons/6.png"
            width={110}
            height={110}
            alt="logo"
            className="rounded-full"/>
            <h3 className='font-semibold text-lg'>Покращує вашу присутність онлайн</h3>
            <p className='text-base'>За допомогою професійного веб-дизайну та соціальних медіа, ми покращуємо вашу онлайн-присутність і залучаємо більше клієнтів</p>
        </div>
</ReasonsGrid>


    </div>
  );
}

export default Reasons;

