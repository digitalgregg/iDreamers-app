import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Shared/Footer/Footer";

const index = () => {
  return (
    <div>
      <Header
        bgColor="#DBD4F6"
        topPadding="0px"
        navListColor="#866EE1"
        navListDefaultColor="black"
      />
      <div className="pt-[70px] pb-[70px] w-[100%] h-auto flex items-center justify-center">
        <div className="px-[20px] md:px-[65px] 2xl:px-[153px] 4xl:px-[239px]">
          {[1, 2, 3, 4].map((item, i) => {
            return (
              <div className="" key={i}>
                <h2 className="text-center md:text-left font-semibold text-[20px] mb-[16px] xs:text-[26px] xs:mb-[16px] md:mb-[30px] leading-[54px] lg:text-[33px] 2xl:text-[40px] text-[#212325]">
                  Step by Step Guide to Your First Angular 5 App
                </h2>
                <p className="w-[100%] mb-[20px] font-normal text-[14px] xs:text-[14px] 2xl:text-[16px] leading-[26px] text-[#787C80]">
                  Angular 5 is a new version of the Angular framework developed
                  by Google. Angular 5 comes with improvements including
                  optimized builds and faster compile times, but in this Angular
                  5 tutorial, we are going to build a notes app from scratch.
                  <br />
                  <br />
                  Angular 5 is a new version of the Angular framework developed
                  by Google. Angular 5 comes with improvements including
                  optimized builds and faster compile times, but in this Angular
                  5 tutorial, we are going to build a notes app from scratch.
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default index;