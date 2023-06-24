import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ReasonsGrid from './ReasonsGrid';

function Reasons() {
  
  return (
    <div className='flex flex-col gap-y-8 bg-[#E6E6E6] text-black'>
        <h1 className='text-center font-semibold text-4xl py-10'>Причини працювати з UMA-LAB</h1>

        <ReasonsGrid>        
        
        <div className='flex flex-col gap-y-5 items-center text-center'>
            <Image
            src="/Reasons/tild3565-3462-4634-a266-326430386531__photo.png"
            width={110}
            height={110}
            alt="logo"
            className="rounded-full"/>
            <h3 className='font-semibold text-lg'>Покращує вашу присутність онлайн</h3>
            <p className='text-base'>За допомогою професійного веб-дизайну та соціальних медіа, ми покращуємо вашу онлайн-присутність і залучаємо більше клієнтів</p>
        </div>

        <div className='flex flex-col gap-y-5 items-center text-center'>
            <Image
            src="/Reasons/tild3838-3036-4535-b962-353764316531__photo.png"
            width={110}
            height={110}
            alt="logo"
            className="rounded-full"/>
            <h3 className='font-semibold text-lg'>Покращує вашу присутність онлайн</h3>
            <p className='text-base'>За допомогою професійного веб-дизайну та соціальних медіа, ми покращуємо вашу онлайн-присутність і залучаємо більше клієнтів</p>
        </div>


        <div className='flex flex-col gap-y-5 items-center text-center'>
            <Image
            src="/Reasons/tild3930-3362-4034-b465-613636366336__photo.png"
            width={110}
            height={110}
            alt="logo"
            className="rounded-full"/>
            <h3 className='font-semibold text-lg'>Покращує вашу присутність онлайн</h3>
            <p className='text-base'>За допомогою професійного веб-дизайну та соціальних медіа, ми покращуємо вашу онлайн-присутність і залучаємо більше клієнтів</p>
        </div>

        <div className='flex flex-col gap-y-5 items-center text-center'>
            <Image
            src="/Reasons/tild6261-3739-4639-b731-656338393562__photo.png"
            width={110}
            height={110}
            alt="logo"
            className="rounded-full"/>
            <h3 className='font-semibold text-lg'>Покращує вашу присутність онлайн</h3>
            <p className='text-base'>За допомогою професійного веб-дизайну та соціальних медіа, ми покращуємо вашу онлайн-присутність і залучаємо більше клієнтів</p>
        </div>

        <div className='flex flex-col gap-y-5 items-center text-center'>
            <Image
            src="/Reasons/tild6338-3938-4635-b462-373433363337__photo.png"
            width={110}
            height={110}
            alt="logo"
            className="rounded-full"/>
            <h3 className='font-semibold text-lg'>Покращує вашу присутність онлайн</h3>
            <p className='text-base'>За допомогою професійного веб-дизайну та соціальних медіа, ми покращуємо вашу онлайн-присутність і залучаємо більше клієнтів</p>
        </div>

        <div className='flex flex-col gap-y-5 items-center text-center'>
            <Image
            src="/Reasons/tild6533-3962-4434-b761-663038363765__photo.png"
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

