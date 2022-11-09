import React from "react";
import MoboGetStarted from "../MoboGetStarted";

const GetStarted = () => {
    return (
        <div className="w-[100%] 4xl:px-[240px] mx-auto ">
            <div className="bg-[#F3F0FC]  md:block hidden">
                <div className="lg:w-[838px] mx-auto pb-[118px]">
                    <p className="font-bold text-[#866EE1] text-center pt-[110px] text-[16px] mb-[20px]">
                        HOW IT WORKS
                    </p>
                    <h1 className="font-extrabold leading-[63.98px] text-[24px] xs:text-[24px] md:text-[36px] lg:text-[48px] text-[#31265A] text-center mb-[80px]">
                        Get Started with 4 Easy Steps
                    </h1>
                    <div className="flex gap-[88px] 2xl:gap-[80px] md:gap-[50px] 4xl:w-[838px] justify-center w-full mx-auto">
                        <div className="flex flex-col">
                            <div className="w-[302px]">
                                <h1 className="font-bold text-[20px] lg:text-[24px] text-[#31265A] mb-[16px]">
                                    Download & Register
                                </h1>
                                <p className="font-normal text-[14px] leading-[21px] lg:text-[16px] lg:leading-[24px] ">
                                    SeaWire Web is a wireframe kit that has more
                                    than 15 popular categories and more than 200
                                    screens from each category, SeaWire Web
                                    deserves to be your partner in working on
                                    projects.{" "}
                                </p>
                                <img
                                    src="/img/regesterIcon.svg"
                                    alt=""
                                    className="lg:w-[296px] lg:h-[206px] md:w-[246px] md:h-[168px] pt-[10px]"
                                />
                            </div>
                            {/* second line */}
                            <div className="w-[302px] mt-[96px]">
                                <h1 className="font-bold text-[20px] lg:text-[24px] text-[#31265A] mb-[16px]">
                                    Connect with Supporters
                                </h1>
                                <p className="font-normal text-[14px] leading-[21px] lg:text-[16px] lg:leading-[24px] ">
                                    SeaWire Web is a wireframe kit that has more
                                    than 15 popular categories and more than 200
                                    screens from each category, SeaWire Web
                                    deserves to be your partner in working on
                                    projects.{" "}
                                </p>
                                <img
                                    src="/img/supporter.svg"
                                    alt=""
                                    className="w-[296px] h-[206px]  md:w-[246px] md:h-[168px] pt-[10px]"
                                />
                            </div>
                        </div>

                        {/* other part  */}
                        <div className="h-auto w-[5px] border-dotted border-l-[2px] border-[#A2A9B0] relative">
                            <div className="w-[64px] h-[64px] bg-[#31265A] rounded-[8px] flex items-center justify-center absolute top-0 right-[-27px]">
                                <p className="text-white font-bold text-[36px] ">
                                    01
                                </p>
                            </div>
                            <div className="w-[64px] h-[64px] bg-[#31265A] rounded-[8px] flex items-center justify-center absolute top-[180px] right-[-27px]">
                                <p className="text-white font-bold text-[36px] ">
                                    02
                                </p>
                            </div>
                            <div className="w-[64px] h-[64px] bg-[#31265A] rounded-[8px] flex items-center justify-center  absolute top-[460px] right-[-27px]">
                                <p className="text-white font-bold text-[36px] ">
                                    03
                                </p>
                            </div>
                            <div className="w-[64px] h-[64px] bg-[#31265A] rounded-[8px] flex items-center justify-center  absolute top-[680px] right-[-27px]">
                                <p className="text-white font-bold text-[36px] ">
                                    04
                                </p>
                            </div>
                        </div>
                        <div className="w-[302px]">
                            <div className="flex flex-col">
                                <div className="">
                                    <img
                                        src="/img/trackgoal.svg"
                                        alt=""
                                        className="w-[296px] h-[206px]  md:w-[246px] md:h-[168px] pb-[20px]"
                                    />
                                    <h1 className="font-bold text-[20px] lg:text-[24px] text-[#31265A] mb-[16px]">
                                        Create & Track Goals
                                    </h1>
                                    <p className="font-normal text-[14px] leading-[21px] lg:text-[16px] lg:leading-[24px] mb-[10px]">
                                        SeaWire Web is a wireframe kit that has
                                        more than 15 popular categories and more
                                        than 200 screens from each category,
                                        SeaWire Web deserves to be your partner
                                        in working on projects.{" "}
                                    </p>
                                </div>

                                {/* second part  */}
                                <div className=" mt-[80px]">
                                    <img
                                        src="/img/hand-logo.svg"
                                        alt=""
                                        className="w-[296px] h-[206px]  md:w-[246px] md:h-[168px] pb-[20px]"
                                    />
                                    <h1 className="font-bold text-[20px] lg:text-[24px]  text-[#31265A] mb-[16px]">
                                        Reach Your Dreams
                                    </h1>
                                    <p className="font-normal text-[14px] leading-[21px] lg:text-[16px] lg:leading-[24px] mb-[10px]">
                                        SeaWire Web is a wireframe kit that has
                                        more than 15 popular categories and more
                                        than 200 screens from each category,
                                        SeaWire Web deserves to be your partner
                                        in working on projects.{" "}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:hidden">
                <MoboGetStarted />
            </div>
        </div>
    );
};

export default GetStarted;
