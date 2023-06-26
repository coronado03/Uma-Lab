import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ReasonsGrid from './ReasonsGrid';

function Reasons() {
  
  return (
    <div className='flex flex-col gap-y-8 bg-black text-white mt-32'>
        <h1 className='text-center font-semibold text-4xl py-10'>Цифровий успіх з UMA</h1>

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
            <h3 className='font-semibold text-lg'>Адміністрування сайту та соціальних мереж</h3>
            <p className='text-base'>Забезпечення безперебійної роботи веб-сайту та активної присутності в соціальних медіа для ефективної комунікації та залучення клієнтів</p>
        </div>


        <div className='flex flex-col gap-y-5 items-center text-center'>
            <Image
            src="/Reasons/3.png"
            width={110}
            height={110}
            alt="logo"
            className="rounded-full"/>
            <h3 className='font-semibold text-lg'>Підвищення свідомості про бренд</h3>
            <p className='text-base'>Креативний контент та стратегії брендингу, що привертають увагу, збільшують свідомість про ваш бренд</p>
        </div>

        <div className='flex flex-col gap-y-5 items-center text-center'>
            <Image
            src="/Reasons/4.png"
            width={110}
            height={110}
            alt="logo"
            className="rounded-full"/>
            <h3 className='font-semibold text-lg'>Цільовий трафік</h3>
            <p className='text-base'>Розробка стратегії пошукової оптимізації та інших маркетингових каналів для приваблення цільового трафіку</p>
        </div>

        <div className='flex flex-col gap-y-5 items-center text-center'>
            <Image
            src="/Reasons/5.png"
            width={110}
            height={110}
            alt="logo"
            className="rounded-full"/>
            <h3 className='font-semibold text-lg'>Ефективна реклама</h3>
            <p className='text-base'>Таргетована реклама для досягнення максимальних результатів</p>
        </div>

        <div className='flex flex-col gap-y-5 items-center text-center'>
            <Image
            src="/Reasons/6.png"
            width={110}
            height={110}
            alt="logo"
            className="rounded-full"/>
            <h3 className='font-semibold text-lg'>Збільшення конверсії</h3>
            <p className='text-base'>Оптимізація сайту та маркетингових стратегій, що підвищують конверсію веб-трафіку та залучають нових клієнтів</p>
        </div>
</ReasonsGrid>


    </div>
  );
}

export default Reasons;

