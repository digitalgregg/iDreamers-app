import React from "react";
import NewsLetter from "../../NewsLetter";
import  MailchimpSubscribe  from 'react-mailchimp-subscribe';

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
    url:"how-it-works"
  },
  {
    title: "Review",
    url:"review"
  },
  {
    title: "Contact",
    url:"contact"
  },
];
const FooterMenuThree = [
  {
    title: "Terms & Conditions",
    url:"terms-condition"
  },
  {
    title: " Privacy Policy",
    url:"privacy-policy"
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
                  onValidated={(formData: any) => subscribe(formData)}
                />
              );
            }}
          />
          <hr className="my-[40px] bg-[#ffffff1a] opacity-25 hidden lg:block " />
          <div
            className="grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-[100%] gap-[40px] 
                    lg:pt-[89.74px] pb-[50.56px] xs:pb-[62.56px] md:pb-[122.96px] lg:pb-[122.96px] 2xl:pb-[122.96px] 4xl:pb-[80.96px]"
          >
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
                      href={item.url}
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
                      href={item.url}
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
                  className="w-[26.87px] h-[26.6px] cursor-pointer"
                />
                <img
                  src="/img/Instagram.svg"
                  alt="instagram"
                  className="w-[28.21px] h-[22.13px] cursor-pointer"
                />
                <img
                  src="/img/Twitter.svg"
                  alt="twitter"
                  className="w-[25.53px] h-[25px] cursor-pointer"
                />
              </div>
              <h3 className="cursor-pointer font-normal text-[18px] text-[#FFFFFF] leading-[160%] mt-[27px] mb-[24px]">
                Try it out !
              </h3>
              <img
                src="/img/googleplay.svg"
                alt="googleplay"
                className="cursor-pointer mb-[33px]"
              />
              <img src="/img/appstore.svg" alt="appstore" className="cursor-pointer"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;