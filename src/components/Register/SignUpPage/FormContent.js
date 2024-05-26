"use client";

import { useForm, Controller } from 'react-hook-form';
import Link from 'next/link';

const FormContent = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data); // You can handle form submission here
  };

  return (
    <div className="self-stretch flex flex-row items-start justify-center py-0 px-20 box-border max-w-full text-21xl text-taittle-color">
      <div className="w-full max-w-screen-lg flex flex-col items-center justify-start gap-12 mq725:gap-6 px-5">
        <div className="self-stretch flex flex-col items-start justify-start gap-12 max-w-full mq725:gap-6">
          <div className="self-stretch flex flex-row items-center justify-between gap-5 max-w-full mq725:flex-wrap">
          <h1 className="m-0 relative text-inherit leading-[56px] font-bold font-inherit inline-block max-w-full mq450:text-5xl mq450:leading-[34px] mq1050:text-13xl mq1050:leading-[45px]">
              Sign Up your account
            </h1>
            <h3 className="m-0 relative text-5xl leading-[32px] font-semibold font-inherit text-primery-color inline-block min-w-[121px] mq450:text-lgi mq450:leading-[26px]">
              Step 1 of 6
            </h3>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <div className="self-stretch rounded-2xl bg-background-color overflow-hidden flex flex-col items-center justify-center py-20 px-10 box-border gap-8 text-xl mq725:gap-4 mq725:py-12">
              <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-6 max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start gap-4 min-w-[356px] max-w-full mq725:min-w-full">
                  <h3 className="m-0 text-left text-lg font-medium">
                    First Name
                  </h3>
                  <Controller
                    name="firstName"
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        className="w-full h-10 rounded-lg bg-white border-[1.5px] border-solid border-orange"
                        type="text"
                        placeholder="Enter your first name"
                      />
                    )}
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-4 min-w-[356px] max-w-full mq725:min-w-full">
                  <h3 className="m-0 text-left text-lg font-medium">
                    Last Name
                  </h3>
                  <Controller
                    name="lastName"
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        className="w-full h-10 rounded-lg bg-white border-[1.5px] border-solid border-orange"
                        type="text"
                        placeholder="Enter your last name"
                      />
                    )}
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-4">
                <h3 className="m-0 text-left text-lg font-medium">
                  Work Email Address
                </h3>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      className="w-full h-10 rounded-lg bg-white border-[1.5px] border-solid border-orange"
                      type="email"
                      placeholder="Enter your email address"
                    />
                  )}
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-4">
                <h3 className="m-0 text-left text-lg font-medium">
                  Password
                </h3>
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="password"
                      className="w-full h-10 rounded-lg bg-white border-[1.5px] border-solid border-orange"
                      placeholder="Enter your password"
                    />
                  )}
                />
              </div>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-center">
                <div className="rounded-[26px] bg-primery-color flex flex-row items-center justify-center py-[15px] px-8 gap-[6px] whitespace-nowrap">
                  <div className="relative leading-[24px] inline-block min-w-[44px]">
                    <Link href="/register/sign-up/welcome">
                      <div className="relative font-semibold font-manrope text-white text-left inline-block whitespace-nowrap"> Agree with Sign Up</div>
                    </Link>
                  </div>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormContent;
