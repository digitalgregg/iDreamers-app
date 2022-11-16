import React, { useState } from "react";
import { FakeData } from "../../utils/fakeData";
import classNames from "classnames";
import CustomSlider from "../CustomSlider";
import { currentCount_state } from "../../state";
import { useAtom } from "jotai";

const container =
    "px-[20px] md:px-[65px] lg:px-[65px] 2xl:px-[144px] 4xl:px-[243px]";

const titles = [
    {
        id: 0,
        title: "Structure Your Dreams",
    },
    {
        id: 1,
        title: "Fund Your Dreams",
    },
    {
        id: 2,
        title: "Support Others’ Dreams",
    },
    {
        id: 3,
        title: "Track & Manage Dreams",
    },
];

const Features = () => {
    const [sliderCount, setSliderCount] = useState();
    const [current, setCurrent] = useAtom(currentCount_state);
    return (
        <div
            className={classNames(
                "4xl:mt-[130px] lg:mt-[110px] mt-[72px] 4xl:mb-[130px] mb-[72px] lg:mb-[110px]",
                `${container}`
            )}
        >
            <div className="relative md:w-[645px] lg:w-[900px] 2xl:w-[1168px] 4xl:w-[1440px] mx-auto">
                <h1 className="4xl:text-[48px] 4xl:font-extrabold text-primary 4xl:leading-[65.57px] lg:text-[48px] md:text-[50px] md:font-bold hidden md:block md:mb-[40px] 4xl:mb-[47px]">
                    Why iDreamers?
                </h1>

                <div className="flex flex-col md:flex-row 4xl:gap-[205px] 2xl:gap-[110px] md:gap-[49px] lg:gap-[53px] gap-0  border-l-[5px]  md:border-l-0 md:rounded-0 rounded-[2px]  border-[#DBD3F6]">
                    {titles?.map((title: any) => (
                        <ul
                            key={title.id}
                            className={classNames(
                                title.id === sliderCount
                                    ? "md:border-b-[3px] border-[#866EE1] z-10 border-l-[5px] md:border-l-0 rounded-[2px] md:rounded-0 ml-[-5px] md:ml-0"
                                    : "hover:border-[#866EE1]  border-l-[5px] md:border-l-0 ml-[-5px] md:ml-0"
                            )}
                        >
                            <li
                                onClick={() => setCurrent(title.id)}
                                className={classNames(
                                    title.id === sliderCount
                                        ? "md:text-[#866EE1] cursor-pointer text-[#866EE1] lg:text-[18px] text-[20px] md:text-[12px] 2xl:text-[20px] 2xl:font-bold py-[12px] px-12 md:px-0"
                                        : "md:text-[#B6A8ED] cursor-pointer lg:text-[18px] text-[20px] md:text-[12px] 2xl:text-[20px] 2xl:font-bold py-[12px] px-12 md:px-0 hover:text-[#866EE1]"
                                )}
                            >
                                {title?.title}
                            </li>
                        </ul>
                    ))}
                    <div className="border-b-[2px] -z-10  border-[#E9ECF0] w-[638px] lg:w-[900px] 2xl:w-[1150px] 4xl:w-[1440px] h-[4px] absolute bottom-[0px] left-0 hidden md:block"></div>
                </div>
            </div>
            <CustomSlider
                // label="idreamers"
                Slideslength={FakeData}
                count={(e: any) => setSliderCount(e)}
            >
                {FakeData.map((item, index) => {
                    return (
                        <div key={index}>
                            {index === sliderCount && (
                                <div className=" flex  gap-[20px] md:gap-[28px] lg:gap-[39px] 2xl:gap-[119px] 4xl:gap-[200px] items-center justify-center md:mt-[50px] lg:mt-[77px] 4xl:mt-[86px] mt-[50px]">
                                    <img
                                        src={item.img}
                                        alt=""
                                        className="w-[104px] h-[138px] md:w-[164px] md:h-[218px] lg:w-[234px] lg:h-[310px] 2xl:w-[272px] 2xl:h-[310px]"
                                    />
                                    <div className="w-[316px] md:w-[456px] lg:w-[620px] 2xl:w-[726px] 4xl:w[863px]">
                                        <h1 className="mb-[20px]  text-[24px] font-bold leading-[32.78px] md:text-[36px] md:leading-[49.18px] text-[#31265A]">
                                            {item.title}
                                        </h1>
                                        <p className="text-[12px] xs:text-[14px] font-normal leading-[18px] xs:leading-[21px] lg:text-[16px] lg:leading-[24px]">
                                            {item.description1}
                                        </p>
                                        <br />
                                        <p className="hidden md:block text-[12px] xs:text-[14px] font-normal leading-[18px] xs:leading-[21px] lg:text-[16px] lg:leading-[24px]">
                                            {item.description2}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </CustomSlider>
        </div>
    );
};

export default Features;
