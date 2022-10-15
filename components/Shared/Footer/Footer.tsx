import React from "react";

const FooterMenuOne = [
    {
        title: "hello@idreamers.app",
    },
    {
        title: "+1-800-123 4567",
    },
];

const FooterMenuTwo = [
    {
        title: "How it works",
    },
    {
        title: "Review",
    },
    {
        title: "Contact",
    },
];
const FooterMenuThree = [
    {
        title: "Terms & Conditions",
    },
    {
        title: " Privacy Policy",
    },
];

const Footer = () => {
    const footerMenuHeader =
        "font-bold text-[20px] leading-[28px] text-[#FFFFFF]";
    return (
        <>
            <div className="-z-50 bg-[#31265A] pt-[30px] xs:pt-[30px] md:pt[54px] lg:pt-[238px] xl:pt-[238px] 2xl:pt-[238px] 3xl:pt-[238px] 4xl:pt-[263.15px] h-auto w-[100%] flex justify-center">
                <div className="">
                    <div>
                        <h2 className="font-bold text-[24px] leadign-[33px] mb-[25px] xs:text-[24px] xs:leadign-[33px] xs:mb-[25px] md:text-[36px] md:leading-[49px] md:mb-[42px] lg:text-[48px] lg:mb-[42px] lg:leading-[66px] xl:text-[48px] xl:mb-[42px] xl:leading-[66px] 2xl:text-[48px] 2xl:mb-[42px] 2xl:leading-[66px] 3xl:text-[48px] 3xl:mb-[42px] 3xl:leading-[66px] 4xl:text-[48px] 4xl:leading-[66px] 4xl:mb-[40px] text-[#FFFFFF] text-center">
                            Subscribe to Our Newsletter
                        </h2>
                        <div className="mx-auto border-[#ffffff80] mb-[50px] xs:mb-[50px] md:mb-[77px] lg:mb-[50px] 4xl:mb-[75.11px] border w-[100%] h-[58px] xs:w-[440.44px] xs:h-[58px] md:w-[637.88px] lg:w-[697px] md:h-[84px] rounded-[20px]">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="ml-[20px] text-[12px] py-[19px] xs:ml-[20px] xs:text-[12px] xs:py-[19px] md:ml-[28.37px] md:text-[20px] md:py-[28px] lg:ml-[31px] 4xl:ml-[31px] 4xl:py-[26px] 4xl:text-[20px] font-normal text-[#ffffff80] bg-transparent border-none outline-none"
                            />
                            <button
                                type="submit"
                                className="text-[16px] w-[35%] xs:w-[144.87px] xs:text-[16px] md:w-[209.81px] md:text-[20px] lg:w-[217.65px] 4xl:w-[217.65px] 4xl:text-[20px] h-[100%] float-right rounded-[20px] bg-[#F3F1FC] text-[#31265A] font-bold cursor-pointer border border-solid border-inherit"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                    <hr className="my-[40px] bg-[#ffffff1a] opacity-25 hidden lg:block " />
                    <div className="grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-[100%] gap-[40px] md:pt-[89.74px] pb-[50.56px] xs:pb-[62.56px] md:pb-[122.96px] lg:pb-[122.96px] 2xl:pb-[122.96px] 4xl:pb-[80.96px]">
                        <div>
                            <img
                                src="/img/footer-logo.svg"
                                alt="logo"
                                className="4xl:w-[75px] 4xl:h-[75px]"
                            />
                            <ul className="flex flex-col gap-[14px] mt-[26px]">
                                {FooterMenuOne.map((item, i) => (
                                    <li key={i}>
                                        <a
                                            href=""
                                            className="text-[#ffffff80] text-[20px] font-normal 4xl:leading-[28px]"
                                        >
                                            {item.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="">
                            <label className={footerMenuHeader}>About</label>
                            <ul className="flex flex-col gap-[14px] mt-[32px]">
                                {FooterMenuTwo.map((item, i) => (
                                    <li key={i}>
                                        <a
                                            href=""
                                            className="text-[#ffffff80] text-[20px] font-normal 4xl:leading-[28px]"
                                        >
                                            {item.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <label className={footerMenuHeader}>Legal</label>
                            <ul className="flex flex-col gap-[14px] mt-[32px]">
                                {FooterMenuThree.map((item, i) => (
                                    <li key={i}>
                                        <a
                                            href=""
                                            className="text-[#ffffff80] text-[20px] font-normal 4xl:leading-[28px]"
                                        >
                                            {item.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="">
                            <div className="flex gap-[20px]">
                                <img
                                    src="/img/Facebook.svg"
                                    alt="facebook"
                                    className="w-[26.87px] h-[26.6px]"
                                />
                                <img
                                    src="/img/Instagram.svg"
                                    alt="instagram"
                                    className="w-[28.21px] h-[22.13px] "
                                />
                                <img
                                    src="/img/Twitter.svg"
                                    alt="twitter"
                                    className="w-[25.53px] h-[25px]"
                                />
                            </div>
                            <h3 className="font-normal text-[18px] text-[#FFFFFF] leading-[160%] mt-[27px] mb-[24px]">
                                Try it out !
                            </h3>
                            <img
                                src="/img/googleplay.svg"
                                alt="googleplay"
                                className="mb-[33px]"
                            />
                            <img src="/img/appstore.svg" alt="appstore" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Footer;
