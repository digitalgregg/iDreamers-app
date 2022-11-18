import React from "react";

const DreamersReview = () => {
    return (
        <div className="w-[100%] h-[335px] bg-[url('/img/reviwcover.svg')] bg-no-repeat bg-cover bg-center bg-[#F3F1FC]">
            <div className="px-[20px] md:px-[65px] 2xl:px-[153px] 4xl:px-[239px]">
                <h1 className="font-thin md:text-[58px] text-[#31265A] md:leading-[79.75px] 2xl:pt-[91px] lg:pt-[105px] md:pt-[93px] xs:pt-[119px] xs:text-[48px] xs:leading-[65.57px] text-[40px] pt-[100px] leading-[60px]">
                    Our Dreamers <br />{" "}
                    <span className="font-semibold leading-[79.23px]">
                        Reviews
                    </span>
                </h1>
            </div>
        </div>
    );
};

export default DreamersReview;
