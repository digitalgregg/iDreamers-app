import React from "react";
import QuestionCard from "./QuestionCard";

const questionsData = [
    {
        question: "If you can dream it, you can do it. We can help.",
        answer: "Idreamers app Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
        question: "What Does The iDreamers App Do?",
        answer: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
        question: "What Does The iDreamers App Do?",
        answer: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
        question: "What Does The iDreamers App Do?",
        answer: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
        question: "What Does The iDreamers App Do?",
        answer: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
];

const AskQuestion = () => {
    return (
        <div className="">
            <div className="mx-auto 2xl:w-[1135px] lg:w-[894px] md:w-[638px] xs:w-[440px] w-[90%]">
                <div className="pt-[50px] xs:pt-[50px] md:pt-[66px] lg:pt-[110px] 4xl:pt-[130px]"></div>
                <div className="text-[19px] leading-[120%] xs:text-[24px] xs:leading-[120%] md:text-[36px] md:leading-[120%] lg:text-[48px] text-center text-[#31265A] font-bold">
                    Frequently asked questions?
                </div>
                <div className="pt-[30px] xs:pt-[30px] md:pt-[68px] lg:pt-[61px] 4xl:pt-[80px]"></div>

                <div className="flex flex-col gap-[20px] xs:gap-[24px] lg:gap-[32px] 4xl:gap-[40px]">
                    {questionsData.map((v, i) => (
                        <QuestionCard key={i} data={v} />
                    ))}
                </div>
                <div className="pt-[50px] xs:pt-[50px] lg:pt-[170px] 4xl:pt-[130px]"></div>
            </div>
        </div>
    );
};
export default AskQuestion;
