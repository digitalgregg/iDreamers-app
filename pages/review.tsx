import React from "react";
import Header from "../components/Header";
import DreamersReview from "./../components/DreamersReview/index";
import TrustpilotReview from "./../components/TrustpilotReview/index";
import GooglePlayReview from "./../components/GooglePlayReview/index";
import Footer from "../components/Shared/Footer/Footer";

const Review = () => {
    return (
        <div className="w-[100%]">
            <div className="bg-[#F3F0FC] w-[100%] h-[auto]">
                <Header
                    bgColor="#7253d9"
                    navListColor="#FFFFFF"
                    navListDefaultColor="#FFFFFF"
                />
                <DreamersReview />
                <TrustpilotReview />
            </div>
            <GooglePlayReview />
            <Footer />
        </div>
    );
};

export default Review;
