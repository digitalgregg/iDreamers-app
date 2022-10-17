import React from "react";
import { fakeReview } from "./../../utils/fakeData";
import ReviewCard from "./../ReviewCard/index";
import Script from "next/script";

const TrustpilotReview = () => {
    const fakeData = fakeReview;
    return (
        <div className="pt-[88px] px-[20px] md:px-[65px] 2xl:px-[153px] 4xl:px-[239px] w-[100%]">
            <div
                className="trustpilot-widget"
                data-locale="en-US"
                data-template-id="539adbd6dec7e10e686debee"
                data-businessunit-id="61ef251e4635aa01694acb2d"
                data-style-height="750px"
                data-style-width="100%"
                data-theme="light"
                data-stars="1,2,3,4,5"
                data-review-languages="en"
            >
                <a
                    href="https://www.trustpilot.com/review/idreamers.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    Trustpilot
                </a>
            </div>
            <Script
                type="text/javascript"
                src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
                async
            ></Script>
        </div>
    );
};

export default TrustpilotReview;
