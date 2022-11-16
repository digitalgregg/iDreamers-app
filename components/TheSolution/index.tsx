import React from "react";
import { solutionData } from "../../utils/fakeData";

const TheSolution = () => {
    return (
        <div className="py-[40px] lg:py-[60px] xl:py-[86px] px-[20px]">
            <div className="flex flex-col  md:flex-row justify-center xl:gap-[87px] 2xl:gap-[97px] md:gap-[20px] lg:gap-[60px] items-center">
                <img
                    src="/img/solutonimg.png"
                    alt=""
                    className="w-[100%] h-[300px] xs:w-[380px] xs:h-[320px] md:w-[250px] md:h-[240px] lg:w-[412.44px] lg:h-[310px] xl:w-[360px] xl:h-[320px] 2xl:w-[580px] 2xl:h-[389px]"
                />
                <div className="w-[100%] text-center md:w-[300px] lg:w-[393px] mt-[20px] md:mt-0 ml-[30px] md:ml-0">
                    <h1 className="text-[#31265A] font-semibold text-[40px] lg:text-[48px] xl:text-[50px] md:text-[32px] mb-[8px] xl:mb-[25px] md:text-left ">
                        The Solution
                    </h1>
                    <ul className="flex-col felx px-[20px] w-[100%] xs:w-[400px] md:w-[380px] mx-auto ">
                        {solutionData.map((item, index) => (
                            <li
                                key={index}
                                className="list-disc text-[14px] lg:text-[16px] text-[#4E5256] py-[6px] lg:py-[12px] text-left "
                            >
                                {item.description}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TheSolution;
