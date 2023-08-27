import React, { ReactNode } from "react";
import CarouselCircles from "./CarouselCircles/CarouselCircles";

type Props = {
  children: ReactNode;
};

function FirstAbout() {
  return (
    <div className="flex flex-col gap-y-14 text-white text-xl lg:w-1/2 mt-44 md:mt-16">
      <h1 className="self-end font-bold text-2xl mr-2">UMA це</h1>
      <h1 className="self-end font-bold mt-[-60px] text-2xl mr-2">інструмент для успіху</h1>

      <div className="ml-2 mt-5">
        <div className="flex flex-row">
          <p className="font-bold text-2xl">01&nbsp;</p>
          <p className="font-bold text-2xl opacity-50">/ 03</p>
        </div>
        <h1 className="mt-6 font-bold text-2xl">Дизайн та розробка</h1>
        <p className="mt-6 opacity-75 text-xs">
          Вони працюють над контент: використовуючи Вашу ідею, свої знання та
          доствід, вони створюють унікальний продукт. Для того, щоб саме Ваш
          бізнес виділявся. В цьому Вам допоможе наш програміст, дизайнер,
          контент-мейкер.
        </p>
        <CarouselCircles count={3} currentItem={0} />
      </div>
    </div>
  );
}

export default FirstAbout;
