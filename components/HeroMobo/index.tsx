import React, { useState } from "react";
import { imgurl, listItem } from "./../../utils/fakeData";

const HeroMobo = () => {
    const [count, setCount] = useState(0);
    const data = listItem;
    return (
        <div className=" w-[100%] mx-auto mt-[50px] pb-[72px]">
            <h1 className="text-[32px] font-normal leading-[41.6px] text-[#31265A] px-[20px] mb-[40px]">
                Created by Dreamers.{" "}
                <span className="font-extrabold">For Dreamers.</span>{" "}
            </h1>
            <div className="px-[20px] flex xs:gap-[34px] gap-[10px] items-center  justify-center">
                <div className="">
                    <div className="relative overflow-hidden">
                        <div className="w-[189px] h-[382px] relative pl-[20px]">
                            <img
                                src="/img/iphoneImg.svg"
                                className="w-[189px] h-[382px] z-50 absolute  top-0 left-0 absolute "
                                alt=""
                            />
                        </div>
                        {imgurl.map((item: any) => (
                            <div key={item.id}>
                                {item.id === count && (
                                    <img
                                        src={`${item.url}`}
                                        alt=""
                                        className="absolute w-[170px] h-[375px] bottom-[0px] left-[10px]  z-10"
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-[12px] ">
                    {data.map((item) => (
                        <ul key={item.id}>
                            <li
                                onClick={() => setCount(item.id)}
                                className="w-[100%] min-h-[50px] bg-white rounded-[8px] text-[12px] flex flex-row items-center px-[6px] gap-[10px] cursor-pointer"
                            >
                                <img
                                    src={item.url}
                                    alt=""
                                    className="w-[30px] h-[30px]"
                                />
                                {item.title}
                            </li>
                        </ul>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeroMobo;
