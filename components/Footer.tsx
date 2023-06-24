import Image from 'next/image';

function Footer() {
  return (
    <div className='flex bg-white justify-center'> {/* Add the 'justify-center' class */}
      <div className='flex flex-row self-center py-10'>
        <Image
          src="/Footer/facebook.png"
          width={40}
          height={110}
          alt="Facebook logo"
          className="rounded-full"
        />
        <Image
          src="/Footer/instagram.png"
          width={40}
          height={110}
          alt="Instagram logo"
          className="rounded-full"
        />
      </div>
    </div>
  );
}

export default Footer;
