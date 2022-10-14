/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

const QuestionCard = ({ data }: any) => {
  const [isExpand, setExpand] = useState(false);
  const handleExpand = () => {
    setExpand(!isExpand);
  };
  // useEffect(() => {
  //     setExpand(!isExpand);
  // }, [10000, isExpand]);
  return (
    <div
      className="bg-[#fff] cursor-pointer rounded-[12px] p-[20px] xs:p-[20px] md:p-[47px] 2xl:p-[50px]"
      onClick={handleExpand}
      style={{ boxShadow: "5px 5px 12px 2px rgba(5, 8, 28, 0.05)" }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between"
      >
        <div className="text-[14px] font-normal xs:text-[16px] xs:leading-[120%] md:text-[20px] xs:font-semibold text-[#31265A] ">
          {data.question}
        </div>
        <img
          src={`/img/${isExpand ? "remove" : "add"}.svg`}
          alt=""
          className="xs:w-[18px] w-[15px]"
        />
      </motion.div>
      <AnimatePresence initial={false}>
        {isExpand && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "fit-content" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }} // TODO: Duration changeable
            className="overflow-hidden"
          >
            <div className="xs:pt-[9px] md:pt-[27px] pt-[10px]"></div>
            <div className="text-[13px] xs:text-[12px] xs:leading-[160%] md:text-[14px] font-normal text-[#4E5256]">
              {data.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default QuestionCard;
