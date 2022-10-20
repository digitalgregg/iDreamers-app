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
      return router.asPath.includes(v.baseUrl) && "bg-[#866EE1]";
    } else {
      return router.asPath == v.url && "bg-[#866EE1]";
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
        style={{ backgroundColor: "#F3F0FC" }}
      >
        <div className="w-[90%] pb-[30px] drawer container1 mx-auto text-black text-[16px] font-semibold pt-[40px] relative ">
          <div className="px-4 container2">
            <img
              onClick={toggleDrawer}
              src="/img/crossIcon.svg"
              alt="close icon"
              className="w-[24px] h-[24px] absolute top-[20px] right-[20px] cursor-pointer mb-4"
            />

            {menuItems.map((item: any) => (
              <div key={item.id}>
                <ul className="py-[10px]">
                  <li
                    className={`py-[13px] px-4 cursor-pointer rounded-[4px] hover:bg-[#866EE1] ${checkActive(
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
      </Drawer>
    </>
  );
};

export default MoboDraer;
