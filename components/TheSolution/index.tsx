import React from "react";
import { solutionData } from "../../utils/fakeData";

const TheSolution = () => {
    return (
        <div className="py-[40px] lg:py-[60px] xl:py-[86px] px-[20px]">
            <div className="flex flex-col  md:flex-row justify-center xl:gap-[87px] md:gap-[40px] lg:gap-[60px] items-center">
                <img
                    src="/img/solutonimg.svg"
                    alt=""
                    className="sm:w-[340px] h-[200px] w-[100%]  sm:h-[200px] md:w-[320px] md:h-[250px] lg:w-[500px] h-[389px] lg:h-[360px]"
                />
                <div className="w-[100%] text-center md:w-[300px] lg:w-[393px] mt-[20px] md:mt-0">
                    <h1 className="text-[#31265A] font-semibold text-[40px] xl:text-[50px] md:text-[32px] mb-[8px] xl:mb-[25px] md:text-left md:ml-[-20px] xl:ml-[-25px]">
                        The Solution
                    </h1>
                    <ul className="flex-col felx">
                        {solutionData.map((item, index) => (
                            <li
                                key={index}
                                className="md:list-disc text-[14px] xl:text-[16px] text-[#4E5256] py-[6px] lg:py-[12px]"
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
