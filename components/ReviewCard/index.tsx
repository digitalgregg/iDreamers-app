import React from "react";

const reviewlength = [1, 2];
const totalReview = [1, 2, 3, 4, 5];
const ReviewCard = () => {
    return (
        <div className="max-w-[1013px] mx-auto mt-[65px] pb-[50px] md:pb-[93px] lg:pb-[105px] 4xl:pb-[110px]">
            <p className="mb-[30px] text-[16px] font-medium  lg:ml-[14%] text-center lg:text-start">
                Showing our 4 & 5 star reviews
            </p>
            <div className="flex lg:flex-row  gap-[28px] flex-wrap justify-center flex-col items-center">
                {reviewlength.map((item, index) => (
                    <div
                        key={index}
                        className="sm:w-[473px] lg:w-[350px] w-[90%] xs:w-[400px] rounded-[10px] bg-white h-[184px]"
                    >
                        <div className="px-[30px] py-[30px]">
                            <div className="flex">
                                {totalReview.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex-row gap-[4px] "
                                    >
                                        <img
                                            src="/img/reviewstar.svg"
                                            alt=""
                                            className=" w-[22.7px] h-[24px] "
                                        />
                                    </div>
                                ))}
                            </div>
                            <p className="py-[12px] font-medium text-[#787C80] text-[16px]">
                                Agnes Keki
                            </p>
                            <p className="pb-[12px] text-[#31265A] text-[16px] font-bold leading-[22.4px] w-[90%] truncate ">
                                A real novelty!
                            </p>
                            <p className="leading-[19.6px] text-[14px] font-normal w-[90%] truncate ">
                                Exciting, attractive and a brand new experience!
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewCard;
