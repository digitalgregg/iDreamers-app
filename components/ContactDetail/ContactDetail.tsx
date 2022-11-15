import Link from "next/link";
import React from "react";

const contactData = [
    // {
    //     id: 0,
    //     title: "Phone",
    //     description: "+152 534-468-854",
    //     img: "/img/phone-img.svg",
    //     isSocialIcon: false,
    // },
    {
        id: 2,
        title: "Email Us",
        description: "administration@idreamers.com",
        img: "/img/mail-img.svg",
        isSocialIcon: false,
    },
    {
        id: 3,
        title: "Our social media",
        description: "",
        img: "/img/social-media.svg",
        isSocialIcon: true,
    },
];

const socialIcon = [
    {
        id: 1,
        img: "/img/facebook-img.svg",
        link: "https://www.facebook.com/iDreamers/",
    },
    {
        id: 2,
        img: "/img/twitter-img.svg",
        link: "https://twitter.com/iDreamersLA",
    },
    {
        id: 3,
        img: "/img/linked-in.svg",
        link: "https://www.linkedin.com/company/idreamers",
    },
    {
        id: 4,
        img: "/img/instraimg.svg",
        link: "https://www.instagram.com/idreamerscorp/",
    },
];
const ContactDetail = () => {
    return (
        <div className="w-[100%] pb-[80px] xs:pb-[80px] md:pb-[80.08px] lg:pb-[110px]">
            <div className=" flex flex-col md:flex-row justify-center gap-[15px] xs:gap-[30px] md:gap-[20px] 4xl:gap-[165px] px-[20px] md:px-[65px] 2xl:px-[153px] 4xl:px-[239px]">
                {contactData.map((data) => {
                    return (
                        <div
                            key={data.id}
                            className="flex flex-col bg-[#FFFFFF] rounded-[8px] h-auto w-[90%] mx-auto xs:mx-auto md:mx-0 py-[30px] xs:w-[364px] md:w-[211.33px] lg:w-[223px] 2xl:w-[368px] xs:py-[50px] md:py-[20px] 2xl:py-[50px] text-center"
                            style={{
                                boxShadow:
                                    "0px 6px 16px -2px rgba(38, 31, 64, 0.16)",
                            }}
                        >
                            <img
                                src={data.img}
                                alt="logo"
                                className="w-[60px] h-[60px] mx-auto"
                            />
                            <h2 className="text-[#1D1D1D] text-[16px] xs:text-[20px] py-[15px] xs:py-[25px] md:text-[16px] md:py-[20px]  lg:text-[14px] lg:py-[10px] 2xl:text-[20px] 2xl:py-[25px] leading-[125%] font-normal">
                                {data.title}
                            </h2>
                            <h3 className="text-[19px] text-[#1D1D1D] xs:text-[24px] md:text-[16px] 2xl:text-[24px] font-medium leading-[125%] px-2 break-words">
                                {data.description}
                            </h3>
                            {data.isSocialIcon === true && (
                                <div className="flex justify-center gap-[20px]">
                                    {socialIcon.map((icon) => (
                                        <span key={icon.id}>
                                            <a href={icon.link}>
                                                <img
                                                    src={icon.img}
                                                    alt="image"
                                                    key={icon.id}
                                                    className="xs:w-[40px] xs:h-[40px] md:w-[30px] md:h-[30px] lg:w-[26px] lg:h-[26px] 2xl:w-[40px] 2xl:h-[40px] cursor-pointer hover:opacity-70"
                                                />
                                            </a>
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ContactDetail;
