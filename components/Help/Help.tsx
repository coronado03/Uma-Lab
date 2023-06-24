import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function Help() {
  const [navbar, setNavbar] = useState(false);
  
  return (
    <div className='bg-white py-44'>

        <div 
        className='flex flex-col gap-y-6 bg-[#F5F5F5] text-black w-full'>
            <h1 className='font-bold uppercase'>Who do we help?</h1>

            <p>UMA-LAB is your reliable partner in the development of your business, of any scale. We strive to earn your trust, so we provide advice and guidance on important and necessary SEO work, and offer support for existing businesses.</p>
        </div>

    </div>
  );
}

export default Help;

