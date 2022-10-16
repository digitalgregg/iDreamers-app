import React, { useState } from "react";
import classNames from "classnames";
import Slider from "react-slick";

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
    const [currentIndex, setCurrentIndex] = useState(0);

    const settings: any = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        appendDots: (dots: any) => {
            return <ul style={{ margin: "0px" }}>{dots}</ul>;
        },
        beforeChange: (prev: any, next: any) => {
            setCurrentIndex(next);
        },
        customPaging: (pagi: any, i: any) => {
            const style: any = {
                width: 28,
                height: 2,
                display: "inline-block",
                backgroundColor: "#E9ECF0",
            };
            const activeStyle: any = {
                width: 28,
                height: 2,
                display: "inline-block",
                backgroundColor: "#B8B8B8",
            };
            return (
                <a
                    className=" slick-dot"
                    style={pagi === currentIndex ? activeStyle : style}
                />
            );
        },
    };

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
            <div className="md:hidden">
                <Slider {...settings}>
                    {images.map((image) => (
                        <img
                            src={image.url}
                            alt="image"
                            key={image.id}
                            className="w-[270px] h-[545px] mx-auto"
                        />
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default AppScreen;
