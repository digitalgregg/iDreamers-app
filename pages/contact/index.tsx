import Head from "next/head";
import Script from "next/script";
import React from "react";
import ContactDetail from "../../components/ContactDetail/ContactDetail";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import Header from "../../components/Header";
import Footer from "../../components/Shared/Footer/Footer";
import Meta from "../../components/Shared/Footer/Meta";

const ContactUs = () => {
    return (
        <>
            <Script id="google-tag-manager">
                {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K9ZR5ZP');`}
            </Script>

            <Meta title="Contact Us - iDreamers App" />
            <div className="sticky top-0 z-50 bg-[#F3F0FC]">
                <Header />
            </div>
            <div className="lg:bg-[#F3F1FC] bg-transparent lg:mb-[110px] xl:mb-[0px]">
                <div className="py-[50px] xs:py-[50px] md:pt-[26px] md:pb-[80px] lg:py-[105px] 2xl:pt-[105px] 2xl:pb-[110px]">
                    <div className="flex items-center flex-col md:flex-col-reverse lg:flex-row lg:justify-center lg:gap-[33px] 2xl:gap-[65px] 4xl:gap-[170px] px-[20px] md:px-[65px] 2xl:px-[153px] 4xl:px-[239px]">
                        <GetInTouch />
                        <div className="hidden md:block md:w-[588px] lg:w-[442px]">
                            <div className="flex lg:flex-col md:flex-col-reverse">
                                <div className="md:mb-[50px] md:mt-[50px] lg:mt-[0px] lg:mb-[63.65px] 2xl:mb-[119.51px]">
                                    <h2 className="md:text-center lg:text-left text-[#31265A] font-semibold text-[48px] leading-[125%] mb-[20px]">
                                        Contact Us
                                    </h2>
                                    <p className="md:text-center lg:text-left font-light text-[16px] leading-[146%] w-[100%]">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Lorem ipsum dolor sit
                                        amet, consectetur adipiscing elit. Lorem
                                        ipsum dolor sit amet, consectetur
                                        adipiscing elit.
                                    </p>
                                </div>
                                <div>
                                    <img
                                        src="/img/contact-logo.svg"
                                        alt="contact-image"
                                        className="md:mx-auto lg:mx-0 md:w-[386px] md:h-[211.92px] 2xl:h-[214.15px]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ContactDetail />
            </div>
            <Footer />
        </>
    );
};

export default ContactUs;
