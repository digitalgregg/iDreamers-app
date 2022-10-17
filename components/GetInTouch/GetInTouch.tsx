import React from "react";
import { useForm } from "react-hook-form";

const GetInTouch = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const input =
    "w-[100%] h-[48px] md:w-[289px] lg:w-[176.16px] 2xl:w-[269px] 4xl:w-[340px] text-[#4E5256] px-[20px] py-[12px] border border-[#DADADA] rounded-[8px] outline-[#a5a1a1]";
  const onSubmit = (data: any) => console.log(data);
  return (
    <div className="bg-[#FFFFFF] lg:rounded-[8px] w-[100%] md:w-[668px] lg:w-[429px] 2xl:w-[638px] 4xl:w-[828px] h-auto">
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
            className="w-[100%] h-[48px] mb-[20px] text-[14px] xs:text-[16px] px-[20px] py-[12px] text-[#4E5256] font-normal border border-[#DADADA] rounded-[8px] outline-[#a5a1a1]"
            style={{
              border: errors.name && "1px solid #E51937",
            }}
            placeholder="Your name"
          />
          {errors.name && (
            <h3 className="text-primary mb-[10px] text-[12px]">
              Name is required
            </h3>
          )}
          <div className="flex flex-col gap-[20px] xs:flex-row xs:gap-[10px] md:gap-[0px] xs:justify-between">
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
                <h3 className="text-primary mb-[10px] text-[12px]">
                  Email is required
                </h3>
              )}
            </div>
            <div>
              <input
                {...register("phone", { required: true })}
                className={input}
                style={{
                  border: errors.email && "1px solid #E51937",
                }}
                placeholder="Phone"
              />
              {errors.email && (
                <h3 className="text-primary mb-[10px] text-[12px]">
                  Phone is required
                </h3>
              )}
            </div>
          </div>
          <textarea
            {...register("message")}
            rows={3}
            cols={3}
            placeholder="Message"
            className="w-[100%] mt-[20px] mb-[30px] text-[#4E5256] px-[20px] py-[12px] border border-[#DADADA] rounded-[8px] outline-[#a5a1a1]"
          />
            <button
              type="submit"
              style={{ boxShadow: "0px 6px 16px -2px rgba(38, 31, 64, 0.16)" }}
              className="w-[100%] cursor-pointer md:w-[224px] font-medium  h-[55px] bg-[#866EE1]  border-[#866EE1] rounded-[72px] 2xl:text-[18px] text-[#FFFFFF]"
            >
              Send Request <span className="text-[20px]">&rarr;</span>
            </button>
            {/* <img src="/img/right-arrow.svg" alt="" className="lg:hidden w-[18px] h-[18px] absolute top-[20px] xs:right-[103px] right-[90px] text-red-600"/> */}
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;
