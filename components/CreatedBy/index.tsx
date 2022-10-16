import React, { useState } from "react";
import classNames from "classnames";
import { imgurl } from "./../../utils/fakeData";
import HeroMobo from "./../HeroMobo/index";
import { useRouter } from "next/router";
import { useSwipeable } from "react-swipeable";

const wrapperDiv =
    "2xl:w-[302px] 2xl:h-[111px] bg-white rounded-[8px]  lg:w-[265px] lg:h-[86px] md:w-[207px] md:h-[62px]  2xl:px-[16px] 2xl:py-[19px] lg:px-[20px] lg:py-[16px] md:px-[10px] md:py-[10px] cursor-pointer";

const titleStyle =
    "font-semibold 2xl:text-[22px] 2xl:leading-[30.8px] lg:text-[18px] lg:leading-[27px] md:leading-[21px] 2xl:px-4 md:text-[14px]";

const CreatedBy = () => {
    const router = useRouter();
    const [count, setCount] = useState(0);
    console.log(count, "count.............");

    const handlers = useSwipeable({
        onSwiped: (eventData) => {
            if (eventData.dir === "Right") {
                if (count > 0) {
                    setCount(count - 1);
                }
            }

            if (eventData.dir === "Left") {
                if (count < 5) {
                    setCount(count + 1);
                }
            }

            console.log(eventData.dir);
        },
        trackMouse: true,
        preventScrollOnSwipe: true,
        touchEventOptions: { passive: true },
        delta: 1,
        // ...config,
    });

    return (
        <div>
            <div className=" w-[100%] mx-auto mt-[130px] md:mt-[110px] pb-[50px] lg:pb-[94px] 2xl:pb-[111px] 4xl:pb-[130px] hidden md:block">
                <div className="">
                    <h1 className="text-[32px] font-normal leading-[41.6px] text-[#31265A] px-[20px] mb-[40px] mx-auto md:w-[400px] lg:w-[580px] md:pb-[110px] text-center lg:text-[48px] lg:leading-[62.4px] 4xl:pb-[76px]">
                        Created by Dreamers.{" "}
                        <span className="font-extrabold">For Dreamers.</span>{" "}
                    </h1>

                    <div className="flex items-center justify-center ">
                        {/* first section  */}
                        <div className="flex flex-col gap-[98px] md:gap-[62px] justify-end items-end ">
                            <div
                                onClick={() => setCount(0)}
                                className={classNames(
                                    `${wrapperDiv}`,
                                    "2xl:mr-[-15px] md:mr-[-20px] "
                                )}
                                style={{
                                    backgroundColor:
                                        count === 0 ? "#E7E2F9" : "white",
                                }}
                            >
                                <div className="flex 2xl:gap-[8px] lg:gap-[20px]  md:gap-[10px] items-center ">
                                    <img
                                        src="/img/brainstorm.svg"
                                        alt=""
                                        className="2xl:w-[73px] 2xl:h-[73px] lg:w-[39px] lg:h-[39px] w-[30px] h-[30px]"
                                    />
                                    <h1 className={classNames(`${titleStyle}`)}>
                                        Brainstorm Ideas
                                    </h1>
                                </div>
                            </div>

                            <div
                                onClick={() => setCount(1)}
                                className={classNames(
                                    `${wrapperDiv}`,
                                    "2xl:mr-[46px] md:mr-[11px] lg:mr-[25px]"
                                )}
                                style={{
                                    backgroundColor:
                                        count === 1 ? "#E7E2F9" : "white",
                                }}
                            >
                                <div className="flex 2xl:gap-[8px] lg:gap-[20px] md:gap-[10px] items-center">
                                    <img
                                        src="/img/searchLogo.svg"
                                        alt=""
                                        className="2xl:w-[73px] 2xl:h-[73px] lg:w-[39px] lg:h-[39px] w-[30px] h-[30px]"
                                    />
                                    <h1 className={classNames(`${titleStyle}`)}>
                                        Search Others Dream
                                    </h1>
                                </div>
                            </div>
                            <div
                                onClick={() => setCount(2)}
                                className={classNames(
                                    `${wrapperDiv}`,
                                    "2xl:mr-[-15px] md:mr-[-20px]"
                                )}
                                style={{
                                    backgroundColor:
                                        count === 2 ? "#E7E2F9" : "white",
                                }}
                            >
                                <div className="flex 2xl:gap-[8px] lg:gap-[20px] md:gap-[10px] items-center">
                                    <img
                                        src="/img/buildlogo.svg"
                                        alt=""
                                        className="2xl:w-[73px] 2xl:h-[73px] lg:w-[39px] lg:h-[39px] w-[30px] h-[30px]"
                                    />
                                    <h1 className={classNames(`${titleStyle}`)}>
                                        Build a Support System
                                    </h1>
                                </div>
                            </div>
                        </div>

                        {/* 2nd section  */}
                        <div {...handlers} className="relative">
                            <img
                                src="/img/circle.svg"
                                alt=""
                                className="2xl:w-[616px] 2xl:h-[618px] lg:w-[379.54px] lg:h-[380.77px] md:w-[249.12px] md:h-[249.93px]"
                            />
                            <div className="overflow-hidden cursor-pointer">
                                <img
                                    src="/img/iphoneImg.svg"
                                    alt=""
                                    className="absolute 2xl:top-[-30px] lg:top-[-80px] md:top-[-50px] lg:right-[15%] 2xl:right-[23%] md:right-[16%] 2xl:w-[331px] 2xl:h-[668px]  z-50 lg:w-[257px] lg:h-[518px] md:w-[168.69px] md:h-[340px]"
                                />

                                {imgurl.map((item: any) => (
                                    <div key={item.id}>
                                        {item.id === count && (
                                            <img
                                                src={`${item.url}`}
                                                alt=""
                                                className="absolute 2xl:top-[-22px] lg:top-[-70px] md:top-[-45px] lg:right-[15.5%] 2xl:right-[24%] 2xl:w-[315px] 2xl:h-[645px] z-10 lg:w-[250px] lg:h-[500px] md:w-[158.69px] md:h-[330px] md:right-[18%]"
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* 3rd section  */}
                        <div className="flex flex-col gap-[98px] md:gap-[62px] justify-start items-start ">
                            <div
                                onClick={() => setCount(3)}
                                className={classNames(
                                    `${wrapperDiv}`,
                                    "2xl:ml-[-15px] md:ml-[-20px]"
                                )}
                                style={{
                                    backgroundColor:
                                        count === 3 ? "#E7E2F9" : "white",
                                }}
                            >
                                <div className="flex 2xl:gap-[8px] lg:gap-[20px] md:gap-[10px] items-center">
                                    <img
                                        src="/img/track.svg"
                                        alt=""
                                        className="2xl:w-[73px] 2xl:h-[73px] lg:w-[39px] lg:h-[39px] w-[30px] h-[30px]"
                                    />
                                    <h1 className={classNames(`${titleStyle}`)}>
                                        Track and Manage Goal
                                    </h1>
                                </div>
                            </div>
                            <div
                                onClick={() => setCount(4)}
                                className={classNames(
                                    `${wrapperDiv}`,
                                    "2xl:ml-[46px] md:ml-[11px] lg:ml-[25px]"
                                )}
                                style={{
                                    backgroundColor:
                                        count === 4 ? "#E7E2F9" : "white",
                                }}
                            >
                                <div className="flex 2xl:gap-[8px] lg:gap-[20px] md:gap-[10px] items-center">
                                    <img
                                        src="/img/communicate.svg"
                                        alt=""
                                        className="2xl:w-[73px] 2xl:h-[73px] lg:w-[39px] lg:h-[39px] w-[30px] h-[30px]"
                                    />
                                    <h1 className={classNames(`${titleStyle}`)}>
                                        Communicate with other
                                    </h1>
                                </div>
                            </div>
                            <div
                                onClick={() => setCount(5)}
                                className={classNames(
                                    `${wrapperDiv}`,
                                    "2xl:ml-[-15px] md:ml-[-20px]"
                                )}
                                style={{
                                    backgroundColor:
                                        count === 5 ? "#E7E2F9" : "white",
                                }}
                            >
                                <div className="flex 2xl:gap-[8px] lg:gap-[20px] md:gap-[10px] items-center">
                                    <img
                                        src="/img/secure.svg"
                                        alt=""
                                        className="2xl:w-[73px] 2xl:h-[73px] lg:w-[39px] lg:h-[39px] w-[30px] h-[30px]"
                                    />
                                    <h1 className={classNames(`${titleStyle}`)}>
                                        100% Srcure Cloud Platform
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:hidden">
                <HeroMobo />
            </div>
        </div>
    );
};

export default CreatedBy;
