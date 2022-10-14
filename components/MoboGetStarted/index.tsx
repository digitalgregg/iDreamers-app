import React from "react";

const demoData = [
    {
        id: 0,
        title: "Download & Register",
        description:
            "SeaWire Web is a wireframe kit that has more than 15 popular categories and more than 200 screens from each category, SeaWire Web deserves to be your partner in working on projects. ",
    },
    {
        id: 1,
        title: "Connect with Supporters",
        description:
            "SeaWire Web is a wireframe kit that has more than 15 popular categories and more than 200 screens from each category, SeaWire Web deserves to be your partner in working on projects. ",
    },
    {
        id: 2,
        title: "Reach Your Dreams",
        description:
            "SeaWire Web is a wireframe kit that has more than 15 popular categories and more than 200 screens from each category, SeaWire Web deserves to be your partner in working on projects. ",
    },
    {
        id: 3,
        title: "Reach Your Dreams",
        description:
            "SeaWire Web is a wireframe kit that has more than 15 popular categories and more than 200 screens from each category, SeaWire Web deserves to be your partner in working on projects. ",
    },
];

const MoboGetStarted = () => {
    return (
        <div className="bg-[#F3F1FC] w-[100%] pb-[81px]">
            <div className="px-[20px]">
                <p className="font-bold text-[#866EE1] text-center pt-[31px] text-[12px] md:text-[16px] mb-[10px] md:mb-[20px]">
                    HOW IT WORKS
                </p>
                <h1 className="font-extrabold leading-[32.78px] md:leading-[63.98px] text-[24px] md:text-[48px] text-[#31265A] text-center pb-[49px] md:pb-[80px]">
                    Get Started with 4 Easy Steps
                </h1>

                <div className="h-auto border-dotted border-l-[2px] ml-8 border-[#A2A9B0]">
                    <div className="flex flex-col ">
                        {demoData.map((item) => (
                            <div
                                key={item.id}
                                className=" mt-[87px] first:mt-0"
                            >
                                <div className="flex flex-row ">
                                    <div className="w-[64px] h-[64px] bg-[#31265A] rounded-[8px] flex items-center justify-center ml-[-30px] ">
                                        <p className="text-white font-bold text-[36px] px-[5px]">
                                            02
                                        </p>
                                    </div>
                                    <div className="xs:pl-[61px] pl-[40px]">
                                        <h1 className="font-bold leading-[31.99px] text-[20px] text-[#31265A] mb-[16px]">
                                            {item.title}
                                        </h1>
                                        <p className="text-[14px] leading-[21px] text-[#4E5256] font-normal">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoboGetStarted;
