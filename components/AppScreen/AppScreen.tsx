import React from "react";

const AppScreen = () => {
  return (
    <div className="w-[100%] text-center">
      <h2 className="text-[#866EE1] text-[14px] xs:text-[14px] xs:mb-[10px] md:mb-[12px] md:text-[18px] 2xl:text-[20px] 2xl:mb-[20px] mb-[15px] font-medium">
        App Screen
      </h2>
      <h1 className="text-[23px] mb-[19px] xs:text-[24px] xs:mb-[30px] md:text-[36px] md:mb-[40.39px] 2xl:text-[48px] 2xl:mb-[39.82px] 4xl:mb-[80.23px] text-[#31265A] font-extrabold">
        How our app looks like
      </h1>
      <div className="hidden md:flex">
        <img
          src="/img/app-screen-img.svg"
          alt="image"
          className="md:w-[642px] 4xl:w-[894px] h-auto mx-auto"
        />
      </div>
      <div className="md:hidden">
        <img src="/img/app-screen.svg" alt="app-screen" className="w-[270px] h-auto mx-auto"/>
      </div>
    </div>
  );
};

export default AppScreen;
