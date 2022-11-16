import { useAtom } from "jotai";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { currentCount_state } from "../../state";

const CustomSlider = ({ children, ...props }: any) => {
    const [current, setCurrent] = useAtom(currentCount_state);
    const [active, setActive] = useState(false);
    const [currentLength, setCurrentLength] = useState(false);
    const timeout = useRef(null);
    const length = props.Slideslength?.length;
    const lastLangth = length - 1;

    useEffect(() => {
        props?.count(current);
        if (current > 0) setActive(true);
        if (current === 0) setActive(false);
        if (current < lastLangth) setCurrentLength(true);
        if (current === lastLangth) setCurrentLength(false);
        // console.log(current);
    }, [current]);

    const nextSlide = () => {
        if (timeout.current) {
            clearTimeout(timeout.current);
        }
        if (current < lastLangth)
            setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        if (timeout.current) {
            clearTimeout(timeout.current);
        }
        if (current > 0) setCurrent(current === 0 ? length - 1 : current - 1);
    };
    return (
        <div className="w-full ">
            <div className="">{children}</div>
            <div className=" pt-[30px] flex flex-row justify-start items-center gap-[22px] mx-auto  arrow  w-[10 0px] xs:w-[200px] md:w-[260px] lg:w-[345px] 4xl:w-[255px]">
                {/* <Button  icon="next" /> */}
                <button
                    onClick={prevSlide}
                    className={`${
                        active === true ? "bg-[#E7E2F9]" : "bg-[#999]"
                    } p-[8px] rounded-full w-[30px] h-[30px] flex justify-center items-center `}
                >
                    <div className="w-[44px] !h-[44px] flex items-center justify-center">
                        <Image
                            width={512}
                            height={512}
                            src="/img/leftarrow.svg"
                            alt="arrow-icon"
                        />
                    </div>
                </button>
                {/* <p className=" text-[12px] font-bold text-primary">
                    {props.label}
                </p> */}
                <button
                    onClick={nextSlide}
                    className={`${
                        currentLength === true ? "bg-[#E7E2F9]" : "bg-[#999]"
                    } p-[8px] rounded-full w-[30px] h-[30px] flex justify-center items-center `}
                >
                    <div className="w-[44px] !h-[44px] transform rotate-180 flex items-center justify-center">
                        <Image
                            width={512}
                            height={512}
                            src="/img/leftarrow.svg"
                            alt="arrow-icon"
                        />
                    </div>
                </button>
            </div>
        </div>
    );
};

export default CustomSlider;
