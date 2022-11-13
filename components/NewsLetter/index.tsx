import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";

const NewsLetter = ({ status, message, onValidated }: any) => {
    const router = useRouter();
    console.log("message", message, status);
    const validate = Yup.object({
        email: Yup.string().email().required("Enter a valid email!"),
    });
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validate),
    });

    const onSubmit = async (data: any) => {
        try {
            await onValidated({ EMAIL: data.email });
            toast.success("Thank you for subscribing!");
            reset();
            router.push("/thank-you/signed-up");
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <h2 className="font-bold text-[24px] leadign-[33px] mb-[25px] xs:text-[24px] xs:leadign-[33px] xs:mb-[25px] md:text-[36px] md:leading-[49px] md:mb-[42px] lg:text-[48px] lg:mb-[42px] lg:leading-[66px] xl:text-[48px] xl:mb-[42px] xl:leading-[66px] 2xl:text-[48px] 2xl:mb-[42px] 2xl:leading-[66px] 3xl:text-[48px] 3xl:mb-[42px] 3xl:leading-[66px] 4xl:text-[48px] 4xl:leading-[66px] 4xl:mb-[40px] text-[#FFFFFF] text-center">
                Subscribe to Our Newsletter
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mx-auto border-[#ffffff80] mb-[50px] xs:mb-[50px] md:mb-[77px] lg:mb-[50px] 4xl:mb-[75.11px] border w-[100%] h-[58px] xs:w-[440.44px] xs:h-[58px] md:w-[637.88px] lg:w-[697px] md:h-[84px] rounded-[20px]">
                    <input
                        {...register("email")}
                        placeholder="Enter your email address"
                        className="w-[64%] xs:w-[65%] lg:w-[68%] px-[20px] text-[12px] py-[19px] xs:px-[20px] xs:text-[12px] xs:py-[19px] md:px-[28.37px] md:text-[20px] md:py-[26px] lg:px-[31px] 4xl:px-[31px] 4xl:py-[26px] 4xl:text-[20px] font-normal text-[#ffffff80] bg-transparent border-none outline-none"
                    />
                    <button
                        type="submit"
                        className="text-[16px] w-[35%] xs:w-[144.87px] xs:text-[16px] md:w-[209.81px] md:text-[20px] lg:w-[217.65px] 4xl:w-[217.65px] 4xl:text-[20px] h-[100%] float-right rounded-[20px] bg-[#F3F1FC] text-[#31265A] font-bold cursor-pointer border border-solid border-inherit hover:bg-[#866EE1] hover:text-white transition ease-in-out duration-[300ms]"
                    >
                        {status === "sending" ? "Sending..." : "Submit"}
                    </button>

                    {errors.email && (
                        <h3 className="text-red-500 mt-[10px] ml-[10px] text-[12px]">
                            Enter a valid email!
                        </h3>
                    )}
                </div>
            </form>
        </div>
    );
};
export default NewsLetter;
