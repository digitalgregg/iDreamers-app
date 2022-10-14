import React from "react";

const dreamData = [
    {
        title: "Downloads",
        description: "12M",
        img: "/img/download-img.svg",
    },
    {
        title: "Reviews",
        description: "250",
        img: "/img/review-img.svg",
    },
    {
        title: "Followers",
        description: "7.5M",
        img: "/img/follower-img.svg",
    },
];

const ChooseIdream = () => {
    return (
        <div className="bg-[#FFFFFF] mb-[50px] xs:mb-[50px] md:mb-[50.49px] lg:mb-[110px] 4xl:mb-[130px]">
            <div className="mb-[50px] xs:mb-[50px] lg:mb-[75px] 4xl:mb-[80px] text-center">
                <h1 className="text-[19px] xs:text-[24px] md:text-[36px] md:mb-[20px] lg:text-[48px] text-[#31265A] mb-[10px] font-bold">
                    Why Choose iDreamers
                </h1>
                <p className="font-normal xs:text-[14px] xs:leading-[150%] xs:px-[24px] md:px-[104px] md:text-[16px] lg:px-[192px] xl:w-[80%] 2xl:w-[70%] xl:mx-auto 4xl:w-[47%] px-[15px] text-[#4E5256]">
                    We provide the answers your need and put fulfil them into
                    effect also we put customer’s satisfaction above everything
                    else.
                </p>
            </div>
            <div className="w-[90%] xs:w-[366px] md:w-[625px] lg:w-[883px] mx-auto">
                <div className="flex items-center justify-evenly xs:justify-between md:justify-evenly">
                    {dreamData.map((dream) => (
                        <div
                            key={dream.title}
                            className="border-r-2 border-r-[#E9ECF0] last:border-r-0 pr-[10px] xs:pr-[10px] md:pr-[34px] lg:pr-[39px] last:pr-[0px]"
                        >
                            <div className="flex gap-[10px] xs:gap-[10px] md:gap-[20px] lg:gap-[27px] items-center">
                                <img
                                    src={dream.img}
                                    alt="img"
                                    className="w-[30px] xs:w-[30px] md:w-[42.47px] lg:w-[60px] h-auto md:mb-[20px]"
                                />
                                <div className="text-center">
                                    <h1 className="text-[18px] xs:text-[24px] md:text-[36px] lg:text-[50px] text-[#866EE1] font-bold">
                                        {dream.description}
                                        <span className="">+</span>
                                    </h1>
                                    <h2 className="text-[11px] xs:text-[13px] md:text-[14px] lg:text-[22px] text-[#4E5256] font-medium ">
                                        {dream.title}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default ChooseIdream;
