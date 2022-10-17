import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { ReactNode, useEffect, useState } from "react";
import MoboDraer from "../MoboDraer";
// import MoboDraer from "../MoboDraer";

type NavLinksType = {
    title: ReactNode;
    url: string;
};

const NavList = ({ title, url }: NavLinksType) => {
    const router = useRouter();
    return (
        <li className=" cursor-pointer  lg:hover:bg-transparent hover:bg-[#2B2B2B]">
            <Link href={url} className="w-[272px]">
                <a
                    className={` ${
                        router.asPath === url
                            ? "!text-[#866EE1] text-[16px] !font-normal 4xl:!font-medium cursor-pointer border-b-2 border-[#866EE1]"
                            : "text-[16px] !font-normal 4xl:!font-medium cursor-pointer"
                    } text-[#000000] hover:text-[#e7e5e5] font-semibold text-[16px] `}
                >
                    {title}
                </a>
            </Link>
        </li>
    );
};

const Header = ({ bgColor, topPadding }: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState);
    };

    const container2 = "px-[20px] md:px-[65px] 2xl:px-[153px] 4xl:px-[239px]";
    return (
        <nav style={{ paddingTop: `${topPadding}` }} className=" w-[100%]">
            <div
                style={{ backgroundColor: `${bgColor}` }}
                className={`${container2} w-[100%]  flex items-center justify-between h-[100px]`}
            >
                <div className="">
                    <img
                        src="/img/ilogo.svg"
                        alt="logo"
                        className="w-[49px] h-[49px] md:w-[65px] md:h-[65px]"
                    />
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
                    <ul className="flex gap-[24px] text-[#ffffff] text-[16px] font-normal 4xl:font-medium cursor-pointer">
                        <NavList title={"How it works"} url={"/"} />
                        <NavList title={"Review"} url={"/review"} />
                        <NavList title={"Contacts"} url={"/contact"} />
                    </ul>
                </div>
            </div>
            <MoboDraer isOpen={isOpen} toggleDrawer={toggleDrawer} />
        </nav>
    );
};

export default Header;
