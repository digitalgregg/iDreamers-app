import React from "react";

const WeHelp = () => {
    return (
        <div className="4xl:px-[240px]">
            <div
                style={{
                    background:
                        "linear-gradient(120.68deg, #EAE7F2 30.04%, #FFFFFF 100%)",
                }}
                className="w-[100%] h-auto px-[20px]"
            >
                <div className="text-center ">
                    <h1 className="text-[24px] md:text-[36px] lg:text-[48px] font-extrabold text-[#31265A] pt-[50px] lg:pt-[100px] mb-[20px] lg:mb-[18px]">
                        We help you to Fullfill your Dream!{" "}
                    </h1>
                    <p className="text-[#4E5256] text-[12px] md:text-[14px] lg:text-[16px] md:leading-[21px] font-normal w-[100%] xs:w-[400px] mx-auto md:w-[555px] lg:w-[798px] ">
                        The creators of the iDreamers app made their own dreams
                        come true by{" "}
                        <span className="font-bold mr-[4px] ml-[4px]">
                            writing them down,
                        </span>{" "}
                        <span className="font-bold mr-[4px] ml-[4px]">
                            tracking progress
                        </span>{" "}
                        and
                        <span className="font-bold mr-[4px] ml-[4px]">
                            garnering support for them
                        </span>
                        —and now they want to show{" "}
                        <span className="font-bold mr-[4px] ml-[4px]">YOU</span>
                        how to do it and provide a platform and a community to
                        help you!
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
