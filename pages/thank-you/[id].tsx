import { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
import Header from "../../components/Header";
import Footer from "../../components/Shared/Footer/Footer";
import Meta from "../../components/Shared/Footer/Meta";
import ThankyouPage from "../../components/ThankyouPage";

const ThankYou: NextPage = () => {
    return (
        <>
            <Meta title="Thank you - iDreamers App" />
            <Script id="google-tag-manager">
                {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K9ZR5ZP');`}
            </Script>

            <div className="bg-[#F3F1FC] w-[100%]">
                <Header
                    bgColor="#F3F1FC"
                    topPadding="0px"
                    navListColor="#866EE1"
                    navListDefaultColor="black"
                />
                <ThankyouPage />
                <Footer />
            </div>
        </>
    );
};

export default ThankYou;
