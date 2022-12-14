import React, { useEffect } from "react";
import NewsLetter from "../../NewsLetter";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { useRouter } from "next/router";
import { socilaFooterIcon } from "../../../utils/fakeData";

const FooterMenuOne = [
    {
        title: "Email us",
    },
];

const FooterMenuTwo = [
    {
        title: "How it works",
        url: "/",
    },
    {
        title: "Review",
        url: "/review",
    },
    {
        title: "Contact",
        url: "/contact",
    },
];
const FooterMenuThree = [
    {
        title: "Terms & Conditions",
        url: "/terms-condition",
    },
    {
        title: " Privacy Policy",
        url: "/privacy-policy",
    },
];

const Footer = () => {
    const URL = `${process.env.NEXT_PUBLIC_MAILCHIMP_URL}`;
    const footerMenuHeader =
        "font-bold text-[20px] leading-[28px] text-[#FFFFFF]";
    return (
        <>
            <div className="-z-50 bg-[#31265A] pt-[30px] xs:pt-[30px] md:pt[54px] lg:pt-[238px] xl:pt-[238px] 2xl:pt-[238px] 3xl:pt-[238px] 4xl:pt-[263.15px] h-auto w-[100%] flex justify-center">
                <div className="">
                    <MailchimpSubscribe
                        url={URL}
                        render={(props) => {
                            const { subscribe, status, message } = props || {};
                            return (
                                <NewsLetter
                                    status={status}
                                    message={message}
                                    onValidated={(formData: any) =>
                                        subscribe(formData)
                                    }
                                />
                            );
                        }}
                    />
                    <hr className="my-[40px] bg-[#ffffff1a] opacity-25 hidden lg:block " />
                    <div
                        className="grid grid-cols-1 xs:grid-cols-2  md:grid-cols-2 lg:grid-cols-4  w-[100%] gap-[40px]  place-content-center
                    lg:pt-[89.74px] pb-[50.56px] xs:pb-[62.56px] md:pb-[122.96px] lg:pb-[122.96px] 2xl:pb-[122.96px] 4xl:pb-[80.96px] px-[40px] md:px-0"
                    >
                        <div className="mx-auto text-center xs:mx-0 xs:text-left">
                            <a href="/">
                                <img
                                    src="/img/footer-logo.svg"
                                    alt="logo"
                                    className="4xl:w-[75px] 4xl:h-[75px]"
                                />
                            </a>
                            <div className="mt-[26px]">
                                <a
                                    href="mailto:administration@idreamers.com"
                                    className="text-[#ffffff80] text-[20px] font-normal 4xl:leading-[28px] hover:text-[#866EE1]"
                                >
                                    Email us
                                </a>
                            </div>
                        </div>
                        <div className="mx-auto text-center xs:mx-0 xs:text-left">
                            <label className={footerMenuHeader}>About</label>
                            <ul className="flex flex-col gap-[14px] mt-[32px]">
                                {FooterMenuTwo.map((item, i) => (
                                    <li key={i}>
                                        <a
                                            href={item.url}
                                            className="text-[#ffffff80] text-[20px] font-normal 4xl:leading-[28px] hover:text-[#866EE1]"
                                        >
                                            {item.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mx-auto text-center xs:mx-0 xs:text-left">
                            <label className={footerMenuHeader}>Legal</label>
                            <ul className="flex flex-col gap-[14px] mt-[32px]">
                                {FooterMenuThree.map((item, i) => (
                                    <li key={i}>
                                        <a
                                            href={item.url}
                                            className="text-[#ffffff80] text-[20px] font-normal 4xl:leading-[28px] hover:text-[#866EE1]"
                                        >
                                            {item.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mx-auto text-center xs:mx-0 xs:text-left">
                            <div className="flex items-center gap-[20px] flex-wrap lg:w-[150px] 2xl:w-full">
                                {socilaFooterIcon.map((item) => (
                                    <div key={item.id}>
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <img
                                                src={item.imgURL}
                                                alt={item.alt}
                                                className="w-[26.87px] h-[26.6px] cursor-pointer hover:opacity-[.7] transition-all duration-200"
                                            />
                                        </a>
                                    </div>
                                ))}
                            </div>
                            <h3 className="cursor-pointer font-normal text-[18px] text-[#FFFFFF] leading-[160%] mt-[27px] mb-[24px]">
                                Try it out !
                            </h3>
                            <a
                                href="https://play.google.com/store/apps/details?id=com.idreamers.system&hl=en_US&gl=US"
                                rel="noreferrer"
                                target="_blank"
                                className="flex justify-center xs:justify-start"
                            >
                                <img
                                    src="/img/googleplay.svg"
                                    alt="googleplay"
                                    className="cursor-pointer mb-[33px] hover:opacity-[0.7]"
                                />
                            </a>
                            <a
                                href="https://apps.apple.com/us/app/idreamers/id1633296747"
                                rel="noreferrer"
                                target="_blank"
                                className="flex justify-center xs:justify-start"
                            >
                                <img
                                    src="/img/appstore.svg"
                                    alt="appstore"
                                    className="cursor-pointer hover:opacity-[0.7]"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Footer;
