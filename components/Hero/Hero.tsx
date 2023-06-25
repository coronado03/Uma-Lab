import Image from 'next/image';
import Typewriter from 'typewriter-effect';

function Hero() {
  return (
    <div className="bg-black h-screen flex flex-col mt-16 gap-y-16 md:gap-y-32">
      <div className="flex flex-col gap-y-5 text-center mt-9">
        <Image src="/umalogo.png" className="mx-auto" width={165} height={500} alt="logo" />
        <h1 className="text-4xl md:text-8xl font-bold">UMA - LAB</h1>
      </div>

      <div className="md:mx-auto">
        <div className="flex flex-col justify-center items-center">
          <p className="text-center w-full md:w-6/12 text-base md:text-xl">
            Діджитал-агентство. Інструменти розвитку вашого бізнесу, будь-якого масштабу.
            Створюємо продукт з найкращими технологіями та світовими принципами дизайну.
            Контент-мейкери, дизайнери, оптимізатори, розробники — це все UMA.
          </p>

        </div>
      </div>
    </div>
  );
}

export default Hero;