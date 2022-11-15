import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { ReactNode, useEffect, useState } from "react";
import MoboDraer from "../MoboDraer";

type NavLinksType = {
    title: ReactNode;
    url: string;
    navListColor?: string;
    navListDefaultColor?: string;
};

const NavList = ({
    title,
    url,
    navListColor,
    navListDefaultColor,
}: NavLinksType) => {
    const router = useRouter();
    // console.log("path:", router.asPath, "url:", url);
    // 866EE1
    return (
        <li className="   lg:hover:bg-transparent hover:bg-[#2B2B2B]">
            <div className="">
                <a
                    href={url}
                    style={{
                        color:
                            router.asPath === url
                                ? `${navListColor}`
                                : `${navListDefaultColor}`,
                    }}
                    className={`${
                        router.asPath === url
                            ? "text-[16px] !font-normal 4xl:!font-medium  border-b-2 border-[#866EE1] hover:!text-[#866EE1]"
                            : "text-[16px] !font-normal 4xl:!font-medium  hover:!text-[#866EE1] "
                    } ${
                        router.asPath === "/review" &&
                        "border-white hover:border-b-2 hover:!border-white hover:!text-white"
                    } text-[#000000] font-semibold text-[16px] hover:border-b-2 hover:border-[#866EE1]  `}
                >
                    {title}
                </a>
            </div>
        </li>
    );
};

const Header = ({
    bgColor,
    topPadding,
    navListColor,
    navListDefaultColor,
}: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState);
    };

    const container2 = "px-[20px] md:px-[65px] 2xl:px-[153px] 4xl:px-[239px]";
    return (
        <nav className=" w-[100%]">
            <div
                style={{ backgroundColor: `${bgColor}` }}
                className={`${container2} w-[100%]  flex items-center justify-between h-[100px]`}
            >
                <div className="">
                    <a href="/">
                        <img
                            src="/img/ilogo.svg"
                            alt="logo"
                            className="w-[49px] h-[49px] md:w-[65px] md:h-[65px] cursor-pointer"
                        />
                    </a>
                </div>
                <div className="md:hidden">
                    <img
                        onClick={toggleDrawer}
                        src="/img/hamburg.svg"
                        alt="hamburg icon"
                        className="w-[24px] h-[24px]"
                    />
                </div>
                {/* nav item  */}
                <div className="hidden md:block">
                    <ul className="flex gap-[24px] text-[#ffffff] text-[16px] font-normal 4xl:font-medium  items-center ">
                        {/* <NavList
              title={"Home"}
              url={"/"}
              navListColor={`${navListColor}`}
              navListDefaultColor={`${navListDefaultColor}`}
            /> */}
                        <NavList
                            title={"How it works"}
                            url={"/"}
                            navListColor={`${navListColor}`}
                            navListDefaultColor={`${navListDefaultColor}`}
                        />
                        <NavList
                            title={"Review"}
                            url={"/review"}
                            navListColor={`${navListColor}`}
                            navListDefaultColor={`${navListDefaultColor}`}
                        />
                        <NavList
                            title={"Blog"}
                            url={"https://blog.idreamers.com"}
                            navListColor={`${navListColor}`}
                            navListDefaultColor={`${navListDefaultColor}`}
                        />
                        <NavList
                            title={"Contacts"}
                            url={"/contact"}
                            navListColor={`${navListColor}`}
                            navListDefaultColor={`${navListDefaultColor}`}
                        />
                        <a
                            href="https://apps.apple.com/us/app/idreamers/id1633296747"
                            target="_blank"
                            rel="noreferrer"
                            className="w-[171px] h-[40px] bg-[#866EE1] hover:bg-[#674fbe] rounded-[10px] text-[16px] font-bold	flex justify-center items-center"
                        >
                            Download App
                        </a>
                    </ul>
                </div>
            </div>
            <div className="md:hidden">
                <MoboDraer
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    toggleDrawer={toggleDrawer}
                />
            </div>
        </nav>
    );
};

export default Header;
