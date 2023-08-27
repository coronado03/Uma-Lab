import React, { ReactNode } from "react";
import CarouselCircles from "./CarouselCircles/CarouselCircles";

type Props = {
  children: ReactNode;
};

function ThirdAbout() {
  return (
    <div className="flex flex-col gap-y-14 text-white text-lg lg:w-1/2 mt-44 md:mt-16 mx-auto">
      <div className="ml-2">
        <h1 className="">
          Ми — команда натхненних та відданих фахівців, талановитих
          професіоналів з усіх дисциплін які працюють разом, щоб створювати не
          просто продукт, а унікальний досвід для наших клієнтів.
        </h1>
      </div>
    </div>
  );
}

export default ThirdAbout;
