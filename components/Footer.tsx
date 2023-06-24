import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function Footer() {
  
  return (
    <div className='flex bg-white'>

        <div className='flex flex-row self-center'>

            <Image
            src="/Footer/facebook.png"
            width={40}
            height={110}
            alt="logo"
            className="rounded-full"/>


            <Image
            src="/Footer/instagram.png"
            width={40}
            height={110}
            alt="logo"
            className="rounded-full"/>

        </div>

    </div>
  );
}

export default Footer;

