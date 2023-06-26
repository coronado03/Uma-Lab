import Image from 'next/image';

function Footer() {
  return (
    <div className='flex bg-black justify-center flex-col lg:flex-row lg:gap-x-48 mx-auto text-white w-11/12 z-2 pt-32 pb-5 lg:py-32'> 
      
      <h1 className="text-6xl font-semibold text-center self-center mb-14">наші контакти</h1>

      <div className='self-center flex flex-col gap-y-40 text-center md:text-left'>

        <div className='w-full lg:w-5/6'>
          <p className='font-semibold text-lg'>Подайте заявку, щоб отримати nоптимальне рішення для Вашого бізнесу.</p>
          <button className='w-5/6 	bg-sky-500 text-white font-semibold py-4 mt-4 rounded-lg'>Заявкана</button>
        </div>

        <div className='text-lg font-semibold flex flex-col gap-y-3'>
          <p>+38 0...</p>
          <p>info@uma-lub.com</p>
          <div className='flex gap-x-2 justify-end md:justify-normal'>
            <Image
            src="/Footer/facebook-icon.svg"
            width={30}
            height={30}
            alt="logo"
            className="invert"
            />

            <Image
            src="/Footer/instagram-icon.svg"
            width={30}
            height={30}
            alt="logo"
            className="invert"
            />

          </div>
        </div>

      </div>

    </div>
  );
}

export default Footer;
