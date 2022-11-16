import React, { useEffect } from "react";
import Header from "../components/Header";
import DreamersReview from "./../components/DreamersReview/index";
import TrustpilotReview from "./../components/TrustpilotReview/index";
import GooglePlayReview from "./../components/GooglePlayReview/index";
import Footer from "../components/Shared/Footer/Footer";
import Meta from "../components/Shared/Footer/Meta";
import Script from "next/script";
import { useRouter } from "next/router";

const Review = () => {
    return (
        <div className="w-[100%]">
            <Script id="google-tag-manager">
                {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K9ZR5ZP');`}
            </Script>

            <Meta title="Review - iDreamers Corp" />
            <div className="bg-[#F3F0FC] w-[100%] h-[auto] sticky top-0 z-50 ">
                <Header
                    bgColor="#7253d9"
                    navListColor="#FFFFFF"
                    navListDefaultColor="#FFFFFF"
                />
            </div>
            <DreamersReview />
            <TrustpilotReview />
            <GooglePlayReview />
            <Footer />
        </div>
    );
};

export default Review;
