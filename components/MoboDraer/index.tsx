/* eslint-disable @next/next/no-img-element */
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import React from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { signupState } from "../../state";
import { useQuery } from "react-query";

const menuItems = [
  {
    id: 0,
    title: "Home",
    // img: "/img/c",
    url: "/",
  },
  {
    id: 0,
    title: "How it works ",
    // img: "/img/c",
    url: "/how-it-works",
  },
  {
    id: 1,
    title: "Review",
    // img: "/img/.svg",
    url: "/review",
  },
  {
    id: 2,
    title: "Contacts",
    // img: "/img/.svg",
    url: "/contact",
  },
];

const MoboDraer = ({ toggleDrawer, isOpen }: any) => {
  const router = useRouter();
  const [userData] = useAtom(signupState);

  const checkActive = (v: any) => {
    if (v.baseUrl) {
      return router.asPath.includes(v.baseUrl) && "text-black";
    } else {
      return router.asPath == v.url && "text-[#866EE1]";
    }
  };
  const handleOnClick = (item: any) => {
    router.push(item.url);
  };
  return (
    <>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className="bla"
        size="100%"
        style={{ backgroundColor: "#FFFFFF" }}
        // #F3F0FC
      >
        <div className="w-[100%] pb-[30px] container1 text-center drawer text-black text-[16px] font-semibold pt-[36px] relative ">
          <div className="container2">
            <div className="flex items-center justify-between px-[20px]">
              <img
                src="/img/ilogo.svg"
                alt="logo"
                className="w-[49px] h-[49px] md:w-[65px] md:h-[65px]"
              />
              <img
                onClick={toggleDrawer}
                src="/img/cross-icon.svg"
                alt="close icon"
                className="w-[14px] h-[14px] cursor-pointer mb-4"
              />
            </div>
            <div className="divide-y divide-y-[#31265A] mt-[71px]">
              {menuItems.map((item: any) => (
                <div key={item.id}>
                  <ul className="">
                    <li
                      className={`py-[20px] px-4 cursor-pointer rounded-[4px] hover:text-[#3e2891] ${checkActive(
                        item
                      )}`}
                      onClick={() => handleOnClick(item)}
                    >
                      {item.title}
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default MoboDraer;
