import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import CarouselCircles from "./CarouselCircles";
import { useState } from "react";

const CarouselTest = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  
  const handleSlideChange = (swiper: any) => {
    setCurrentSlide(swiper.activeIndex);
  };

  return (
    <div className="mx-auto w-11/12 md:hidden justify-center text-center my-14 mt-14">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={handleSlideChange}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Image
            src="/Reasons/Ресурс 4.svg"
            width={245}
            height={200}
            alt="logo"
            className="mx-auto mb-5"
          />
          <div className="xl:line-clamp-2 lg:w-3/4">
            <h3 className="font-semibold text-lg">Збільшення конверсії</h3>
          </div>
          <p className="text-base text-gray-400">
            Оптимізація сайту та маркетингових стратегій, що підвищують
            конверсію веб-трафіку та залучають нових клієнтів{" "}
          </p>
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/Reasons/Ресурс 5.svg"
            width={145}
            height={200}
            alt="logo"
            className="mx-auto"
          />
          <div className="xl:line-clamp-2 lg:w-3/4">
            <h3 className="font-semibold text-lg">Ефективна реклама </h3>
          </div>
          <p className="text-base text-gray-400">
            Таргетована реклама для досягнення максимальних результатів
          </p>
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/Reasons/Ресурс 2.svg"
            width={245}
            height={200}
            alt="logo"
            className="mx-auto mt-12"
          />
          <div className="xl:line-clamp-2 lg:w-3/4">
            <h3 className="font-semibold text-lg">Цільовий трафік</h3>
          </div>
          <p className="text-base text-gray-400">
            Розробка стратегії пошукової оптимізації та інших маркетингових
            каналів для приваблення цільового трафіку
          </p>
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/Reasons/Ресурс 3.svg"
            width={230}
            height={200}
            alt="logo"
            className="mx-auto mt-3"
          />
          <div className="xl:line-clamp-2 lg:w-3/4">
            <h3 className="font-semibold text-lg">
              Підвищення свідомості про бренд
            </h3>
          </div>
          <p className="text-base text-gray-400">
            Креативний контент та стратегії брендингу, що привертають увагу,
            збільшують свідомість про ваш бренд
          </p>
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/Reasons/Ресурс 1.svg"
            width={195}
            height={200}
            alt="logo"
            className="mx-auto"
          />
          <div className="xl:line-clamp-2 lg:w-3/4">
            <h3 className="font-semibold text-lg">
              Покращення вашої присутності онлайн
            </h3>
          </div>
          <p className="text-base text-gray-400">
            За допомогою професійного веб-дизайну та соціальних медіа, ми
            покращуємо вашу онлайн-присутність і залучаємо більше клієнтів
          </p>
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/Reasons/Ресурс 6.svg"
            width={245}
            height={200}
            alt="logo"
            className="mx-auto mt-5"
          />
          <div className="xl:line-clamp-2 lg:w-3/4">
            <h3 className="font-semibold text-lg">
              Адміністрування сайту та соціальних мереж
            </h3>
          </div>
          <p className="text-base text-gray-400">
            За допомогою професійного веб-дизайну та соціальних медіа, ми
            покращуємо вашу онлайн-присутність і залучаємо більше клієнтів
          </p>
        </SwiperSlide>
      </Swiper>

      <CarouselCircles count={6} currentItem={currentSlide} />
    </div>
  );
};

export default CarouselTest;
