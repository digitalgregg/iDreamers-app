import React from "react";
import AskQuestion from "../../components/AskQuestion/AskQuestion";
import DownloadIdreamer from "../../components/DownloadIdreamer/DownloadIdreamer";
import GetStarted from "../../components/GetStarted";
import Header from "../../components/Header";
import Footer from "../../components/Shared/Footer/Footer";
 
const index = () => {
  return (
    <div className="w-[100%]">
      <div className="w-[100%] h-auto bg-[#F3F0FC]">
        <Header
          bgColor="#DBD4F6"
          topPadding="0px"
          navListColor="#866EE1"
          navListDefaultColor="black"
        />
        <div className="px-[20px] md:px-[65px] 2xl:px-[153px] 4xl:px-[239px]">
          <GetStarted />
        </div>
      </div>
      <AskQuestion />
      <DownloadIdreamer />
      <Footer />
    </div>
  );
};
export default index;
