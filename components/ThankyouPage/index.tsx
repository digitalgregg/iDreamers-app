import React from "react";
import { useRouter } from "next/router";

const ThankyouPage = () => {
    const router = useRouter();
    const getPath = router.asPath;
    const splitPath = getPath.split("/")[2];
    console.log(splitPath, "splitPath");
    return (
        <div className="flex flex-col gap-[30px] lg:gap-[40px] 2xl:gap-[50px] items-center py-[80px] text-[#31265A] text-center px-[20px] bg-[#F3F1FC]">
            <img
                src="/img/thankyouicon.svg"
                alt=""
                className="w-[149px] h-[149px]"
            />
            <h1 className="font-normal text-[48px]">Thank you !</h1>
            {/* <p className="text-[24px]">Your message has been recieved</p> */}
            {splitPath === "signed-up" ? (
                <p className="text-[24px]">You have successfully signed up</p>
            ) : (
                <p className="text-[24px]">Your message has been recieved</p>
            )}
            <button
                onClick={() => router.push("/")}
                className="w-[166px] h-[40px] rounded-[10px] bg-[#866EE1] text-white hover:bg-[#5a43ad]"
            >
                Back to Home
            </button>
        </div>
    );
};

export default ThankyouPage;
