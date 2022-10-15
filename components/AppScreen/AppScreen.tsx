import React, { useState } from "react";
import classNames from "classnames";

const images = [
    {
        id: 0,
        url: "/img/app-screen.svg",
    },
    {
        id: 1,
        url: "/img/screenDemo.svg",
    },
    {
        id: 2,
        url: "/img/app-screen.svg",
    },
];

const AppScreen = () => {
    const [count, setCount] = useState(0);
    return (
        <div className="w-[100%] text-center">
            <h2 className="text-[#866EE1] text-[14px] xs:text-[14px] xs:mb-[10px] md:mb-[12px] md:text-[18px] 2xl:text-[20px] 2xl:mb-[20px] mb-[15px] font-medium">
                App Screen
            </h2>
            <h1 className="text-[23px] mb-[19px] xs:text-[24px] xs:mb-[30px] md:text-[36px] md:mb-[40.39px] 2xl:text-[48px] 2xl:mb-[39.82px] 4xl:mb-[80.23px] text-[#31265A] font-extrabold">
                How our app looks like
            </h1>
            <div className="hidden md:flex">
                <img
                    src="/img/app-screen-img.svg"
                    alt="image"
                    className="md:w-[642px] 4xl:w-[894px] h-[550px] lg:h-[765px] 2xl:h-[830px] 4xl:-[721px]  mx-auto"
                />
            </div>
            <div className="md:hidden ">
                {images.map((item, index: any) => (
                    <>
                        {index === count && (
                            <img
                                key={item.id}
                                src={item.url}
                                alt="app-screen"
                                className="w-[270px] h-[545px] mx-auto"
                            />
                        )}
                    </>
                ))}
            </div>
            <div className="flex gap-[10px] justify-center pt-[50px] md:hidden">
                {images.map((item) => (
                    <div
                        onClick={() => setCount(item.id)}
                        key={item.id}
                        className={classNames(
                            " w-[28px] h-[2px]",
                            count === item.id ? "bg-[#B8B8B8]" : "bg-[#E9ECF0]"
                        )}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default AppScreen;
