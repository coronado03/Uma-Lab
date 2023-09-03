import React, { ReactNode } from "react";

function FourthAbout() {
  return (
    <div className="flex flex-col text-white mt-44">
      <img className="absolute -z-50" src="AboutUs\phonebg.png"/>
      <div className="flex flex-col">
        <img className="w-3/4 self-end mr-8" src="\AboutUs\roman.png" />
        <div className="flex flex-col mt-[-20px]">
          <h1 className="text-5xl ml-3">ROMAN</h1>
          <h1 className="text-5xl self-center mt-[-10px]">RIZNYK</h1>
          <h3 className="text-2xl self-center ml-20 mt-5">SEO & CEO</h3>
        </div>
      </div>

      <div className="flex flex-col mt-44">
        <img className="w-3/4 self-start ml-8" src="\AboutUs\andrii.png" />
        <div className="flex flex-col mt-[-20px]">
          <h1 className="text-5xl self-center ml-3">ANDRII</h1>
          <h1 className="text-5xl self-start mt-[-10px] ml-5">KONONOV</h1>
          <h3 className="text-2xl self-end mr-8 mt-5">CONTENT CREATOR</h3>
        </div>
      </div>

      <div className="flex flex-col mt-44">
        <img className="w-3/4 self-start ml-8" src="\AboutUs\valeriia.png" />
        <div className="flex flex-col mt-[-20px]">
          <h1 className="text-5xl">VALERIIA</h1>
          <h1 className="text-5xl self-start mt-[-10px] ml-8">MAILUNIS</h1>
          <h3 className="text-2xl self-center ml-20 mt-5">Media Buyer</h3>
        </div>
      </div>

      <div className="flex flex-col mt-44">
        <img className="w-3/4 self-end mr-8" src="\AboutUs\vladyslav.png" />
        <div className="flex flex-col mt-[-20px]">
          <h1 className="text-5xl self-end">VLADYSLAV</h1>
          <h1 className="text-5xl mt-[-10px] self-center">SYDORUK</h1>
          <h3 className="text-2xl self-end mr-8 mt-5">Designer UI/UX</h3>
        </div>
      </div>
    </div>
  );
}

export default FourthAbout;
