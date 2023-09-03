import React, { ReactNode } from "react";
import CarouselCircles from "./CarouselCircles/CarouselCircles";
import { useInView, motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import { useState } from "react";

function FirstAbout() {
  const [currentSlide, setCurrentSlide] = useState<number>(1);

  const handleSlideChange = (swiper: any) => {
    setCurrentSlide(swiper.activeIndex);
  };

  return (
    <div className="flex flex-col gap-y-14 text-white text-xl mt-44">
      <h1 className="self-end font-bold text-2xl mr-2 md:mr-12 md:text-5xl">
        UMA це
      </h1>
      <h1 className="self-end font-bold mt-[-60px] text-2xl mr-2 md:mr-12 md:text-5xl">
        інструмент для успіху
      </h1>

      <div className="ml-2 mt-5">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={handleSlideChange}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="flex flex-row">
              <p className="font-bold text-2xl md:text-3xl">01&nbsp;</p>
              <p className="font-bold text-2xl opacity-50 md:text-3xl">/ 03</p>
            </div>
            <h1 className="mt-6 font-bold text-2xl md:text-3xl">
              Дизайн та розробка
            </h1>
            <p className="mt-6 opacity-75 text-xs md:text-xl">
              Вони працюють над контент: використовуючи Вашу ідею, свої знання
              та доствід, вони створюють унікальний продукт. Для того, щоб саме
              Ваш бізнес виділявся. В цьому Вам допоможе наш програміст,
              дизайнер, контент-мейкер.
            </p>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-row">
              <p className="font-bold text-2xl">02&nbsp;</p>
              <p className="font-bold text-2xl opacity-50">/ 03</p>
            </div>
            <h1 className="mt-6 font-bold text-2xl">Інтернет-маркетинг</h1>
            <p className="mt-6 opacity-75 text-xs">
              Наші інтернет-маркетологи допоможуть вам розробити оптиматьну
              стратегію онлайн-просування бізнесу. SEO-спеціалісти забезпечать
              високі позиції в пошукових системах та відкриють нові потоки
              клієнтів. РРС-менеджери проведуть індивідуальну піар-кампанію,
              спрямовану на залучення цільової аудиторії.
            </p>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-row">
              <p className="font-bold text-2xl">03&nbsp;</p>
              <p className="font-bold text-2xl opacity-50">/ 03</p>
            </div>
            <h1 className="mt-6 font-bold text-2xl">Менеджмент та підтримка</h1>
            <p className="mt-6 opacity-75 text-xs">
              Допоможуть Вам у будь-якій ситуації. Проконсультують, деатьльно
              пояснять та порекомендують оптимальний варіант та спеціаліста для
              вирішення проблеми. Саме вони забезпечують оперативну комунікацію
              між Вами та нашої командою.
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
      <CarouselCircles count={3} currentItem={0} />
    </div>
  );
}

export default FirstAbout;
