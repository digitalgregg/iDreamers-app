import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const GetInTouch = () => {
  const [loading, setLoading] = useState(false);
  const input =
    "w-[100%] h-[48px] md:w-[289px] lg:w-[176.16px] 2xl:w-[269px] 4xl:w-[340px] text-[#4E5256] px-[20px] py-[12px] border border-[#DADADA] rounded-[8px] outline-[#DADADA]";
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      const formData: any = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
      };
      await emailjs
        .send(
          `${process.env.NEXT_PUBLIC_SERVICE_ID}`,
          `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`,
          formData,
          `${process.env.NEXT_PUBLIC_PUBLIC_KEY}`
        )
        .then((data) => {
          // console.log("data",data)
          setLoading(false);
          toast.success("Your request has been submitted!");
          reset()
        });
    } catch (error) {
      console.log("error",error)
      setLoading(false);
      toast.error("Your request failed!");
    }
  };
  return (
    <div className="bg-[#FFFFFF] lg:rounded-[8px] lg:shadow-lg  w-[100%] md:w-[668px] lg:w-[429px] 2xl:w-[638px] 4xl:w-[828px] h-auto">
      <div className="xs:py-[40px] xs:px-[40px] md:px-[40px] lg:px-[23.31px] 2xl:px-[45px] lg:py-[50px]">
        <h2 className="text-[#31265A] font-medium text-[24px] xs:text-[30px] md:text-[30px] md:leading-[125%] mb-[10px]">
          Get In Touch With Us
        </h2>
        <h3 className="font-normal xs:text-[14px] md:text-[16px] leading-[100%] mb-[40px] xs:mb-[40px] md:mb-[30px] lg:mb-[37px] text-[#4E5256]">
          Let’s contact us if you have any questions?
        </h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name", { required: true })}
            className="w-[100%] h-[48px] mb-[10px] text-[14px] xs:text-[16px] px-[20px] py-[12px] text-[#4E5256] font-normal border border-[#DADADA] rounded-[8px] outline-[#DADADA]"
            style={{
              border: errors.name && "1px solid #E51937",
            }}
            placeholder="Your name"
          />
          {errors.name && (
            <h3 className="text-red-500 text-[12px]">Name is required</h3>
          )}
          <div className="flex flex-col gap-[20px] mt-[10px] xs:flex-row xs:gap-[10px] md:gap-[0px] xs:justify-between">
            <div>
              <input
                {...register("email", { required: true })}
                className={input}
                style={{
                  border: errors.email && "1px solid #E51937",
                }}
                placeholder="Email"
              />
              {errors.email && (
                <h3 className="text-red-500 mt-[8px] text-[12px]">
                  Email is required
                </h3>
              )}
            </div>
            <div>
              <input
                {...register("phone", { required: true })}
                className={input}
                style={{
                  border: errors.phone && "1px solid #E51937",
                }}
                placeholder="Phone"
              />
              {errors.phone && (
                <h3 className="text-red-500 mt-[8px] text-[12px]">
                  Phone is required
                </h3>
              )}
            </div>
          </div>
          <textarea
            {...register("message", { required: true })}
            rows={3}
            cols={3}
            placeholder="Message"
            style={{
              border: errors.message && "1px solid #E51937",
            }}
            className="w-[100%] mt-[20px] text-[#4E5256] px-[20px] py-[12px] border border-[#DADADA] rounded-[8px] outline-[#DADADA]"
          />
          {errors.message && (
            <h3 className="text-red-500 mt-[8px] text-[12px]">
              Message is required
            </h3>
          )}
          <button
            type="submit"
            style={{ boxShadow: "0px 6px 16px -2px rgba(38, 31, 64, 0.16)" }}
            className="w-[100%] mt-[30px] cursor-pointer md:w-[224px] font-medium  h-[55px] bg-[#866EE1] border-[#866EE1] rounded-[72px] 2xl:text-[18px] text-[#FFFFFF] hover:bg-primary"
          >
            {loading ? "Sending..." : "Send Request"}{" "}
            <span className={`${loading && "hidden"} text-[20px]`}>&rarr;</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;
