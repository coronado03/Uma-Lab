import Image from 'next/image';

import Link from 'next/link';

function Footer() {
  return (
    <div className='w-full border-t'>
          <div className='flex bg-black justify-center flex-col lg:flex-row lg:gap-x-48 mx-auto text-white w-11/12 z-2 mb-10 pt-5' id="footer"> 
      <div className='lg:w-1/2'>
        <h1 className="sm:text-4xl text-3xl md:text-6xl font-semibold text-center lg:text-start self-center text-black text-stroke text-stroke lg:ml-5">наші контакти</h1>
      </div>

      <div className='self-center flex flex-row gap-y-40 text-center md:text-left'>

        <div className='text-lg font-semibold flex flex-row gap-y-3 gap-x-7'>
          <div className=''>
            <p>+38 0...</p>
            <p>info@uma-lub.com</p>
          </div>

          <div className='flex gap-x-2 justify-end md:justify-normal items-center'>
            <Link target="_blank"
            href="https://www.facebook.com/profile.php?id=100093691271416">
              <Image
              src="/Footer/facebook-icon.svg"
              width={30}
              height={30}
              alt="logo"
              className="invert just"
              />
            </Link>

            <Link target="_blank"
            href="https://www.instagram.com/_uma_lab_/">
              <Image
              src="/Footer/instagram-icon.svg"
              width={30}
              height={30}
              alt="logo"
              className="invert"
            />
            </Link>


          </div>
        </div>

      </div>

    </div>
    </div>

  );
}

export default Footer;
