import React from "react";

const WeHelp = () => {
    return (
        <div className="4xl:px-[240px] mb-[50px] lg:mb-[110px] 4xl:mb-[130px]">
            <div
                style={{
                    background:
                        "linear-gradient(120.68deg, #EAE7F2 30.04%, #FFFFFF 100%)",
                }}
                className="w-[100%] h-auto px-[20px] mb-[50px]"
            >
                <div className="text-center ">
                    <h1 className="text-[24px] md:text-[36px] lg:text-[48px] font-extrabold text-[#31265A] pt-[50px] lg:pt-[100px] mb-[20px] lg:mb-[18px]">
                        We help you to Fullfill your Dream!{" "}
                    </h1>
                    <p className="text-[#4E5256] text-[12px] md:text-[14px] lg:text-[16px] md:leading-[21px] font-normal w-[100%] xs:w-[400px] mx-auto md:w-[555px] lg:w-[798px]">
                        iDreamers provides a free platform to connect with other
                        dreamers, supporters just like you to help you map out a
                        plan to make your dreams a reality.
                    </p>
                </div>
                <div className="mt-[18px] md:mt-[40px] flex gap-[18.66px] lg:gap-[30px] justify-center mb-[50px] lg:mb-[80px]">
                    <img
                        src="/img/googleplay.svg"
                        alt="playstore"
                        className="w-[100.68px] h-[29.83px] lg:w-[216px] lg:h-[64px]"
                    />
                    <img
                        src="/img/applestore.svg"
                        alt="playstore"
                        className="w-[100.68px] h-[29.83px] lg:w-[216px] lg:h-[64px]"
                    />
                </div>
                {/* video iframe   */}
                <div className="pb-[50px] lg:pb-[110px]">
                    <iframe
                        className="w-[100%] xs:w-[440px] h-[220px] md:w-[557px] lg:w-[777px] lg:h-[451px] md:h-[323.3px] xs:h-[253.65px] rounded-[24px] mx-auto"
                        src="https://www.youtube.com/embed/tgbNymZ7vqY"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default WeHelp;
