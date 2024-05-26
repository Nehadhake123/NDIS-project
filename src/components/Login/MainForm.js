"use client"
import React from 'react';
import PropTypes from 'prop-types';
import { useForm, Controller } from 'react-hook-form';
import Link from 'next/link';

const LoginFormContainer = ({ className = "" }) => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-20 box-border gap-[56px] max-w-full text-left text-base text-paragraph-font-color font-manrope mq750:gap-[28px] mq750:pb-[34px] mq750:box-border mq1100:pb-[52px] mq1100:box-border ${className}`}>
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-taittle-color">
        <div className="w-[500px] shadow-[0px_0px_42px_rgba(241,_241,_241,_0.51)] rounded-xl bg-white box-border flex flex-col items-start justify-start py-[77px] px-[98px] gap-[16px] max-w-full border-[2px] border-solid border-orange-200 mq450:pt-8 mq450:pb-8 mq450:box-border mq750:pl-[49px] mq750:pr-[49px] mq750:box-border mq1025:pt-[50px] mq1025:pb-[50px] mq1025:box-border">
          <div className="w-[197px] flex flex-row items-start justify-start pt-0 px-0 pb-4 box-border">
            <img
              className="h-[90px] flex-1 relative max-w-full overflow-hidden"
              alt="Logo"
              src="/img/logo.svg"
            />
          </div>
          <div className="flex flex-row items-start justify-start pt-0 px-0 pb-4 text-5xl">
            <h3 className="m-0 relative text-inherit leading-[28px] font-semibold font-inherit mq450:text-lgi mq450:leading-[22px]">Log in your account</h3>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="self-stretch flex flex-col items-start justify-start gap-[12px]">
            <label className="relative leading-[24px] font-medium inline-block min-w-[74px]">
              Email Address
              <div className="self-stretch rounded-[26px] flex flex-row items-start justify-start py-3.5 px-16 border-[1px] border-solid border-orange-100">
                <div className="h-14 relative rounded-[26px] box-border hidden border-[1px] border-solid border-orange-100" />
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      className="[border:none] [outline:none] font-manrope text-base bg-[transparent] h-6  relative leading-[24px] text-paragraph-font-color text-left inline-block p-0 z-[1]"
                      placeholder="Email"
                      type="text"
                      {...field}
                    />
                  )}
                />
              </div>
            </label>
            <label className="relative leading-[24px] font-medium inline-block min-w-[73px]">
              Password
              <div className="self-stretch rounded-[26px] flex flex-row items-start justify-start py-3.5 px-16 text-paragraph-font-color border-[1px] border-solid border-orange-100">
                <Controller
                  name="password"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      className="[border:none] [outline:none] font-manrope  text-base bg-[transparent] h-6 relative leading-[24px] text-paragraph-font-color text-left inline-block p-0 z-[1]"
                      placeholder="Password"
                      type="password"
                      {...field}
                    />
                  )}
                />
              </div>
            </label>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start pt-0 px-0 pb-2 gap-[4px] text-primery-color font-paragraph-2-font-size-16">
              <div className="flex-1 flex flex-col items-start justify-start pt-[11.5px] px-0 pb-0 box-border min-w-[89px]">
                <div className="self-stretch h-px relative bg-teal box-border border-[1px] border-solid border-orange-100" />
              </div>
              <div className="relative leading-[24px] inline-block min-w-[17px] mq450:w-full mq450:h-[17px]">or</div>
              <div className="flex-1 flex flex-col items-start justify-start pt-[11.5px] px-0 pb-0 box-border min-w-[89px]">
                <div className="self-stretch h-px relative bg-teal box-border rounded-[26px] border-solid border-orange-100" />
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-2 text-sm text-tittle-color">
              <button className="flex-1 flex flex-col items-center justify-center rounded-[26px] py-3.5 px-6 border-[1px] border-solid border-orange-100">
                <div className="flex flex-row items-center justify-start py-0 px-5 gap-[12px]">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt="Google Icon"
                    src="/img/google.svg"
                  />
                  <div className="relative leading-[128.5%] font-medium">Continue with Google</div>
                </div>
              </button>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-2">
              <button type="submit" className="cursor-pointer [border:none] py-4 px-5 bg-primery-color flex-1 rounded-[26px] flex flex-row items-start justify-center whitespace-nowrap hover:bg-chocolate">
                <b className="relative text-lg leading-[24px] font-semibold font-manrope text-white text-left inline-block min-w-[52px]">Log in</b>
              </button>
            </div>
          </form>
          <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-2 pr-px pl-0">
            <button className="relative rounded-[26px] leading-[24px] inline-block min-w-[120px] text-primery-color">Reset password</button>
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-16 mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="flex flex-col items-start justify-start gap-[16px]">
              <div className="relative leading-[24px]">Don’t have an account?</div>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-center ">
                <div className="rounded-[26px] bg-primery-color flex flex-row items-center justify-center py-[15px] px-10 gap-[6px] whitespace-nowrap">
                  <div className="relative leading-[24px] inline-block min-w-[44px]">
                    <Link href="/register">
                      <div className="relative text-lg leading-[26px] font-semibold font-manrope text-white text-left inline-block whitespace-nowrap">Register</div>
                    </Link>
                  </div>
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    alt=""
                    src="/img/LeftArrow.svg" // Updated image path
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

LoginFormContainer.propTypes = {
  className: PropTypes.string,
};

const MainForm = (props) => {
  return <LoginFormContainer {...props} />;
};

export default MainForm;
