import React from "react";

const DownloadIdreamer = () => {
  return (
    <div className="w-[100%] flex md:mb-[47px] xs:mb-[50px] lg:mb-[-100px] z-50">
      <div className="mx-auto w-[100%] xs:w-[100%] md:w-[638px] lg:w-[894px] xl:w-[894px] 2xl:w-[1136px] 3xl:w-[1136px] 4xl:w-[1136px] md:rounded-[26px] bg-[#E7E2F9] ">
        <div className="px-[30px] pt-[76px] pb-[76px] flex xs:px-[76px] xs:pt-[30px] xs:pb-[30px] md:pb-[0px] md:px-[26px] md:pt-[49px] lg:px-[51px] lg:pt-[136px] 2xl:px-[70px] 2xl:pt-[54.03px] 4xl:pt-[100px] items-center">
          <div>
            <h2 className="xs:text-center md:text-left leading-[140%] text-[24px] xs:text-[24px] md:text-[24px] md:leading-[140%] lg:text-[36px] lg:mb-[20px] 2xl:text-[48px] 2xl:mb-[20px] mb-[10px] text-[#31265A] font-extrabold">
              Download iDreamer Mobile App Now
            </h2>
            <p className="text-[#4E5256] xs:text-center md:text-left font-normal md:text-[14px] md:leading-[150%] lg:text-[16px] lg:mb-[40px] 2xl:mb-[28px] mb-[40px]">
              iDreamers provides a free platform to connect with other dreamers,
              supporters just like you to help you.
            </p>
            <div className="flex gap-[15px] w-[100%] xs:justify-center md:justify-start">
              <img
                src="/img/googleplay.svg"
                alt="googleplay"
                className="xs:w-[100.68px] xs:h-[
                  29.83px] md:w-[
                 100.68px] md:h-[29.83px] lg:w-[146.05px] lg:h-[42.25px]"
              />
              <img
                src="/img/appstore.svg"
                alt="appstore"
                className="xs:w-[100.68px] xs:h-[
                  29.83px] md:w-[
                 100.68px] md:h-[29.83px] lg:w-[146.05px] lg:h-[42.25px]"
              />
            </div>
          </div>
          <img
            src="/img/footer-img.svg"
            alt="image"
            className="md:w-[347.67px] lg:w-[408.02px] 2xl:w-[495.83px] hidden md:flex"
          />
        </div>
      </div>
    </div>
  );
};
export default DownloadIdreamer;
