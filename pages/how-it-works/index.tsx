import Script from "next/script";
import React from "react";
import AskQuestion from "../../components/AskQuestion/AskQuestion";
import DownloadIdreamer from "../../components/DownloadIdreamer/DownloadIdreamer";
import GetStarted from "../../components/GetStarted";
import Header from "../../components/Header";
import Footer from "../../components/Shared/Footer/Footer";
import Meta from "../../components/Shared/Footer/Meta";

const index = () => {
    return (
        <>
            <Script id="google-tag-manager">
                {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K9ZR5ZP');`}
            </Script>

            <div className="w-[100%]">
                <Meta title="How it works - iDreamers App" />
                <div className="w-[100%] h-auto bg-[#F3F0FC]">
                    <Header
                        bgColor="#DBD4F6"
                        topPadding="0px"
                        navListColor="#866EE1"
                        navListDefaultColor="black"
                    />
                    <div className="px-[20px] md:px-[65px] 2xl:px-[153px] 4xl:px-[239px]">
                        <GetStarted />
                    </div>
                </div>
                <AskQuestion />
                <DownloadIdreamer />
                <Footer />
            </div>
        </>
    );
};
export default index;
