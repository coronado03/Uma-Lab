import React, { ReactNode } from "react";
import CarouselCircles from "./CarouselCircles/CarouselCircles";

type Props = {
  children: ReactNode;
};

function SecondAbout() {
  return (
    <div className="flex flex-col gap-y-14 text-white text-xl lg:w-1/2 mt-44 md:mt-16">
      <div className="ml-2">
        <h1 className="text-5xl md:text-6xl font-semibold text-start lg:text-start self-center text-[#1a1a1a] text-stroke lg:ml-5">
          UMA-LAB
        </h1>
      </div>
      <div className="mr-2 mt-[-60px]">
        <h1 className="text-5xl md:text-6xl font-semibold text-end lg:text-start self-center text-[#1a1a1a] text-stroke lg:ml-5">
          TEAM
        </h1>
      </div>
    </div>
  );
}

export default SecondAbout;
