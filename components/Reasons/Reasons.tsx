import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import ReasonsGrid from './ReasonsGrid';
import { useInView, motion } from "framer-motion"


function Reasons() {
    const ref = useRef(null);
    const inView = useInView(ref);
    const ref2 = useRef(null);
    const inView2 = useInView(ref2)



  return (
    <div className='flex flex-col gap-y-8 bg-black text-white mt-32'>
        <h1 className='text-center font-semibold text-4xl py-10'>Цифровий успіх з UMA</h1>

        <ReasonsGrid>        
        
        <motion.div 
        initial={{opacity:0}}
        animate={inView ? {opacity:1} : {opacity:0}}
        transition={{ duration: 2 }}
        className='flex flex-col gap-y-2 items-center text-center'>
            <Image
            src="/Reasons/1.png"
            width={200}
            height={200}
            alt="logo"
            className="rounded-full mb-[-70px]"/>
            <h3 className='font-semibold text-lg'>Покращення вашої присутності онлайн</h3>
            <p 
            ref={ref}
            className='text-base text-gray-400'>За допомогою професійного веб-дизайну та соціальних медіа, ми покращуємо вашу онлайн-присутність і залучаємо більше клієнтів</p>
        </motion.div>

        <motion.div 
        initial={{opacity:0}}
        animate={inView ? {opacity:1} : {opacity:0}}
        transition={{ duration: 2 }} 
        className='flex flex-col gap-y-2 items-center text-center'>
            <Image
            src="/Reasons/2.png"
            width={200}
            height={200}
            alt="logo"
            className="rounded-full  mb-[-70px]"/>
            <h3 className='font-semibold text-lg'>Адміністрування сайту та соціальних мереж</h3>
            <p className='text-base text-gray-400'>Забезпечення безперебійної роботи веб-сайту та активної присутності в соціальних медіа для ефективної комунікації та залучення клієнтів</p>
        </motion.div>


        <motion.div 
        initial={{opacity:0}}
        animate={inView ? {opacity:1} : {opacity:0}}
        transition={{ duration: 2 }}
        className='flex flex-col gap-y-2 items-center text-center'>
            <Image
            src="/Reasons/3.png"
            width={200}
            height={200}
            alt="logo"
            className="rounded-full mb-[-70px]"/>
            <h3 className='font-semibold text-lg'>Підвищення свідомості про бренд</h3>
            <p className='text-base text-gray-400'>Креативний контент та стратегії брендингу, що привертають увагу, збільшують свідомість про ваш бренд</p>
        </motion.div>

        <motion.div 
        initial={{opacity:0}}
        animate={inView2 ? {opacity:1} : {opacity:0}}
        transition={{ duration: 2 }}
        className='flex flex-col gap-y-2 items-center text-center'>
            <Image
            src="/Reasons/4.png"
            width={200}
            height={200}
            alt="logo"
            className="rounded-full mb-[-70px]"/>
            <h3 className='font-semibold text-lg'>Цільовий трафік</h3>
            <p ref={ref2} className='text-base text-gray-400'>Розробка стратегії пошукової оптимізації та інших маркетингових каналів для приваблення цільового трафіку</p>
        </motion.div>

        <motion.div 
        initial={{opacity:0}}
        animate={inView2 ? {opacity:1} : {opacity:0}}
        transition={{ duration: 2 }}
        className='flex flex-col gap-y-2 items-center text-center'>
            <Image
            src="/Reasons/5.png"
            width={200}
            height={200}
            alt="logo"
            className="rounded-full mb-[-70px]"/>
            <h3 className='font-semibold text-lg'>Ефективна реклама</h3>
            <p className='text-base text-gray-400'>Таргетована реклама для досягнення максимальних результатів</p>
        </motion.div>

        <motion.div 
        initial={{opacity:0}}
        animate={inView2 ? {opacity:1} : {opacity:0}}
        transition={{ duration: 2 }} 
        className='flex flex-col gap-y-2 items-center text-center'>
            <Image
            src="/Reasons/6.png"
            width={200}
            height={200}
            alt="logo"
            className="rounded-full mb-[-70px]"/>
            <h3 className='font-semibold text-lg'>Збільшення конверсії</h3>
            <p className='text-base text-gray-400'>Оптимізація сайту та маркетингових стратегій, що підвищують конверсію веб-трафіку та залучають нових клієнтів</p>
        </motion.div>
</ReasonsGrid>


    </div>
  );
}

export default Reasons;

