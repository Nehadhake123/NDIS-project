"use client"
import { useForm, Controller } from 'react-hook-form';
import ContentRegisterForm from './ContentRegisterForm';
import Link from 'next/link';

const RegisterForm = ({ className = "" }) => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Handle form submission here
  };

  return (
    <section className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-20 box-border gap-[56px] max-w-full text-left text-base text-paragraph-font-color font-manrope lg:pb-[52px] lg:box-border mq750:gap-[28px] mq750:pb-[34px] mq750:box-border ${className}`}>
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-taittle-color">
        <div className="w-[500px] shadow-[0px_0px_42px_rgba(241,_241,_241,_0.51)] rounded-xl bg-white box-border flex flex-col items-start justify-start py-[77px] px-[98px] gap-[32px] max-w-full border-[2px] border-solid border-orange-200 lg:pt-[50px] lg:pb-[50px] lg:box-border mq750:gap-[16px] mq750:py-8 mq750:px-[49px] mq750:box-border">
          <img className="w-[197px] h-[90px] relative overflow-hidden shrink-0" alt="NDIS Logo" src="/img/logo.svg" />
          <form onSubmit={handleSubmit(onSubmit)} className="self-stretch  flex flex-col items-start justify-start gap-[24px]">
            <div className="flex flex-row items-start justify-start pt-0 px-0 pb-2 text-5xl">
              <h3 className="m-0 relative text-inherit leading-[28px] font-semibold font-inherit mq450:text-lgi mq450:leading-[22px]">
                Create your Account
              </h3>
            </div>
            <Controller
              name="firstName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <ContentRegisterForm
                  fieldName="First Name"
                  placeholder="Enter First Name"
                  field={field}
                />

              )}
            />
            <Controller
              name="lastName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <ContentRegisterForm
                  fieldName="Last Name"
                  placeholder="Enter Last Name"
                  field={field}
                />
              )}
            />

            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <ContentRegisterForm
                  fieldName="Email Address"
                  placeholder="Enter Your Email"
                  field={field}
                />
              )}
            />

            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                  <div className="relative leading-[24px] font-medium inline-block min-w-[73px]">
                    Password
                  </div>
                  <div className="self-stretch rounded-[26px] flex flex-row items-start justify-start py-0 px-6 text-paragraph-font-color border-[1px] border-solid border-orange-100">
                    <input
                      {...field}
                      type="password"
                      className="w-full h-14 bg-transparent outline-none border-none"
                      placeholder="Password"
                    />
                  </div>
                </div>
              )}
            />

            <Controller
              name="confirmPassword"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <ContentRegisterForm
                  fieldName="Confirm Password"
                  placeholder="Confirm Password"
                  field={field}
                />
              )}
            />
            
             <button className="self-stretch rounded-[26px] flex flex-col items-center justify-center py-3.5 px-6 border-[1px] border-solid border-orange-200">
                  <div className="flex flex-row items-center justify-start py-0 px-5 gap-[12px]">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/img/google.svg"
                    />
                     <Link href="/register/sign-up">
            <div className="relative font-medium inline-block whitespace-nowrap">Connect with google</div>
            </Link>
                  </div>
                </button>
               
            <div type="submit" className="cursor-pointer py-4 px-5 bg-primery-color self-stretch rounded-[26px] flex flex-row items-start justify-center hover:bg-chocolate">
            <Link href="/register/sign-up/welcome">
              <b className="relative text-lg leading-[24px] font-semibold font-manrope text-white text-left inline-block min-w-[75px]">
             
            <div className="relative font-semibold font-manrope text-white inline-block whitespace-nowrap">Register</div>
            
              </b>
              </Link>
            </div>
           
          </form>
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-[55px] mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="flex-1 flex flex-col items-start justify-start gap-[16px]">
              <div className="relative leading-[24px]">
                Already have an account?
              </div>
              
                <span className="flex flex-row items-start justify-start py-0 px-[72px] text-primery-color whitespace-nowrap">
                <Link href="/login">
            <div className="relative font-medium inline-block whitespace-nowrap">Log in</div>
            </Link>
                </span>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;
