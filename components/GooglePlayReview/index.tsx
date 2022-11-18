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
                "mt-[86px] mx-auto items-center flex flex-col overflow-hidden mb-[113px] w-[100%] px-[20px]"
            )}
        >
            <Script src="https://apps.elfsight.com/p/platform.js"></Script>
            <div className="elfsight-app-a77a34fc-624f-4584-8c03-980467bd9011 max-w-[1031px] min-w-[85%] mx-auto"></div>
        </div>
    );
};

export default GooglePlayReview;
