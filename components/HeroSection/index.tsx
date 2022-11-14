import React from "react";
import classNames from "classnames";

const HeroSection = () => {
    const container = "pl-[240px] pr-[240px]";
    return (
        <div
            className={classNames(
                "mx-w-[1136.86px] lg:gap-[54px] 2xl:gap-[148px] md:gap-[49.61px] flex  justify-center pt-[50px] md:pt-[56px] lg:pt-[69px]  4xl:pt-[93.40px] items-center px-[20px] pb-[40px] bg-[#F3F0FC]"
            )}
        >
            <div className="2xl:w-[590px] lg:w-[497px] md:w-[270px]">
                <h1 className="font-normal 2xl:text-[70px] lg:text-[48px] md:text-[32px] lg:leading-[61.63px] 2xl:leading-[89.88px] text-[#31265A] mb-[40px] text-[32px] leading-[41.09px]">
                    Create, Track & Accomplish{" "}
                    <span className="font-extrabold"> Your Dreams.</span>
                </h1>
                {/* <p className="text-[#4E5256] text-[16px] leading-[24px] font-normal lg:w-[497px] 2xl:w-[562px] mb-[40px] md:text-[14px] md:leading-[21px]">
                    We’ve all got ambitions and goals in life. Whatever you
                    dream about, iDreamers will provide you the resources and
                    help you find supporters, too make it a reality!
                </p> */}
                <div className="flex 2xl:gap-[40px] md:gap-[18.64px] gap-[18.64px]">
                    <a
                        href="https://apps.apple.com/us/app/idreamers/id1633296747"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <img
                            src="/img/applestore.svg"
                            alt=""
                            className="2xl:w-[216px] 2xl:h-[64px] md:w-[100.68px] md:h-[29.83px] w-[100.68px] h-[29.83px] cursor-pointer hover:opacity-75"
                        />
                    </a>
                    <a
                        href="https://play.google.com/store/apps/details?id=com.idreamers.system&hl=en_US&gl=US"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <img
                            src="/img/googleplay.svg"
                            alt=""
                            className="2xl:w-[216px] 2xl:h-[64px] md:w-[100.68px] md:h-[29.83px]  w-[100.68px] h-[29.83px] cursor-pointer hover:opacity-75"
                        />
                    </a>
                </div>
            </div>
            <div className="">
                <img
                    src="/img/heroCoverimg2.png"
                    alt=""
                    className="2xl:w-[571px]  md:w-[324.69px]  lg:w-[343.31px]  hidden md:block 2xl:w-[571px] "
                    // className="2xl:w-[571px] 2xl:h-[501px] md:w-[324.69px] md:h-[300px] lg:w-[343.31px] lg:h-[400px] hidden md:block 2xl:w-[571px] h-[501px]"
                />
            </div>
        </div>
    );
};

export default HeroSection;
