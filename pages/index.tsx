import type { NextPage } from "next";
import Head from "next/head";
import HeroSection from "../components/HeroSection";
import AppScreen from "../components/AppScreen/AppScreen";
import AskQuestion from "../components/AskQuestion/AskQuestion";
import ChooseIdream from "../components/ChooseIdream/ChooseIdream";
import DownloadIdreamer from "../components/DownloadIdreamer/DownloadIdreamer";
import Footer from "../components/Shared/Footer/Footer";
import Header from "../components/Header";
import Features from "../components/Features";
import WeHelp from "../components/WeHelp";
import GetStarted from "../components/GetStarted";
import ClientReview from "../components/ClientReview";
import CreatedBy from "../components/CreatedBy";
import TheSolution from "../components/TheSolution";
import Script from "next/script";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Home - iDreamers App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* script tag  */}
            <Script id="google-tag-manager">
                {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K9ZR5ZP');`}
            </Script>

            <main className="w-[100%] mx-auto">
                <div className="w-[100%] h-auto bg-[#F3F0FC] sticky top-0 z-50 ">
                    <Header
                        bgColor="transparent"
                        topPadding="46px"
                        navListColor="#866EE1"
                        navListDefaultColor="black"
                    />
                </div>
                <HeroSection />
                <CreatedBy />
                <Features />
                <WeHelp />
                {/* <ChooseIdream /> */}
                <TheSolution />
                <GetStarted />
                {/* <AppScreen /> */}
                <ClientReview />
                <div className="bg-[#F3F1FC] mt-[60px] lg:mt-[80px] pb-[10px] lg:pb-0">
                    <AskQuestion />
                    <DownloadIdreamer />
                </div>
                <Footer />
            </main>
        </div>
    );
};

export default Home;
