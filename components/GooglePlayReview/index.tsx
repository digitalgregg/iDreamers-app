import classNames from "classnames";
import Script from "next/script";
import React, { useState } from "react";

const containerStyle = "px-[20px] md:px-[65px] 2xl:px-[153px] 4xl:px-[239px]";

const GooglePlayReview = () => {
    const [loading, setLoading] = useState(false);
    // console.log(loading, "loading for review ");
    const handleLoading = (e: any) => {
        if (e.type === "load") {
            setLoading(true);
        } else {
        }
    };
    return (
        <div
            className={classNames(
                "mt-[86px] mx-auto items-center flex flex-col overflow-hidden mb-[113px]"
            )}
        >
            {/* {loading === true && <h1>Loading.....</h1>} */}
            <Script
                onLoad={(e: any) => handleLoading(e)}
                src="https://apps.elfsight.com/p/platform.js"
            ></Script>
            <div
                className={classNames(
                    "elfsight-app-15ca665a-7ccc-4b52-ae53-2029736bbebc",
                    `${containerStyle}`
                )}
            ></div>
        </div>
    );
};

export default GooglePlayReview;
