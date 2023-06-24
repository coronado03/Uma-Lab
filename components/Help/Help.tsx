import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function Help() {
  const [navbar, setNavbar] = useState(false);
  
  return (
    <div className='bg-white py-40 flex justify-center'> {/* Added "justify-center" class */}
      <div className='flex flex-col gap-y-6 bg-[#F5F5F5] text-black w-3/5 px-4 py-10'> {/* Added "max-w-lg" and "px-4" classes */}
        <h1 className='font-semibold uppercase text-4xl mx-10'>Who do we help?</h1>
        <p className='mx-10'>UMA-LAB is your reliable partner in the development of your business, of any scale. We strive to earn your trust, so we provide advice and guidance on important and necessary SEO work, and offer support for existing businesses.</p>
      </div>
    </div>
  );
}

export default Help;