import React, { useState } from "react";
import { reviewData } from "../../utils/fakeData";
import classNames from "classnames";
import Slider from "../Slider";

const ClientReview = () => {
    const [sliderCount, setSliderCount] = useState();
    return (
        <div className="">
            <div className="bg-white 4xl:w-[1374px] h-auto mx-auto 2xl:w-[1440px] w-[100%] px-[20px]">
                <h1 className="lg:text-[48px] md:text-[36px] lg:leading-[65.57px] md:leading-[49.18px] text-[#31265A] 4xl:font-extrabold 2xl:font-bold lg:pt-[100px] flex justify-center items-center lg:pb-[95px] md:pb-[80px] text-[24px] pb-[40px] pt-[30px] md:pt-[50px] leading-[32.78px] text-center">
                    What Our Clients Say About Us
                </h1>
                <div className="4xl:px-[87px] lg:px-[66px] md:px-[60px]">
                    <Slider
                        // label="idreamers"
                        Slideslength={reviewData}
                        count={(e: any) => setSliderCount(e)}
                    >
                        {reviewData.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className="4xl:px-[97px] lg:px-[6px]  text-center"
                                >
                                    {index === sliderCount && (
                                        <div className="">
                                            <div className="flex justify-between 4xl:w-[1000px] 2xl:w-[890px] lg:w-[900px] md:w-[620px] w-[90%] mx-auto">
                                                <div className="flex flex-row lg:gap-[12px] md:gap-[5.95px]">
                                                    <img
                                                        src="/img/upperArrow.svg"
                                                        alt=""
                                                        className="lg:w-[18.24px] lg:h-[32.89px] w-[8.51px] h-[15.35px]"
                                                    />
                                                    <img
                                                        src="/img/upperArrow.svg"
                                                        alt=""
                                                        className="lg:w-[18.24px] lg:h-[32.89px] w-[8.51px] h-[15.35px]"
                                                    />
                                                </div>
                                                <div className="flex flex-row lg:gap-[12px] md:gap-[5.95px]">
                                                    <img
                                                        src="/img/vector.svg"
                                                        alt=""
                                                        className="lg:w-[18.24px] lg:h-[32.89px] w-[8.51px] h-[15.35px]"
                                                    />
                                                    <img
                                                        src="/img/vector.svg"
                                                        alt=""
                                                        className="lg:w-[18.24px] lg:h-[32.89px] w-[8.51px] h-[15.35px]"
                                                    />
                                                </div>
                                            </div>
                                            <p className="4xl:w-[925px] lg:w-[810px] md:w-[600px] mx-auto font-medium lg:text-[20px] text-[16px] lg:leading-[32.4px] text-[#4E5256] mt-[-15px] leading-[25.92px] w-[85%] px-[20px]">
                                                {item.review}
                                            </p>
                                            <div className="lg:mt-[72px] mt-[43px] flex justify-center items-center gap-[12px]">
                                                <img
                                                    src="/img/profile.svg"
                                                    alt=""
                                                    className="w-[56px] h-[56px] rounded-full"
                                                />
                                                <div className="flex flex-col text-[#31265A] text-start">
                                                    <h1 className="font-semibold md:text-[22px] text-[20px]">
                                                        {item.name}
                                                    </h1>
                                                    <p className="font-normal md:text-[18px] text-[16px]">
                                                        {item.position}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className=" flex gap-[15px] justify-center items-center lg:mt-[80px] mt-[50px] mx-auto pb-[50px] lg:pb-[110px">
                                                {reviewData.map(
                                                    (item, index: any) => (
                                                        <div
                                                            onClick={() =>
                                                                setSliderCount(
                                                                    index
                                                                )
                                                            }
                                                            key={item.id}
                                                            className={classNames(
                                                                item.id ===
                                                                    sliderCount
                                                                    ? "w-[16px] h-[16px] rounded-full bg-[#866EE1] "
                                                                    : "w-[8px] h-[8px] rounded-full bg-[#CFC5F3] "
                                                            )}
                                                        ></div>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default ClientReview;
